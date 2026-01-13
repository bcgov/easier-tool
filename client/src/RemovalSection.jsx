import React from 'react';
import OfficeDropdown from './OfficeDropdown';

export default function RemovalSection({ formData, onChange }) {
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

        <div>
          <p>Shipping Information:</p>
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
        </div>
      </div>
    </>
  );
}
