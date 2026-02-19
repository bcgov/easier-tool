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
    const files = e.target.files;
    if (!files || files.length === 0) return;
    // if multiple selected, delegate to handler
    if (files.length > 1) {
      handleFilesSelected(files);
      return;
    }
    const file = files[0];
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

  // Handle multiple selected or dropped files
  const handleFilesSelected = (fileList) => {
    const filesArray = Array.from(fileList);
    const filtered = [];
    for (const file of filesArray) {
      if (file.size > 20 * 1024 * 1024) {
        window.alert(`Attachment "${file.name}" exceeds 20MB and will be skipped.`);
        continue;
      }
      filtered.push(file);
    }
    if (filtered.length === 0) return;
    setAttachments(prev => [...prev, ...filtered]);
  };

  const addNewAttachmentField = () => {
    // Trigger the hidden file input to allow multi-select/upload
    if (!fileInputRefs.current[0]) return;
    fileInputRefs.current[0].click();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (!e.dataTransfer) return;
    handleFilesSelected(e.dataTransfer.files);
  };

  const removeAttachment = (index) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
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
      
      // display PDF to browser for testing
      //window.open(dataUri, '_blank');

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

      // 3) POST them
      const API = process.env.REACT_APP_MAIL_SERVER_URL || 'http://localhost:3001';
      const response = await fetch(`${API}/send-pdf`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Use the token from state
        },
        body: JSON.stringify({
          email:        process.env.REACT_APP_FACILITIES_EMAIL || 'sinan.soykut@gov.bc.ca',
          pdfBase64,
          firstname:    formData.firstname,
          lastname:     formData.lastname,
          ccMail:       formData.requestor_email, 
          //bccMail:      `${requestor_email}`,
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
              <p className="field-note" style={{paddingLeft: '10px'}}>Instructions:<br></br>
                1. Fill out the form below. Note that you can make multiple requests with the same submission.<br></br>
                2. Once finished, use the "Email" button at the bottom of the page to submit.<br></br>
                3. You will receive a copy of the submission by email.<br></br>
              </p>
            </div>

            {/* Collapsible Accordion */}
            <div className="no-print" style={{ marginBottom: '20px'}}>
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
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                onClick={() => fileInputRefs.current[0]?.click()}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') fileInputRefs.current[0]?.click(); }}
                role="button"
                tabIndex={0}
                style={{ border: '2px dashed #ccc', padding: '12px', borderRadius: '4px', cursor: 'pointer', width: '100%', boxSizing: 'border-box' }}
              >
                <input
                  type="file"
                  id="file-upload"
                  multiple
                  style={{ display: 'none' }}
                  ref={el => fileInputRefs.current[0] = el}
                  onChange={e => handleFilesSelected(e.target.files)}
                />
                <p className="field-note" style={{ margin: '8px 0 0 0' }}>Drag & drop files here, or click to select multiple files (max 20MB per file)</p>
              </div>

              {attachments && attachments.length > 0 && (
                <ul className="attachment-list">
                  {attachments.map((file, i) => (
                    <li key={i} style={{ marginBottom: '6px' }}>
                      {file.name} &nbsp;
                      <button type="button" onClick={() => removeAttachment(i)}>Remove</button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

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
