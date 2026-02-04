import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import OfficeDropdown from './OfficeDropdown';

export default function RemovalSection({ formData, onChange, onAddRemovalItem, onRemovalItemChange }) {
  return (
    <>
      <div className="header-container">
          <h4 style={{ color: '#555555' }}>Removals</h4>
      </div>
      <div className="request-change-content">
        <section className="info-section">
            <p>Select all that apply:</p>
            <div className="checkbox-group">
                <div>
                  <input
                      type="checkbox"
                      id="removal_electronics"
                      name="removal_electronics"
                      checked={formData.removal_electronics || false}
                      onChange={onChange}
                  />
                  <label htmlFor="removal_electronics">Electronic Devices</label>
                </div>
                <div>
                  <input
                      type="checkbox"
                      id="removal_furniture"
                      name="removal_furniture"
                      checked={formData.removal_furniture || false}
                      onChange={onChange}
                  />
                  <label htmlFor="removal_furniture">Furniture</label>
                </div>
                <div>
                  <input
                      type="checkbox"
                      id="removal_office_supplies"
                      name="removal_office_supplies"
                      checked={formData.removal_office_supplies || false}
                      onChange={onChange}
                  />
                  <label htmlFor="removal_office_supplies">Office Supplies and Workstation Equipment</label>
                </div>
                <div>
                  <input
                      type="checkbox"
                      id="removal_other"
                      name="removal_other"
                      checked={formData.removal_other || false}
                      onChange={onChange}
                  />
                  <label htmlFor="removal_other">Other</label>
                </div>
            </div>                
        </section>

        {(formData.removal_electronics === true || formData.removal_furniture === true || formData.removal_other === true) && (
          <>
            <p className="field-note">For Electronic devices or Furniture identified as either in "good" or "fair" condition, you are required to attach corresponding photos (below) as they may be listed for auction or offered to another Ministry.</p>
          </>
        )}
        {formData.removal_office_supplies === true && (
          <>
            <p className="field-note">If requesting for removal of office stamps, please ensure references to the Ministry are removed (i.e. peel off the rubber, cut it and discard it before shipping the item).</p>           
          </>
        )}

        {/* Items Table */}
        <div style={{ marginTop: '20px' }}>
          <h5>Items for Removal</h5>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f0f0f0' }}>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Device Type</th>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Condition</th>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Description</th>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Dimensions</th>
                <Tippy content="If you have boxed up items, and have labelled each box, please provide the box number here" delay={[0, 0]}>
                  <th style={{ border: '1px solid #ccc', padding: '8px', cursor: 'help' }}>Box Number</th>
                </Tippy>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Additional Info</th>
              </tr>
            </thead>
            <tbody>
              {(formData.removal_items || []).map((item) => (
                <tr key={item.id}>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                    <select 
                      style={{ width: '100%' }}
                      value={item.device}
                      onChange={(e) => onRemovalItemChange(item.id, 'device', e.target.value)}
                    >
                      <option value="">Please Select: </option>
                      <option value="printer">Printer</option>
                      <option value="electronics">Electronics</option>
                      <option value="furniture">Furniture</option>
                      <option value="supplies">Office Supplies</option>
                      <option value="equipment">Equipment</option>
                      <option value="other">Other</option>
                    </select>
                  </td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                    <select 
                      style={{ width: '100%' }}
                      value={item.condition}
                      onChange={(e) => onRemovalItemChange(item.id, 'condition', e.target.value)}
                    >
                      <option value="">Please Select: </option>
                      <option value="good">Good</option>
                      <option value="fair">Fair</option>
                      <option value="poor">Poor</option>
                    </select>
                  </td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                    <input 
                      type="text" 
                      placeholder="Description" 
                      style={{ width: '100%' }} 
                      value={item.description}
                      onChange={(e) => onRemovalItemChange(item.id, 'description', e.target.value)}
                    />
                  </td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                    <input 
                      type="text" 
                      placeholder="Dimensions" 
                      style={{ width: '100%' }}
                      value={item.dimensions}
                      onChange={(e) => onRemovalItemChange(item.id, 'dimensions', e.target.value)}
                    />
                  </td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                    <input 
                      type="text" 
                      placeholder="Box Number" 
                      style={{ width: '100%' }}
                      value={item.box_number}
                      onChange={(e) => onRemovalItemChange(item.id, 'box_number', e.target.value)}
                    />
                  </td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                    <input 
                      type="text" 
                      placeholder="Additional Info" 
                      style={{ width: '100%' }}
                      value={item.info}
                      onChange={(e) => onRemovalItemChange(item.id, 'info', e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" onClick={onAddRemovalItem} style={{ marginBottom: '20px' }}>+ Add Row</button>
        </div>

        <div>
          <p>Shipping Information:</p>
          <div className="form-grid">
            <div>
              <label htmlFor="removal_firstname">Site Contact First Name: </label>
              <input
                id="removal_firstname"
                type="text"
                name="removal_firstname"
                value={formData.removal_firstname}
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor="removal_lastname">Site Contact Last Name: </label>
              <input
                id="removal_lastname"
                type="text"
                name="removal_lastname"
                value={formData.removal_lastname}
                onChange={onChange}
              />
            </div>
            <OfficeDropdown
              id="removal_office"
              name="removal_office"
              value={formData.removal_office}
              onChange={onChange}
            />
            <div>
              <label htmlFor="removal_address">Address: </label>
              <input
                id="removal_address"
                type="text"
                name="removal_address"
                value={formData.removal_address || ''}
                onChange={onChange}
              />
            </div>
            <div style={{ marginTop: '15px' }}>
              <input
                  type="checkbox"
                  name="confirm_shipping__removal_info"
                  checked={formData.confirm_shipping__removal_info || false}
                  onChange={onChange}
                  required
              />
              <label>
                  <span className="required">* </span>Please confirm the above shipping information
              </label>
            </div>
          </div>
          <br></br>
        </div>
      </div>
    </>
  );
}
