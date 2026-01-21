// import libraries
import './App.css';
import logo from './logo.png';
import banner from './banner.png';
import React, { useState, useRef, useEffect } from 'react';
import { generatePDF } from './pdfGenerator';
import { getKeycloak, getUserEmail, getUserIDIR } from './keycloak'; 
import { validateFirstname } from './validators';
// import mappings
import RequestTypeButtons from './RequestTypeButtons';
import DCVMapping from './DCVMapping';
import addressMapping from './addressMapping';

// import sections
import CurrentInformationSection from './CurrentInformationSection';
import RequestSection from './RequestSection';
import ReportSection from './ReportSection';
import RemovalSection from './RemovalSection';

function App() {
  const today = new Date().toISOString().split('T')[0];
  const initialFormData = {
    request_type: [],
    firstname: '',
    lastname: '',
    employee_id: '',
    effective_date: today,
    todays_date: today,
    requestor_email: '',
    removal_items: [{ id: Date.now(), description: '', serialNumber: '', assetTag: '', condition: '', quantity: '', category: '', notes: '' }],
  };
  
  const formRef = useRef(null)
  const fileInputRefs = useRef([]);
  const [formData, setFormData] = useState(initialFormData);
  const [attachments, setAttachments] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false); // State for accordion

  const [initialized, setInitialized] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState(null); // State to store the token
  
  useEffect(() => {
    getKeycloak()
      .then((keycloak) => {
        setInitialized(true);
        setAuthenticated(keycloak.authenticated);

        // Set the email of the logged-in user
        const user_email = getUserEmail();
        if (user_email) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            requestor_email: user_email,
          }));
        }

        // Store the token
        setToken(keycloak.token);
      })
      .catch((err) => {
        console.error('Keycloak initialization failed:', err);
      });
  }, []);

  if (!initialized) {
    return <div>Loading...</div>;
  }

  if (!authenticated) {
    return <div>Authentication required. Redirecting...</div>;
  }
  

  // handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Update office and auto-populate DCV based on DCV mapping
    if (name === 'office') {
      const updatedDCV = DCVMapping[value] || '';
      setFormData((prevFormData) => ({
        ...prevFormData,
        office: value,
        dcv: updatedDCV,
      }));
      setFormData((prevFormData) => ({
        ...prevFormData,
        office: value,
        request_office: value,
        removal_office: value,
      }));
      const updatedAddress = addressMapping[value] || '';
      setFormData((prevFormData) => ({
        ...prevFormData,
        request_office: value,
        request_address : updatedAddress,
        removal_address : updatedAddress,
      }));
    // auto-populate addresses based on address mapping
    } else if (name === 'request_office') {
      const updatedAddress = addressMapping[value] || '';
      setFormData((prevFormData) => ({
        ...prevFormData,
        request_office: value,
        request_address : updatedAddress,
      }));
    // auto-populate addresses based on address mapping
    } else if (name === 'removal_office') {
      const updatedAddress = addressMapping[value] || '';
      setFormData((prevFormData) => ({
        ...prevFormData,
        removal_office: value,
        removal_address : updatedAddress,
      }));
    // auto-populate request_firstname when firstname changes
    } else if (name === 'firstname') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        firstname: value,
        request_firstname: value,
        removal_firstname: value,
      }));
    // auto-populate request_lastname when lastname changes
    } else if (name === 'lastname') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        lastname: value,
        request_lastname: value,
        removal_lastname: value,
      }));
    // Update checkboxes
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  // Toggle function for request types (multi-select)
  const handleRequestTypeSelect = (type) => {
    setFormData((prevData) => {
      const currentSelections = prevData.request_type || [];
      if (currentSelections.includes(type)) {
        // Remove type if it's already selected
        return {
          ...prevData,
          request_type: currentSelections.filter((t) => t !== type)
        };
      } else {
        // Add the type to selections
        return {
          ...prevData,
          request_type: [...currentSelections, type]
        };
      }
    });
  };

  // handle form attachments
  const handleFileChange = (e, index = 0) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 20 * 1024 * 1024) {
      window.alert('Attachment size must be 20MB or less.');
      if (fileInputRefs.current[index]) fileInputRefs.current[index].value = '';
      return;
    }
    setAttachments(prev => {
      const next = [...prev];
      next[index] = file;
      return next;
    });
  };

  const handleAddAttachment = (e, index) => {
    handleFileChange(e, index);
  };

  const addNewAttachmentField = () => {
    setAttachments((prevAttachments) => [...prevAttachments, null]); // Add a placeholder for a new file
  };

  // Handle adding a new removal item row
  const handleAddRemovalItem = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      removal_items: [
        ...prevFormData.removal_items,
        { id: Date.now(), description: '', serialNumber: '', assetTag: '', condition: '', quantity: '', category: '', notes: '' }
      ]
    }));
  };

  // Handle updating a removal item field
  const handleRemovalItemChange = (itemId, fieldName, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      removal_items: prevFormData.removal_items.map((item) =>
        item.id === itemId ? { ...item, [fieldName]: value } : item
      )
    }));
  };

  // handle form submission
  const handleSubmit = async e => {
    e.preventDefault();
    
    // Validate request_type is required
    if (!formData.request_type || formData.request_type.length === 0) {
      window.alert('Please select at least one Request Type.');
      return;
    }

    // Validate firstname
    const firstnameError = validateFirstname(formData.firstname);
    if (firstnameError) {
      window.alert(firstnameError);
      return;
    }

    setIsSubmitting(true);
    const now = new Date();
    const formattedDate = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      
    try {
      // 0) collect the user‐picked File[] attachments
      const files = attachments.filter(Boolean); // drop any null placeholders

      // 1) PDF first
      const dataUri    = await generatePDF();
      const pdfBase64  = dataUri.split(',')[1];
      window.open(dataUri, '_blank');

      
      /*
      // 2) now turn each File into { filename, content: base64, contentType }
      const filePromises = files.map(
        file =>
          new Promise((res, rej) => {
            const reader = new FileReader();
            reader.onerror = rej;
            reader.onload  = () => {
              // reader.result is "data:<mime>;base64,AAAA..."
              const [meta, base64] = reader.result.split(',');
              res({
                filename:    file.name,
                content:     base64,
                contentType: file.type
              });
            };
            reader.readAsDataURL(file);
          })
      );
      const attachmentsPayload = await Promise.all(filePromises);

      const facilitiesEmail = process.env.REACT_APP_FACILITIES_EMAIL;

      // 3) POST them
      const API = process.env.REACT_APP_MAIL_SERVER_URL || 'http://localhost:3001';
      const response = await fetch(`${API}/send-pdf`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Use the token from state
        },
        body: JSON.stringify({
          email:        process.env.REACT_APP_STAFFING_EMAIL || 'sinan.soykut@gov.bc.ca',
          pdfBase64,
          firstname:    formData.firstname,
          lastname:     formData.lastname,
          employeeID:   formData.employee_id,
          ccMail:       formData.requestor_email, 
          bccMail:      `${facilitiesEmail}`,
          date:         formData.todays_date,
          attachments:  attachmentsPayload
        })
      });

      
      let result;
      try {
        result = await response.json();
      } catch (jsonErr) {
        throw new Error('Failed to parse server response.');
      }

      // Show error from server if available
      if (!response.ok || !result.ok) {
        const errorMsg = result && result.error ? result.error : response.statusText;
        throw new Error(`Mail send failed: ${errorMsg}`);
      }
      else {
        // 3) show success and reset
        window.alert(`An email has been sent to the Facilities inbox, as well as: ${formData.requestor_email}`);

        // log submission to backend
        await fetch(process.env.REACT_APP_MAIL_SERVER_URL + '/log-submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            idir_username: getUserIDIR(),
            datetime: formattedDate
          })
        });

        // reset all form fields, clear out your attachments array
        const user_email = getUserEmail();
        setFormData({
          ...initialFormData,
          requestor_email: user_email || ''
        });
        setAttachments([]);
        formRef.current?.reset(); // reset the form element
        setIsSubmitting(false);
      }
      */
     
      // reset all form fields, clear out your attachments array
        const user_email = getUserEmail();
        setFormData({
          ...initialFormData,
          requestor_email: user_email || ''
        });
        setAttachments([]);
        formRef.current?.reset(); // reset the form element
        setIsSubmitting(false);
      
    } catch (err) {
      console.error('Mail submission error:', err);
      window.alert(`Mail submission error: ${err.message || err}`);
      setIsSubmitting(false);
    }
  }

  return (
    <div className="App">
      {!submitted ? (
        <form ref={formRef} id="form-to-pdf" onSubmit={handleSubmit}>
          <div className="content">
            <div className="header">
              <img src={logo} alt="Logo" className="logo" />
              <img src={banner} alt="Banner" className="banner" />
              <h2 style={{ textAlign: 'left', paddingLeft: '10px', color: '#444444' }}>Easier Tool</h2>
              <p className="field-note" style={{paddingLeft: '10px'}}>This tool is for SDD staff to send requests to Facilities & Assets. <br></br>A copy of the form will be sent to the submitter's email.</p>
            </div>

            {/* Collapsible Accordion */}
            <div style={{ marginBottom: '20px'}}>
              <button
                type="button"
                onClick={() => setAccordionOpen(!accordionOpen)}
                style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: '#e2e2e2ff',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  fontSize: '0.9em'
                }}
              >
                {accordionOpen ? '▼' : '▶'} Services not covered by Facilities and Assets
              </button>
              {accordionOpen && (
                <div style={{ padding: '15px', backgroundColor: '#fafafa' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#f0f0f0' }}>
                        <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Request Type</th>
                        <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Contact Information</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ border: '1px solid #ddd', padding: '10px' }}><strong>Non-Standard Ergonomic Equipment</strong><br></br> Occupational Health and Safety (OHS) Services</td>
                        <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                          <a href="https://theloop.sdpr.gov.bc.ca/" target="_blank" rel="noopener noreferrer">Occupational health and safety - The Loop: SDPR Intranet</a><br />SDD.OHS@gov.bc.ca
                        </td>
                      </tr>
                      <tr>
                        <td style={{ border: '1px solid #ddd', padding: '10px' }}><strong>Repairs and Related Services</strong> <br></br><em>*First step: contact 7-7000 and then complete Easier Tool Request and include case number.</em> <br></br><strong>Computers, Landlines, Monitors, MPS Printers, Mobile Devices and Applications, and Unified Communication (UC)</strong></td>
                        <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                          7-7000 Service Desk<br />
                          1 (250) 387-7000<br />
                          77000@gov.bc.ca
                        </td>
                      </tr>
                      <tr>
                        <td style={{ border: '1px solid #ddd', padding: '10px' }}><strong>Buildings</strong> <br></br>Daily and emergency property management facility related services</td>
                        <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                          <strong>CBRE</strong><br />
                          1-877-222-3112<br />
                          <a href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/real-estate-space/facilities-management-services/sirequest-web-portal" target="_blank" rel="noopener noreferrer">SIRequest Web Portal</a><br />                                                   
                        </td>
                      </tr>
                      <tr>
                        <td style={{ border: '1px solid #ddd', padding: '10px' }}><strong>Vehicles</strong> <br></br>Car Bookings</td>
                        <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                          <strong>SDD Vehicle Fleet</strong><br />
                          <a href="https://www.google.com/maps/d/viewer?mid=1sP1tcELj-_vHWXjhi9NMF8Q_oK96TrQ&ll=52.51373341745337%2c-122.18208899999999&z=6" target="_blank" rel="noopener noreferrer">Click to view fleet contact list</a>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ border: '1px solid #ddd', padding: '10px' }}><strong>Vehicles</strong> <br></br>Accident, vandalism, incident reports, and ICBC claims</td>
                        <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                          <a href="https://www2.gov.bc.ca/gov/content/bc-procurement-resources/buy-for-government/goods-and-services-catalogue/vehicle-fleet-management/vehicle-fleet-information" target="_blank" rel="noopener noreferrer">Holman Fleet Services</a><br />
                          1 (855) 446-4274
                        </td>
                      </tr>
                      <tr>
                        <td style={{ border: '1px solid #ddd', padding: '10px' }}><strong>Vehicles</strong> <br></br>Roadside Assistance</td>
                        <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                          <a href="https://www2.gov.bc.ca/assets/gov/government/services-for-government-and-broader-public-sector/buy-goods-services-and-construction/goods-and-services-catalogue/csa-assets/vehicle-fleet-management/accident_management_mapping_process_flowchart.pdf" target="_blank" rel="noopener noreferrer">Holman Accident Management</a><br />
                          1 (855) 446-4274
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            
            <div className="request-type-container">
              <label style={{ fontWeight: 'bold', fontSize: '0.9em' }}>
                Request Type:
              </label>
              <RequestTypeButtons
                selected={formData.request_type}
                onSelect={handleRequestTypeSelect}
              />
            </div>
                        
            {formData.request_type && formData.request_type.length > 0 && (
              <div className="request-type-info">
                <p style={{ fontSize: '0.8em' }}>
                <b>Collection Notice:</b> We are collecting your personal information for the purpose of obtaining the approvals for access to SDPR HR Data under section 26(c) of the Freedom of Information and Protection of Privacy Act. If you have any questions, please contact WIRTeam@gov.bc.ca.
                </p>
              </div>
            )}     

            {/* display requestor information section */}
            <CurrentInformationSection
              formData={formData}
              onChange={handleInputChange}
            />

            {/* if selected, insert Request section */}
            {formData.request_type.includes('Request') && (
              <RequestSection
                formData={formData}
                onChange={handleInputChange}
              />
            )}

            {/* if selected, insert Report section */}
            {formData.request_type.includes('Report Building Issue') && (
              <ReportSection
                formData={formData}
                onChange={handleInputChange}
              />
            )}

            {/* if selected, insert Removal section */}
            {formData.request_type.includes('Removal') && (
              <RemovalSection 
                formData={formData} 
                onChange={handleInputChange}
                onAddRemovalItem={handleAddRemovalItem}
                onRemovalItemChange={handleRemovalItemChange}
              />
            )}

            {/* display the dates/comments/attachments section */}
            <div className="header-container">
              <h4 style={{ color: '#555555' }}>Additional Information</h4>
            </div> 
            <div><br></br></div>
            <div className="textarea-field" style={{ paddingLeft: '30px' }}>
              <label htmlFor="comments">Additional Information:</label> <br></br>
              <textarea
                id="comments"
                name="comments"
                rows="4" 
                value={formData.comments || ''}
                onChange={handleInputChange}
              />
              <p className="field-note">
                Enter any additional information or comments you may have (optional)
              </p>
            </div><br></br>

            <div style={{ paddingLeft: '30px' }}>
              <button type="button" onClick={addNewAttachmentField}>
                Attach a file
              </button>
              <p className="field-note">You can upload pdf's, documents, or other files.</p>            
            </div>
            {attachments.map((attachment, index) => (
              <div key={index} style={{ marginBottom: '10px', paddingLeft: '30px' }}>
                <input
                  type="file"
                  ref={el => fileInputRefs.current[index] = el}
                  onChange={e => handleAddAttachment(e, index)}
                />
              </div>
            ))}

            <div style={{ paddingLeft: '30px' }}>
              <button type="submit" style={{ backgroundColor: '#2172ff', color: 'white' }} disabled={isSubmitting}>Email</button>
            </div>
          </div>
        </form>
        ) : (
          <div>
            <div className="header">
              <img src={logo} alt="Logo" className="logo" />
              <img src={banner} alt="Banner" className="banner" />
              <h2 style={{ textAlign: 'left', paddingLeft: '10px', color: '#444444' }}>Easier Tool</h2>
            </div>
            <h2>Thank you for submitting!</h2>
            <p>An email has been sent to the Facilities inbox, as well as: <br></br>{formData.requestor_email}</p>
            <button onClick={() => setSubmitted(false)}>Submit Another</button>
          </div>
        )}
    </div>
  );
}

export default App;
