import React from 'react';

const ReportSection = ({ formData, onChange }) => {

  return (
    <>
      <div className="header-container">
        <h4 style={{ color: '#555555' }}>Reports</h4>
      </div>
      <div className="request-change-content">
        <section className="info-section">
          <p>Select all that apply:</p>
          <div className="checkbox-group">
            <div>
              <input
                  type="checkbox"
                  id="building_exterior"
                  name="building_exterior"
                  checked={formData.building_exterior || false}
                  onChange={onChange}
              />
              <label htmlFor="building_exterior">Building Exterior</label>
            </div>
            <div>
              <input
                  type="checkbox"
                  id="building_interior"
                  name="building_interior"
                  checked={formData.building_interior || false}
                  onChange={onChange}
              />
              <label htmlFor="building_interior">Building Interior</label>
            </div>
            <div>
              <input
                  type="checkbox"
                  id="electrical"
                  name="electrical"
                  checked={formData.electrical || false}
                  onChange={onChange}
              />
              <label htmlFor="electrical">Electrical</label>
            </div>
            <div>
              <input
                  type="checkbox"
                  id="fire_safety"
                  name="fire_safety"
                  checked={formData.fire_safety || false}
                  onChange={onChange}
              />
              <label htmlFor="fire_safety">Fire Safety</label>
            </div>      
            <div>
              <input
                  type="checkbox"
                  id="hvac"
                  name="hvac"
                  checked={formData.hvac || false}
                  onChange={onChange}
              />
              <label htmlFor="hvac">HVAC</label>
            </div>     
            <div>
              <input
                  type="checkbox"
                  id="janitorial"
                  name="janitorial"
                  checked={formData.janitorial || false}
                  onChange={onChange}
              />
              <label htmlFor="janitorial">Janitorial</label>
            </div>
            <div>
              <input
                  type="checkbox"
                  id="plumbing"
                  name="plumbing"
                  checked={formData.plumbing || false}
                  onChange={onChange}
              />
              <label htmlFor="plumbing">Plumbing</label>
            </div>
            <div>
              <input
                  type="checkbox"
                  id="security"
                  name="security"
                  checked={formData.security || false}
                  onChange={onChange}
              />
              <label htmlFor="security">Security</label>
            </div>
            <div>
              <input
                  type="checkbox"
                  id="escalation_report"
                  name="escalation_report"
                  checked={formData.escalation_report || false}
                  onChange={onChange}
              />
              <label htmlFor="escalation_report">Escalation</label>
            </div>
            <div>
              <input
                  type="checkbox"
                  id="other_report"
                  name="other_report"
                  checked={formData.other_report || false}
                  onChange={onChange}
              />
              <label htmlFor="other_report">Other</label>
            </div>
          </div>

            <div className="textarea-field">
              <p>
                Describe in detail the issue you wish to report. Attach any relevant photos/drawings below, as well as the CBRE ticket number if applicable. In addition, provide justification for the service request you require, and identify impact on people, property or service delivery if the request is not fulfilled:
              </p>
              <textarea
                id="report_comments"
                name="report_comments"
                rows="4" 
                value={formData.report_comments || ''}
                onChange={onChange}
              />
            </div>

            {formData.security === true && (
              <>
                <p>Security:</p>
                <div>
                  <label htmlFor="series_number">Series Number:</label>
                  <input
                    id="series_number"
                    type="text"
                    name="series_number"
                    value={formData.series_number}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <label htmlFor="count_required">Count Required: </label>
                  <input
                    id="count_required"
                    type="text"
                    name="count_required"
                    value={formData.count_required}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <label htmlFor="permission_level">Permission Level</label>
                  <input
                    id="permission_level"
                    type="number"
                    name="permission_level"
                    value={formData.permission_level}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <label htmlFor="key_count">Number of Keys required</label>
                  <input
                    id="key_count"
                    type="text"
                    name="key_count"
                    value={formData.key_count}
                    onChange={onChange}
                  />
                </div>
                <div className="textarea-field">
                  <p>
                    List the names of employees requiring alarm codes along with their corresponding 4-digit codes:
                  </p>
                  <textarea
                    id="alarm_codes"
                    name="alarm_codes"
                    rows="4" 
                    value={formData.alarm_codes || ''}
                    onChange={onChange}
                  />
                </div>
              </>
            )}

            <br />
            <p className="field-note">
              To request facility operations and maintenance services, emergency responses, or to initiate a service complaint on an existing work order, please call CBRE directly at 1 (877) 222-3112.<br></br>
              "Operations and maintenance services" refer to day-to-day facility operations and maintenance functions that are provided by, and contractually covered under, CBRE. This does not incur additional costs to the division.<br></br>
              "Emergency responses" are facility-related requests requiring immediate action which, if help up or delayed, are certain to cause catastrophic impact on people, property, or service delivery. Examples include but are not limited to: fire, flood, loss of power, break ins
            </p>
        </section>
      </div>
    </>
  );
}

export default ReportSection;
