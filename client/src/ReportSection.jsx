import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const ReportSection = ({ formData, onChange }) => {

  return (
    <>
      <div className="header-container">
        <h4 style={{ color: '#555555' }}>Report a Building Issue</h4>
      </div>
      <div className="request-change-content">
        <section className="info-section">
          <p className="field-note">
              To request facility operations/maintenance services, emergency responses, or service complaints on an existing work order, call CBRE directly at 1 (877) 222-3112.<br></br>
              "Emergency responses" are facility-related requests requiring immediate action which, if held up or delayed, are certain to cause catastrophic impact on people, property, or service delivery. Examples include but are not limited to: fire, flood, loss of power, break ins
            </p>
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
                <div style={{ marginBottom: '15px' }}>
                  <p style={{ marginBottom: '8px' }}>I would like to request:</p>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <div>
                      <input
                        type="radio"
                        id="security_cards"
                        name="security_item_type"
                        value="cards"
                        checked={formData.security_item_type === 'cards'}
                        onChange={onChange}
                      />
                      <label htmlFor="security_cards" style={{ marginLeft: '8px' }}>Access cards or fobs</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="security_keys"
                        name="security_item_type"
                        value="keys"
                        checked={formData.security_item_type === 'keys'}
                        onChange={onChange}
                      />
                      <label htmlFor="security_keys" style={{ marginLeft: '8px' }}>Building keys or alarm codes</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="security_other"
                        name="security_item_type"
                        value="other"
                        checked={formData.security_item_type === 'other'}
                        onChange={onChange}
                      />
                      <label htmlFor="security_other" style={{ marginLeft: '8px' }}>Other security-related matters</label>
                    </div>
                  </div>
                </div>
                
                {formData.security_item_type === 'cards' && (
                  <>
                  <div>
                    <p style={{ marginBottom: '8px' }}>Type of cards/fobs:</p>
                    <div style={{ display: 'flex', gap: '20px' }}>
                      <div>
                        <input
                          type="radio"
                          id="security_cards_designated"
                          name="security_card_type"
                          value="designated"
                          checked={formData.security_card_type === 'designated'}
                          onChange={onChange}
                        />
                        <Tippy content="'Designated' access cards and fobs are programmed for, and intended for the use of, assigned owners. These are non-transferrable and can only be used by the individuals they are assigned to." delay={[0, 0]}>
                          <label htmlFor="security_cards_designated" style={{ marginLeft: '8px', cursor: 'help' }}>Designated access cards/fobs</label>
                        </Tippy>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="security_cards_stockpile"
                          name="security_card_type"
                          value="stockpile"
                          checked={formData.security_card_type === 'stockpile'}
                          onChange={onChange}
                        />
                        <Tippy content="'Stockpile' access cards and fobs are those yet to be programmed. They are typically ordered as part of an inventory or stock replenishment." delay={[0, 0]}>
                          <label htmlFor="security_cards_stockpile" style={{ marginLeft: '8px' }}>Stockpile access cards/fobs</label>
                        </Tippy>
                      </div>
                    </div>
                  </div>

                    <p style={{ marginBottom: '8px' }}>Use the field above to list the names of employees the cards/fobs will be assigned to.</p>
                    <div className="form-grid">
                      <div>
                        <label htmlFor="series_number">Access card/fob series Number:</label>
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
                        <select
                          id="permission_level"
                          name="permission_level"
                          value={formData.permission_level || ''}
                          onChange={onChange}
                        >
                          <option value="full_access">24/7 Access</option>
                          <option value="businesshours_access">Mon-Fri, 7am-7pm Access</option>
                          <option value="other_access">Other</option>
                        </select>
                      </div>

                    {formData.permission_level === 'other_access' && (
                    <>
                      <div>
                        <label htmlFor="other_access_text">Specify "Other" access permission request:</label>
                        <input
                          id="other_access_text"
                          type="text"
                          name="other_access_text"
                          value={formData.other_access_text}
                          onChange={onChange}
                        />
                      </div>
                    </>
                    )}
                    </div>
                </>
                )}

                {formData.security_item_type === 'keys' && (
                  <>
                  <div>
                    <p style={{ marginBottom: '8px' }}>Type of alarm/key codes:</p>
                    <div style={{ display: 'flex', gap: '20px' }}>
                      <div>
                        <input
                          type="radio"
                          id="security_keys_building"
                          name="security_keys_type"
                          value="security_keys_building"
                          checked={formData.security_keys_type === 'security_keys_building'}
                          onChange={onChange}
                        />
                        <label htmlFor="security_keys_building" style={{ marginLeft: '8px' }}>Building keys</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="security_keys_designated"
                          name="security_keys_type"
                          value="security_keys_designated"
                          checked={formData.security_keys_type === 'security_keys_designated'}
                          onChange={onChange}
                        />
                        <Tippy content="'Designated' alarm codes are programmed for, and intended for the use of, assigned owners. These are non-transferrable and can only be used by the individuals they are assigned to. This option is for office buildings without access card readers only." delay={[0, 0]}>
                          <label htmlFor="security_keys_designated" style={{ marginLeft: '8px' }}>Designated alarm codes for staff</label>
                        </Tippy>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="security_keys_generic"
                          name="security_keys_type"
                          value="security_keys_generic"
                          checked={formData.security_keys_type === 'security_keys_generic'}
                          onChange={onChange}
                        />
                        <Tippy content="'Generic' alarm codes are designated to be shared by several employees who each have their own individual access cards. This option is for office building with access card readers only." delay={[0, 0]}>
                          <label htmlFor="security_keys_generic" style={{ marginLeft: '8px' }}>Generic alarm codes for the office</label>
                        </Tippy>
                      </div>
                    </div>
                  </div>

                    {formData.security_keys_type === 'security_keys_building' && (
                    <>
                    <br></br>
                      <div>
                        <label htmlFor="key_count">Number of Keys required:</label>
                        <br></br>
                        <input
                          id="key_count"
                          type="text"
                          name="key_count"
                          value={formData.key_count}
                          onChange={onChange}
                        />
                      </div>
                    </>
                    )}
                    {formData.security_keys_type === 'security_keys_designated' && (
                    <>
                    <br></br>
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
                </>
                )}
              </>
            )}
            <br />
        </section>
      </div>
    </>
  );
}

export default ReportSection;
