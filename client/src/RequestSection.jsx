import React from 'react';
import OfficeDropdown from './OfficeDropdown';

export default function RequestSection({ formData, onChange }) {
  return (
    <>
        <div className="header-container">
            <h4 style={{ color: '#555555' }}>Requests</h4>
        </div>
        <div className="request-change-content">
            <section className="info-section">
            <p>Select all that apply:</p>
            <div className="checkbox-group">
                <div>
                <input
                    type="checkbox"
                    id="cables_adapters"
                    name="cables_adapters"
                    checked={formData.cables_adapters || false}
                    onChange={onChange}
                />
                <label htmlFor="cables_adapters">Cables and Adapters</label>
                </div>
                <div>
                <input
                    type="checkbox"
                    id="cisb_equipment"
                    name="cisb_equipment"
                    checked={formData.cisb_equipment || false}
                    onChange={onChange}
                />
                <label htmlFor="cisb_equipment">CISB Equipment</label>
                </div>
                <div>
                <input
                    type="checkbox"
                    id="keyboards"
                    name="keyboards"
                    checked={formData.keyboards || false}
                    onChange={onChange}
                />
                <label htmlFor="keyboards">Keyboards</label>
                </div>
                <div>
                <input
                    type="checkbox"
                    id="laptops"
                    name="laptops"
                    checked={formData.laptops || false}
                    onChange={onChange}
                />
                <label htmlFor="laptops">Laptops</label>
                </div>
                <div>
                <input
                    type="checkbox"
                    id="mobile_phone"
                    name="mobile_phone"
                    checked={formData.mobile_phone || false}
                    onChange={onChange}
                />
                <label htmlFor="mobile_phone">Mobile Phones</label>
                </div>
                <div>
                <input
                    type="checkbox"
                    id="monitors"
                    name="monitors"
                    checked={formData.monitors || false}
                    onChange={onChange}
                />
                <label htmlFor="monitors">Monitors</label>
                </div>
                <div>
                <input
                    type="checkbox"
                    id="mouse"
                    name="mouse"
                    checked={formData.mouse || false}
                    onChange={onChange}
                />
                <label htmlFor="mouse">Mouse</label>
                </div>
                <div>
                <input
                    type="checkbox"
                    id="software"
                    name="software"
                    checked={formData.software || false}
                    onChange={onChange}
                />
                <label htmlFor="software">Software</label>
                </div>
                <div>
                <input
                    type="checkbox"
                    id="unified_comms"
                    name="unified_comms"
                    checked={formData.unified_comms || false}
                    onChange={onChange}
                />
                <label htmlFor="unified_comms">Unified Communications (UC)</label>
                </div>
                <div>
                <input
                    type="checkbox"
                    id="webcams"
                    name="webcams"
                    checked={formData.webcams || false}
                    onChange={onChange}
                />
                <label htmlFor="webcams">Webcams</label>
                </div>
                <div>
                <input
                    type="checkbox"
                    id="other_equipment"
                    name="other_equipment"
                    checked={formData.other_equipment || false}
                    onChange={onChange}
                />
                <label htmlFor="other_equipment">Other Equipment</label>
                </div>
            </div>                
            </section>
            {formData.drive_folders === true && (
            <>
                <div className="textarea-field">
                    <label htmlFor="drives_folders">What specific drives and folders are required?</label> <br></br>
                    <textarea
                        id="drives_folders"
                        name="drives_folders"
                        rows="2" 
                        value={formData.drives_folders || ''}
                        onChange={onChange}
                    />
                </div>
                <p className="field-note">
                Please include the S# of the drive that you are requesting and specific folders. Example S\\12345\Folder
                </p>
            </>
            )}
            {formData.mailboxes === true && (
            <>
                <div className="radio-group">
                <label><strong>Mailbox change request</strong></label>
                <div>
                    <input
                    type="radio"
                    id="send_from"
                    name="mailbox_radio"
                    value="send_from"
                    checked={formData.mailbox_radio === 'send_from'}
                    onChange={onChange}
                    />
                    <label htmlFor="send_from">'Send From' access</label>
                </div>
                <div>
                    <input
                    type="radio"
                    id="ownership"
                    name="mailbox_radio"
                    value="ownership"
                    checked={formData.mailbox_radio === 'ownership'}
                    onChange={onChange}
                    />
                    <label htmlFor="ownership">Mailbox ownership</label>
                </div>
                <div>
                    <input
                    type="radio"
                    id="backup"
                    name="mailbox_radio"
                    value="backup"
                    checked={formData.mailbox_radio === 'backup'}
                    onChange={onChange}
                    />
                    <label htmlFor="backup">Backup ownership</label>
                </div>
                <div>
                    <input
                    type="radio"
                    id="removal"
                    name="mailbox_radio"
                    value="removal"
                    checked={formData.mailbox_radio === 'removal'}
                    onChange={onChange}
                    />
                    <label htmlFor="removal">Removal</label>
                </div>
                </div>
                <div className="textarea-field">
                <label htmlFor="mailbox_comments">Provide the names and emails of the required mailboxes as per the GAL:</label> <br></br>
                <textarea
                    id="mailbox_comments"
                    name="mailbox_comments"
                    rows="4" 
                    value={formData.mailbox_comments || ''}
                    onChange={onChange}
                />
                </div><br></br>  
            </>
            )}
            {formData.expense_authority === true && (
            <>
                <label>
                <p>
                For signing/expense authority access, please ensure that you complete an &nbsp;
                <a 
                    href="https://intranet.gov.bc.ca/assets/intranet/documents/sdpr/sdd/operations-support/centralized-recruitment-and-staffing/expense_authority_-_signature_request_form.pdf" 
                    style={{ color: '#4A90E2', textDecoration: 'underline' }} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Expense Authority Signature Request 
                </a> 
                &nbsp; and send it to the &nbsp;
                <a 
                    href="mailto:SDSI.OPSSupport.Staffing@gov.bc.ca" 
                    style={{ color: '#4A90E2', textDecoration: 'underline' }}
                >
                    Staffing Inbox
                </a>.
                </p>
                </label>
            </>
            )}
            {formData.third_party_checks === true && (
            <>
                <label>
                <p>
                <strong>For all Equifax password resets</strong> and/or certificate renewals please contact the&nbsp;
                <a 
                    href="mailto:SDSI.OPSSupport.Staffing@gov.bc.ca" 
                    style={{ color: '#4A90E2', textDecoration: 'underline' }}
                >
                    Staffing Inbox
                </a>.
                </p>
                </label>
                <div>
                <label htmlFor="third_party_checks_request">
                    Equifax request details:
                </label><br></br>
                <input
                    id="third_party_checks_request"
                    type="text"
                    name="third_party_checks_request"
                    value={formData.third_party_checks_request}
                    onChange={onChange}
                />
                </div><br></br>
            </>
            )}
            {formData.icbc === true && (
            <>
                <label>
                <strong>ICBC request</strong>
                </label>
                <div className="radio-group">
                <label>Has this employee completed IM117 (Protection of Privacy, Access to Information and Records Management) within the past 24 months?</label>
                <div>
                    <input
                    type="radio"
                    id="im117_yes"
                    name="icbc_im117"
                    value="yes"
                    checked={formData.icbc_im117 === 'yes'}
                    onChange={onChange}
                    />
                    <label htmlFor="im117_yes">Yes</label>
                </div>
                <div>
                    <input
                    type="radio"
                    id="im117_no"
                    name="icbc_im117"
                    value="no"
                    checked={formData.icbc_im117 === 'no'}
                    onChange={onChange}
                    />
                    <label htmlFor="im117_no">No</label>
                </div>
                </div>  
                <div className="date-field">
                <label htmlFor="im117_date">
                    Date completed:
                </label>
                <input
                    type="date"
                    id="im117_date"
                    name="im117_date"
                    value={formData.im117_date || ''}
                    onChange={onChange}
                />
                </div> 
            </>
            )}
            {formData.vital_stats === true && (
            <>
                <label>
                <strong>Vital Statistics</strong>
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                    <label htmlFor="vital_name">Name:</label><br />
                    <input
                    id="vital_name"
                    type="text"
                    name="vital_name"
                    value={formData.vital_name}
                    onChange={onChange}
                    />
                </div>
                <div>
                    <label htmlFor="vital_idir">IDIR:</label><br />
                    <input
                    id="vital_idir"
                    type="text"
                    name="vital_idir"
                    value={formData.vital_idir}
                    onChange={onChange}
                    />
                </div>
                <div>
                    <label htmlFor="vital_email">Email address:</label><br />
                    <input
                    id="vital_email"
                    type="email"
                    name="vital_email"
                    value={formData.vital_email}
                    onChange={onChange}
                    />
                </div>
                <OfficeDropdown
                    id="vital_office"
                    name="vital_office"
                    value={formData.vital_office}
                    onChange={onChange}
                />
                </div>
                <br />
            </>
            )}
            {formData.new_hires === true && (
            <>
                <label>
                <strong>New hire details</strong>
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                
                <div>
                    <label htmlFor="new_hire_position">Position:</label><br></br>
                    <input
                    id="new_hire_position"
                    type="text"
                    name="new_hire_position"
                    value={formData.new_hire_position}
                    onChange={onChange}
                    />
                </div>
                <OfficeDropdown
                    id="new_hire_office"
                    name="new_hire_office"
                    value={formData.new_hire_office}
                    onChange={onChange}
                />
                <div>
                    <label htmlFor="new_hire_service_office">ICM service office:</label><br />
                    <input
                    id="new_hire_service_office"
                    type="text"
                    name="new_hire_service_office"
                    value={formData.new_hire_service_office}
                    onChange={onChange}
                    />
                </div>
                </div>
                <div style={{ marginTop: '20px' }}>
                <label htmlFor="new_hire_drives">Drive/folder to be added:</label><br />
                <input
                    id="new_hire_drives"
                    type="text"
                    name="new_hire_drives"
                    value={formData.new_hire_drives}
                    onChange={onChange}
                    style={{ width: '100%' }}
                />
                <p className="field-note">Please include the S# of the drive that you are requesting and specific folders. Example S\\12345\Folder</p>
                </div>
            </>
            )}
            {formData.webaob === true && (
            <>
                <label>
                <p>
                For WebAOB access requests and WebAOB password resets please email: &nbsp;
                <a 
                    href="mailto:SDPR.ThirdPartyAccess@gov.bc.ca" 
                    style={{ color: '#4A90E2', textDecoration: 'underline' }}
                >
                    SDPR.ThirdPartyAccess@gov.bc.ca
                </a>.
                </p>
                </label>
            </>
            )}
            {formData.other_access === true && (
            <>
                <div className="textarea-field">
                <label htmlFor="access_comments">What do you need access to?</label> <br></br>
                <textarea
                    id="access_comments"
                    name="access_comments"
                    rows="4" 
                    value={formData.access_comments || ''}
                    onChange={onChange}
                />
                </div>
            </>
            )}
            <div>
                <p>Shipping Information:</p>
                
                    <div>
                        <label htmlFor="shipping_firstname">Site Contact First Name: </label>
                        <input
                            id="shipping_firstname"
                            type="text"
                            name="shipping_firstname"
                            value={formData.shipping_firstname}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="shipping_lastname">Site Contact Last Name: </label>
                        <input
                            id="shipping_lastname"
                            type="text"
                            name="shipping_lastname"
                            value={formData.shipping_lastname}
                            onChange={onChange}
                        />
                    </div>
                    <OfficeDropdown
                        id="request_office"
                        name="request_office"
                        value={formData.request_office}
                        onChange={onChange}
                    />
                    <div>
                    <label htmlFor="request_address">Address:</label>
                    <input
                        id="request_address"
                        type="text"
                        name="request_address"
                        value={formData.request_address || ''}
                        onChange={onChange}
                    />
                    </div>
            </div>
        </div>
    </>
  );
}
