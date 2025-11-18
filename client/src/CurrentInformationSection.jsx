import React from 'react';
import OfficeDropdown from './OfficeDropdown';

const CurrentInformationSection = ({ formData, onChange }) => {

  return (
    <>
      <div className="header-container">
        <h4 style={{ color: '#555555' }}>Requestor's Information</h4>
      </div>
      <br />
      <div className="form-grid">
        <div>
          <label htmlFor="firstname">
            <span className="required">*</span> First Name:
          </label>
          <input
            id="firstname"
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastname">
            <span className="required">*</span> Last Name:
          </label>
          <input
            id="lastname"
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="employee_id">
            <span className="required">*</span> Employee ID:
          </label>
          <input
            id="employee_id"
            type="number"
            name="employee_id"
            value={formData.employee_id}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="idir">
            <span className="required">*</span> IDIR:
          </label>
          <input
            id="idir"
            type="text"
            name="idir"
            value={formData.idir}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="supervisor">
            <span className="required">*</span> Employee's Supervisor:
          </label>
          <input
            id="supervisor"
            type="text"
            name="supervisor"
            value={formData.supervisor}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="position">Position:</label>
          <input
            id="position"
            type="text"
            name="position"
            value={formData.position || ''}
            onChange={onChange}
          />
        </div>
        <OfficeDropdown
          id="office"
          name="office"
          value={formData.office}
          onChange={onChange}
        />
        <div>
          <label htmlFor="dcv">DCV#:</label>
          <input
            id="dcv"
            type="text"
            name="dcv"
            value={formData.dcv || ''}
            onChange={onChange}
          />
        </div>
      </div>
      <br />
    </>
  );
};

export default CurrentInformationSection;