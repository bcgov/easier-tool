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
                    id="cisb_mobile_office"
                    name="cisb_mobile_office"
                    checked={formData.cisb_mobile_office || false}
                    onChange={onChange}
                />
                <label htmlFor="cisb_mobile_office">CISB Mobile Office</label>
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
                    id="mobile_phones"
                    name="mobile_phones"
                    checked={formData.mobile_phones || false}
                    onChange={onChange}
                />
                <label htmlFor="mobile_phones">Mobile Phones</label>
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

            {formData.cables_adapters === true && (
            <>
                <p>Cables and Adapters Types and Quantities</p>
                <div className="form-grid">
                    <div>
                        <a href="https://bcgov.sharepoint.com/:i:/r/sites/SDPR-SDD-ET20/Shared%20Documents/Images/Displayport.png?csf=1&web=1&e=ukx0iA" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#009bd6', textDecoration: 'underline', cursor: 'pointer' }}>
                        DisplayPort cables
                        </a><br />
                        <input
                        id="displayport_cable"
                        type="number"
                        name="displayport_cable"
                        value={formData.displayport_cable}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <a href="https://bcgov.sharepoint.com/:i:/r/sites/SDPR-SDD-ET20/Shared%20Documents/Images/HdmiToHdmi.png?csf=1&web=1&e=BGvaMB" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#009bd6', textDecoration: 'underline', cursor: 'pointer' }}>
                        HDMI cables
                        </a><br />
                        <input
                        id="hdmi_cable"
                        type="number"
                        name="hdmi_cable"
                        value={formData.hdmi_cable}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <a href="https://bcgov.sharepoint.com/:i:/r/sites/SDPR-SDD-ET20/Shared%20Documents/Images/UsbAToUsbB(Blue).png?csf=1&web=1&e=d6k1s8" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#009bd6', textDecoration: 'underline', cursor: 'pointer' }}>
                        USB-A to USB-B cables
                        </a><br />
                        <input
                        id="usb_cable"
                        type="number"
                        name="usb_cable"
                        value={formData.usb_cable}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <a href="https://bcgov.sharepoint.com/:i:/r/sites/SDPR-SDD-ET20/Shared%20Documents/Images/VGACable.png?csf=1&web=1&e=WdhOBW" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#009bd6', textDecoration: 'underline', cursor: 'pointer' }}>
                        VGA cables
                        </a><br />
                        <input
                        id="vga_cable"
                        type="number"
                        name="vga_cable"
                        value={formData.vga_cable}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <a href="https://bcgov.sharepoint.com/:i:/r/sites/SDPR-SDD-ET20/Shared%20Documents/Images/UsbCToDisplayport.png?csf=1&web=1&e=l6xmJk" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#009bd6', textDecoration: 'underline', cursor: 'pointer' }}>
                        DisplayPort To USB-C adapter
                        </a><br />
                        <input
                        id="displayport_usbc_adapter"
                        type="number"
                        name="displayport_usbc_adapter"
                        value={formData.displayport_usbc_adapter}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <a href="https://bcgov.sharepoint.com/:i:/r/sites/SDPR-SDD-ET20/Shared%20Documents/Images/UsbHub4.png?csf=1&web=1&e=F2BrxO" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#009bd6', textDecoration: 'underline', cursor: 'pointer' }}>
                        External 4-port USB hub
                        </a><br />
                        <input
                        id="four_port_usb_adapter"
                        type="number"
                        name="four_port_usb_adapter"
                        value={formData.four_port_usb_adapter}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <a href="https://bcgov.sharepoint.com/:i:/r/sites/SDPR-SDD-ET20/Shared%20Documents/Images/DisplayportToHdmi.png?csf=1&web=1&e=ep7fOC" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#009bd6', textDecoration: 'underline', cursor: 'pointer' }}>
                        HDMI to DisplayPort adapter
                        </a><br />
                        <input
                        id="hdmi_displayport_adapter"
                        type="number"
                        name="hdmi_displayport_adapter"
                        value={formData.hdmi_displayport_adapter}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <a href="https://bcgov.sharepoint.com/:i:/r/sites/SDPR-SDD-ET20/Shared%20Documents/Images/UsbCToHdmi.png?csf=1&web=1&e=iW4GnK" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#009bd6', textDecoration: 'underline', cursor: 'pointer' }}>
                        HDMI to USB-C adapter
                        </a><br />
                        <input
                        id="hdmi_usbc_adapter"
                        type="number"
                        name="hdmi_usbc_adapter"
                        value={formData.hdmi_usbc_adapter}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <a href="https://bcgov.sharepoint.com/:i:/r/sites/SDPR-SDD-ET20/Shared%20Documents/Images/HdmiToVGA.png?csf=1&web=1&e=1sLAnD" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#009bd6', textDecoration: 'underline', cursor: 'pointer' }}>
                        VGA to HDMI adapter
                        </a><br />
                        <input
                        id="vga_hdmi_adapter"
                        type="number"
                        name="vga_hdmi_adapter"
                        value={formData.vga_hdmi_adapter}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <a href="https://bcgov.sharepoint.com/:i:/r/sites/SDPR-SDD-ET20/Shared%20Documents/Images/UsbCToVGA.png?csf=1&web=1&e=eWbxiQ" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#009bd6', textDecoration: 'underline', cursor: 'pointer' }}>
                        USB-C to VGA Adapter
                        </a><br />
                        <input
                        id="usbc_vga_adapter"
                        type="number"
                        name="usbc_vga_adapter"
                        value={formData.usbc_vga_adapter}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <label>Other cables or adapters</label>
                        <br />
                        <input
                        id="other_cable_adapter"
                        type="text"
                        name="other_cable_adapter"
                        value={formData.other_cable_adapter}
                        onChange={onChange}
                        />
                    </div>
                </div>
            </>
            )}
            {formData.cisb_equipment === true && (
            <>
                <p>CISB Equipment Types and Quantites</p>
                <div style={{ marginLeft: '20px', marginBottom: '20px' }}>
                    <label htmlFor="surfacepro_model">Surface Pro Model:</label>
                    <select
                      id="surfacepro_model"
                      name="surfacepro_model"
                      value={formData.surfacepro_model || ''}
                      onChange={onChange}
                      style={{ marginLeft: '10px' }}
                    >
                      <option value="surfacepro_eleven">Surface Pro 11</option>
                      <option value="surfacepro_eight">Surface Pro 8</option>
                    </select>
                </div>
                <div className="form-grid">
                    <div>
                        <a href="https://bcgov.sharepoint.com/:i:/r/sites/SDPR-SDD-ET20/Shared%20Documents/Images/CISB%20Equipment%20Photos/Surface%20Pro%208%20Power%20Adapter.png?csf=1&web=1&e=dcdoBx" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#009bd6', textDecoration: 'underline', cursor: 'pointer' }}>
                        Surface Pro Power Adapter
                        </a><br />
                        <input
                        id="surfacepro_power_adapter"
                        type="number"
                        name="surfacepro_power_adapter"
                        value={formData.surfacepro_power_adapter}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <a href="https://bcgov.sharepoint.com/:i:/r/sites/SDPR-SDD-ET20/Shared%20Documents/Images/CISB%20Equipment%20Photos/Surface%20Pro%208%20Stylus%20Pen.png?csf=1&web=1&e=tJhgDa" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#009bd6', textDecoration: 'underline', cursor: 'pointer' }}>
                        Surface Pro Stylus Pen
                        </a><br />
                        <input
                        id="surfacepro_stylus"
                        type="number"
                        name="surfacepro_stylus"
                        value={formData.surfacepro_stylus}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <a href="https://bcgov.sharepoint.com/:i:/r/sites/SDPR-SDD-ET20/Shared%20Documents/Images/CISB%20Equipment%20Photos/Surface%20Pro%208%20Keyboard.jpg?csf=1&web=1&e=HNGp8j" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#009bd6', textDecoration: 'underline', cursor: 'pointer' }}>
                        Surface Pro Keyboard
                        </a><br />
                        <input
                        id="surfacepro_keyboard"
                        type="number"
                        name="surfacepro_keyboard"
                        value={formData.surfacepro_keyboard}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <a href="https://bcgov.sharepoint.com/:i:/r/sites/SDPR-SDD-ET20/Shared%20Documents/Images/CISB%20Equipment%20Photos/Surface%20Pro%208%20Protective%20Case.png?csf=1&web=1&e=ccMqku" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#009bd6', textDecoration: 'underline', cursor: 'pointer' }}>
                        Surface Pro Protective Case
                        </a><br />
                        <input
                        id="surfacepro_case"
                        type="number"
                        name="surfacepro_case"
                        value={formData.surfacepro_case}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <a href="https://bcgov.sharepoint.com/:i:/r/sites/SDPR-SDD-ET20/Shared%20Documents/Images/CISB%20Equipment%20Photos/Surface%20Pro%208%20Anti-Glare%20Screen.png?csf=1&web=1&e=RV8Nrh" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#009bd6', textDecoration: 'underline', cursor: 'pointer' }}>
                        Surface Pro Anti-Glare Screen
                        </a><br />
                        <input
                        id="surfacepro_screencover"
                        type="number"
                        name="surfacepro_screencover"
                        value={formData.surfacepro_screencover}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <a href="https://bcgov.sharepoint.com/:i:/r/sites/SDPR-SDD-ET20/Shared%20Documents/Images/CISB%20Equipment%20Photos/Bluetooth%20Mouse.png?csf=1&web=1&e=XxRHr5" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#009bd6', textDecoration: 'underline', cursor: 'pointer' }}>
                        Bluetooth Mouse
                        </a><br />
                        <input
                        id="cisb_bluetooth_mouse"
                        type="number"
                        name="cisb_bluetooth_mouse"
                        value={formData.cisb_bluetooth_mouse}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <a href="https://bcgov.sharepoint.com/:i:/r/sites/SDPR-SDD-ET20/Shared%20Documents/Images/CISB%20Equipment%20Photos/Tamper%20Resistant%20Backpack.jpg?csf=1&web=1&e=9oVnax" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#009bd6', textDecoration: 'underline', cursor: 'pointer' }}>
                        Tamper Resistant Backpack
                        </a><br />
                        <input
                        id="cisb_backpack"
                        type="number"
                        name="cisb_backpack"
                        value={formData.cisb_backpack}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <a href="https://bcgov.sharepoint.com/:i:/r/sites/SDPR-SDD-ET20/Shared%20Documents/Images/CISB%20Equipment%20Photos/Portable%20Power%20Source.jpg?csf=1&web=1&e=IHppsz" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#009bd6', textDecoration: 'underline', cursor: 'pointer' }}>
                        Portable Power Source
                        </a><br />
                        <input
                        id="cisb_portable_power"
                        type="number"
                        name="cisb_portable_power"
                        value={formData.cisb_portable_power}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <a href="https://bcgov.sharepoint.com/:i:/r/sites/SDPR-SDD-ET20/Shared%20Documents/Images/CISB%20Equipment%20Photos/Reflective%20Safety%20Vest.jpg?csf=1&web=1&e=jHNKAD" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#009bd6', textDecoration: 'underline', cursor: 'pointer' }}>
                        Reflective Safety Vest
                        </a><br />
                        <input
                        id="cisb_safety_vest"
                        type="number"
                        name="cisb_safety_vest"
                        value={formData.cisb_safety_vest}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <a href="https://bcgov.sharepoint.com/:i:/r/sites/SDPR-SDD-ET20/Shared%20Documents/Images/CISB%20Equipment%20Photos/USB-C%20to%2014-in-1%20Multifunction%20Hub.png?csf=1&web=1&e=sh8nbD" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#009bd6', textDecoration: 'underline', cursor: 'pointer' }}>
                        USB-C to 14-in-1 Multifunction Hub
                        </a><br />
                        <input
                        id="cisb_usbc_multifunction_hub"
                        type="number"
                        name="cisb_usbc_multifunction_hub"
                        value={formData.cisb_usbc_multifunction_hub}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <a href="https://bcgov.sharepoint.com/:i:/r/sites/SDPR-SDD-ET20/Shared%20Documents/Images/CISB%20Equipment%20Photos/Targus%20Rolling%20Laptop%20Bag.jpg?csf=1&web=1&e=vRbrsX" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#009bd6', textDecoration: 'underline', cursor: 'pointer' }}>
                        Targus Rolling Laptop Bag
                        </a><br />
                        <input
                        id="cisb_laptop_bag"
                        type="number"
                        name="cisb_laptop_bag"
                        value={formData.cisb_laptop_bag}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <a href="https://bcgov.sharepoint.com/:i:/r/sites/SDPR-SDD-ET20/Shared%20Documents/Images/CISB%20Equipment%20Photos/Lightning%20to%20USB%20Cable.png?csf=1&web=1&e=Wsch2M" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#009bd6', textDecoration: 'underline', cursor: 'pointer' }}>
                        Lightning to USB Cable
                        </a><br />
                        <input
                        id="cisb_lightning_usb_cable"
                        type="number"
                        name="cisb_lightning_usb_cable"
                        value={formData.cisb_lightning_usb_cable}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <a href="https://bcgov.sharepoint.com/:i:/r/sites/SDPR-SDD-ET20/Shared%20Documents/Images/CISB%20Equipment%20Photos/Windproof%20Umbrella.jpg?csf=1&web=1&e=6dybfw" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#009bd6', textDecoration: 'underline', cursor: 'pointer' }}>
                        Windproof Umbrella
                        </a><br />
                        <input
                        id="cisb_umbrella"
                        type="number"
                        name="cisb_umbrella"
                        value={formData.cisb_umbrella}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <a href="https://bcgov.sharepoint.com/:i:/r/sites/SDPR-SDD-ET20/Shared%20Documents/Images/CISB%20Equipment%20Photos/Rain%20Poncho.png?csf=1&web=1&e=u771iP" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#009bd6', textDecoration: 'underline', cursor: 'pointer' }}>
                        Rain Poncho
                        </a><br />
                        <input
                        id="cisb_poncho"
                        type="number"
                        name="cisb_poncho"
                        value={formData.cisb_poncho}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <a href="https://bcgov.sharepoint.com/:i:/r/sites/SDPR-SDD-ET20/Shared%20Documents/Images/CISB%20Equipment%20Photos/Rain%20Poncho.png?csf=1&web=1&e=u771iP" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#009bd6', textDecoration: 'underline', cursor: 'pointer' }}>
                        CISB Clipboard
                        </a><br />
                        <input
                        id="cisb_poncho"
                        type="number"
                        name="cisb_poncho"
                        value={formData.cisb_poncho}
                        onChange={onChange}
                        />
                    </div>
                </div>
            </>
            )}
            {formData.cisb_mobile_office === true && (
            <>
                <p>CISB Mobile Office</p>
                <div className="form-grid">
                    <div>
                        <a href="https://bcgov.sharepoint.com/:i:/r/sites/SDPR-SDD-ET20/Shared%20Documents/Images/CISB%20Equipment%20Photos/Surface%20Pro%208%20Power%20Adapter.png?csf=1&web=1&e=dcdoBx" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#009bd6', textDecoration: 'underline', cursor: 'pointer' }}>
                        Surface Pro Power Adapter
                        </a><br />
                        <input
                        id="surfacepro_power_adapter"
                        type="number"
                        name="surfacepro_power_adapter"
                        value={formData.surfacepro_power_adapter}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <a href="https://bcgov.sharepoint.com/:i:/r/sites/SDPR-SDD-ET20/Shared%20Documents/Images/CISB%20Equipment%20Photos/Surface%20Pro%208%20Stylus%20Pen.png?csf=1&web=1&e=tJhgDa" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#009bd6', textDecoration: 'underline', cursor: 'pointer' }}>
                        Surface Pro Stylus Pen
                        </a><br />
                        <input
                        id="surfacepro_stylus"
                        type="number"
                        name="surfacepro_stylus"
                        value={formData.surfacepro_stylus}
                        onChange={onChange}
                        />
                    </div>
                </div>
            </>
            )}
            {formData.keyboards === true && (
            <>
                <p>Keyboards:</p>
                <p className="field-note">Please provide the following information for the keyboard's intended user:</p>
                <div className="form-grid">
                    <div>
                        <label htmlFor="keyboard_idir">IDIR: </label>
                        <input
                        id="keyboard_idir"
                        type="text"
                        name="keyboard_idir"
                        value={formData.keyboard_idir}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="keyboard_computer">Computer Number: </label>
                        <input
                        id="keyboard_computer"
                        type="text"
                        name="keyboard_computer"
                        value={formData.keyboard_computer}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="keyboard_workstation">Workstation Number: </label>
                        <input
                        id="keyboard_workstation"
                        type="text"
                        name="keyboard_workstation"
                        value={formData.keyboard_workstation}
                        onChange={onChange}
                        />
                    </div>
                </div>
            </>
            )}
            {formData.laptops === true && (
            <>
                <p>Laptops:</p>
                <p className="field-note">Provide information on the new hire or returning employee who will be using the laptop:</p>
                <div className="form-grid">
                    <div>
                        <label htmlFor="laptop_idir">IDIR: </label>
                        <input
                        id="laptop_idir"
                        type="text"
                        name="laptop_idir"
                        value={formData.laptop_idir}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="laptop_name">Name: </label>
                        <input
                        id="laptop_name"
                        type="text"
                        name="laptop_name"
                        value={formData.laptop_name}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="laptop_startdate">Start Date: </label>
                        <input
                        id="laptop_startdate"
                        type="date"
                        name="laptop_startdate"
                        value={formData.laptop_startdate}
                        onChange={onChange}
                        />
                    </div>
                </div>
                <br></br>
                <p className="field-note">To complete your request, Facilities and Assets needs to know where the device must be shipped to ("shipping address") as well as the contact information of a person located at the shipping address ("site contact").</p>               
                <p className="field-note">For repairs when a loaner is required. If you have a new hire, there is no need to complete the Easier Tool to request a Laptop or Surface Pro.</p>               
            </>
            )}
            {formData.mobile_phones === true && (
            <>
                <p>Mobile Phones</p>
                <div className="form-grid">
                <p className="field-note">Provide the name of the employee who will be using the mobile phone:</p>
                {formData.mobile_phone_radio === 'transfer_phone' && (
                    <p className="field-note">Provide the name of the employee who previously used the phone:</p>
                )}
                </div>
                <div className="form-grid">
                    <div>
                        <label htmlFor="mobile_phone_name">Name: </label>
                        <input
                        id="mobile_phone_name"
                        type="text"
                        name="mobile_phone_name"
                        value={formData.mobile_phone_name}
                        onChange={onChange}
                        />
                    </div>
                    {formData.mobile_phone_radio === 'transfer_phone' && (
                      <>
                        <div>
                          <label htmlFor="transfer_name">Prior User: </label>
                          <input
                            id="transfer_name"
                            type="text"
                            name="transfer_name"
                            value={formData.transfer_name}
                            onChange={onChange}
                          />
                        </div>
                      </>
                    )}
                </div>
                
                <br></br>
                <div className="radio-group">
                    <div>
                        <input
                        type="radio"
                        id="new_phone"
                        name="mobile_phone_radio"
                        value="new_phone"
                        checked={formData.mobile_phone_radio === 'new_phone'}
                        onChange={onChange}
                        />
                        <label htmlFor="new_phone">New Phone</label>
                    </div>
                    <div>
                        <input
                        type="radio"
                        id="deactivate_phone"
                        name="mobile_phone_radio"
                        value="deactivate_phone"
                        checked={formData.mobile_phone_radio === 'deactivate_phone'}
                        onChange={onChange}
                        />
                        <label htmlFor="deactivate_phone">Deactivate Phone</label>
                    </div>
                    <div>
                        <input
                        type="radio"
                        id="upgrade_phone"
                        name="mobile_phone_radio"
                        value="upgrade_phone"
                        checked={formData.mobile_phone_radio === 'upgrade_phone'}
                        onChange={onChange}
                        />
                        <label htmlFor="upgrade_phone">Upgrade Phone</label>
                    </div>
                    <div>
                        <input
                        type="radio"
                        id="transfer_phone"
                        name="mobile_phone_radio"
                        value="transfer_phone"
                        checked={formData.mobile_phone_radio === 'transfer_phone'}
                        onChange={onChange}
                        />
                        <label htmlFor="transfer_phone">Transfer Phone</label>
                    </div>
                    <div>
                        <input
                        type="radio"
                        id="moving_mobile_phone"
                        name="mobile_phone_radio"
                        value="moving_mobile_phone"
                        checked={formData.mobile_phone_radio === 'moving_mobile_phone'}
                        onChange={onChange}
                        />
                        <label htmlFor="moving_mobile_phone">Moving to another Ministry or Division</label>
                    </div>
                </div>
                {formData.mobile_phone_radio === 'deactivate_phone' && (
                  <p className="field-note">Please ensure the phone has been factory reset, and all data removea from the device</p>
                )}
            </>
            )}
            {formData.monitors === true && (
            <>
                <p>Monitors</p>
                <p className="field-note">Please provide the Computer and Workstation information for the monitor's user:</p>
                <div className="form-grid">
                    <div>
                        <label htmlFor="monitor_computer">Computer Number: </label>
                        <input
                        id="monitor_computer"
                        type="text"
                        name="monitor_computer"
                        value={formData.monitor_computer}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="monitor_workstation">Workstation Number: </label>
                        <input
                        id="monitor_workstation"
                        type="text"
                        name="monitor_workstation"
                        value={formData.monitor_workstation}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="monitor_quantity">Quantity: </label>
                        <input
                        id="monitor_quantity"
                        type="number"
                        name="monitor_quantity"
                        value={formData.monitor_quantity}
                        onChange={onChange}
                        />
                    </div>
                </div>
                <p className="field-note">If your monitor has broken, please call 77000 and create a ticket before requesting a replacment monitor.</p>            
            </>
            )}
            {formData.mouse === true && (
            <>
                <p>Mice</p>
                <p className="field-note">All equipment is ergonomic. Please provide the workstation information the mouse is intended for:</p>
                <div className="form-grid">
                    <div>
                        <label htmlFor="mouse_type">Mouse Type:</label>
                        <select
                        id="mouse_type"
                        name="mouse_type"
                        value={formData.mouse_type || ''}
                        onChange={onChange}
                        >
                        <option value="wired_mouse_type">Wired Mouse</option>
                        <option value="wireless_mouse_type">Bluetooth Mouse</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="mouse_computer">Computer Number: </label>
                        <input
                        id="mouse_computer"
                        type="text"
                        name="mouse_computer"
                        value={formData.mouse_computer}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="mouse_workstation">Workstation Number: </label>
                        <input
                        id="mouse_workstation"
                        type="text"
                        name="mouse_workstation"
                        value={formData.mouse_workstation}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="mouse_quantity">Quantity: </label>
                        <input
                        id="mouse_quantity"
                        type="number"
                        name="mouse_quantity"
                        value={formData.mouse_quantity}
                        onChange={onChange}
                        />
                    </div>
                </div>
                <p className="field-note">If the Wired Mouse or Wireless Bluetooth Mouse do not meet your needs, requests for non-standard ergonomic equipment accommodations should be submitted to Occupational Health and Safety at sdd.ohs.gov.bc.ca.</p>
            </>
            )}
            {formData.software === true && (
            <>
                <p>Software</p>
                <p className="field-note">All standard software required for employees to complete their work are added by Facilities and Assets to the employee’s workstation. No action is required by the supervisor.</p>
                <p className="field-note">If the software required is not approved for the position, then a non-standard software request can be initiated using the Easier Tool. Please provide the business case for the software and at a minimum we require the Manager’s approval for the software with the business case (approval email/business case must be attached to this request).</p>
                <div className="form-grid">
                    <div>
                        <label htmlFor="software_user_name">User Name: </label>
                        <input
                        id="software_user_name"
                        type="text"
                        name="software_user_name"
                        value={formData.software_user_name}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="software_position">Position: </label>
                        <input
                        id="software_position"
                        type="text"
                        name="software_position"
                        value={formData.software_position}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="software_idir">IDIR: </label>
                        <input
                        id="software_idir"
                        type="text"
                        name="software_idir"
                        value={formData.software_idir}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="software_computer">Computer Number: </label>
                        <input
                        id="software_computer"
                        type="text"
                        name="software_computer"
                        value={formData.software_computer}
                        onChange={onChange}
                        />
                    </div>
                </div>
                <br></br>
                <div>
                    <label htmlFor="software_reason">Describe the non-standard subscription and provide a business case for the request: </label>
                    <textarea
                    id="software_reason"
                    name="software_reason"
                    value={formData.software_reason}
                    onChange={onChange}
                    rows="4"
                    style={{ width: '100%', padding: '8px'}}
                    />
                </div>
                <p className="field-note">If the subscription(s) being requested above is a "temporary requirement" or a "project-based need", please provide a termination date (i.e. the assignment or project end date) to ensure we cancel the subscription at the right time.</p>
                <div className="radio-group">
                    <label>The subscription(s) being requested above is: </label>
                    <div>
                        <input
                        type="radio"
                        id="temporary"
                        name="software_radio"
                        value="temporary"
                        checked={formData.software_radio === 'temporary'}
                        onChange={onChange}
                        />
                        <label htmlFor="temporary">Temporary</label>
                    </div>
                    <div>
                        <input
                        type="radio"
                        id="permanent"
                        name="software_radio"
                        value="permanent"
                        checked={formData.software_radio === 'permanent'}
                        onChange={onChange}
                        />
                        <label htmlFor="permanent">Permanent</label>
                    </div>
                </div>
                {formData.software_radio === 'temporary' && (
                <>
                    <div>
                        <label htmlFor="software_end_date">Termination Date: </label>
                        <input
                        id="software_end_date"
                        type="date"
                        name="software_end_date"
                        value={formData.software_end_date}
                        onChange={onChange}
                        />
                    </div>
                    <p className="field-note">If the termination date is currently unknown, please note that Facilities & Assets will provide the subscription(s) for a maximum of seven months unless a request for an extension is received.</p>    
                </>
                )}
            </>
            )}
            {formData.unified_comms === true && (
            <>
                <p>Unified Communications</p>
                <p className="field-note">Facilities and Assets will request from the supervisor the headset choice for new hires and will order this and Unified Communications – there is no need to complete an Easier Tool.</p>
                <p className="field-note">Please note this form is for changes only. If your existing headset is broken or damaged, please call 7-7000 to request a device repair. If, your repair request was denied, your device was deemed beyond repair, or your device does not qualify for replacement, please complete the section below.</p>
                
                <label>UC Activation or Suppression: </label>
                <div className="radio-group">
                    <div>
                        <input
                        type="radio"
                        id="activation"
                        name="UC_radio"
                        value="activation"
                        checked={formData.UC_radio === 'activation'}
                        onChange={onChange}
                        />
                        <label htmlFor="activation">Request a new UC Activation</label>
                    </div>
                    <div>
                        <input
                        type="radio"
                        id="suppression"
                        name="UC_radio"
                        value="suppression"
                        checked={formData.UC_radio === 'suppression'}
                        onChange={onChange}
                        />
                        <label htmlFor="suppression">Request outgoing UC calls be suppressed</label>
                    </div>
                </div>
                <br></br>
                <div className="form-grid">
                    <div>
                        <label htmlFor="software_idir">IDIR: </label>
                        <input
                        id="software_idir"
                        type="text"
                        name="software_idir"
                        value={formData.software_idir}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="branch_select">Branch:</label>
                        <select
                        id="branch_select"
                        name="branch_select"
                        value={formData.branch_select || ''}
                        onChange={onChange}
                        >
                        <option value="branch_select">Please Select:</option>
                        <option value="branch_cs">Community Services</option>
                        <option value="branch_plms">Prevention and Loss Management Services</option>
                        <option value="branch_ops">Operations Support</option>
                        <option value="branch_ss">Strategic Support</option>
                        <option value="branch_vs">Virtual Services</option>
                        </select>
                    </div>
                    {formData.UC_radio === 'suppression' && (
                    <>
                        <div>
                            <label htmlFor="UC_suppression_number">UC Phone Number:</label>
                            <input
                            id="UC_suppression_number"
                            type="text"
                            name="UC_suppression_number"
                            value={formData.UC_suppression_number}
                            onChange={onChange}
                            />
                        </div>
                    </>
                    )}
                    {formData.UC_radio === 'activation' && (
                    <>
                        <div>
                            <label htmlFor="UC_device_select">Preffered Device:</label>
                            <select
                            id="UC_device_select"
                            name="UC_device_select"
                            value={formData.UC_device_select || ''}
                            onChange={onChange}
                            >
                            <option value="uc_select">Please Select:</option>
                            <option value="uc_select_wired">Wired Dual Ear</option>
                            <option value="uc_select_wireless_dual">Wireless Dual Ear</option>
                            <option value="uc_select_wireless_single">Wireless Single Ear</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="uc_outgoing_suppression">Do you require UC outgoing call suppression?</label>
                            <input
                                type="checkbox"
                                id="uc_outgoing_suppression"
                                name="uc_outgoing_suppression"
                                checked={formData.uc_outgoing_suppression || false}
                                onChange={onChange}
                            />
                        </div>
                    </>
                    )}
                </div>
            </>
            )}
            {formData.webcams === true && (
            <>
                <p>Webcams</p>
                <p className="field-note">Please provide information about the intended user of the webcam.</p>
                <div className="form-grid">
                    <div>
                        <label htmlFor="webcam_idir">IDIR: </label>
                        <input
                        id="webcam_idir"
                        type="text"
                        name="webcam_idir"
                        value={formData.webcam_idir}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="webcam_computer">Computer Number: </label>
                        <input
                        id="webcam_computer"
                        type="text"
                        name="webcam_computer"
                        value={formData.webcam_computer}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="webcam_workstation">Workstation Number: </label>
                        <input
                        id="webcam_workstation"
                        type="text"
                        name="webcam_workstation"
                        value={formData.webcam_workstation}
                        onChange={onChange}
                        />
                    </div>
                </div>
            </>
            )}
            {formData.other_equipment === true && (
            <>
                <p>Other Equipment</p>
                <div>
                    <label htmlFor="other_equipment_description">Description of the request: </label>
                    <textarea
                    id="other_equipment_description"
                    name="other_equipment_description"
                    value={formData.other_equipment_description}
                    onChange={onChange}
                    rows="4"
                    style={{ width: '100%', padding: '8px'}}
                    />
                </div>
                <div>
                    <label htmlFor="other_equipment_reason">Rationale for the request: </label>
                    <textarea
                    id="other_equipment_reason"
                    name="other_equipment_reason"
                    value={formData.other_equipment_reason}
                    onChange={onChange}
                    rows="4"
                    style={{ width: '100%', padding: '8px'}}
                    />
                </div>
            </>
            )}

            <div>
                <p>Shipping Information:</p>
                <div className="form-grid">
                    <div>
                        <label htmlFor="request_firstname">Site Contact First Name: </label>
                        <input
                            id="request_firstname"
                            type="text"
                            name="request_firstname"
                            value={formData.request_firstname}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="request_lastname">Site Contact Last Name: </label>
                        <input
                            id="request_lastname"
                            type="text"
                            name="request_lastname"
                            value={formData.request_lastname}
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
                    <label htmlFor="request_address">Address: </label>
                    <input
                        id="request_address"
                        type="text"
                        name="request_address"
                        value={formData.request_address || ''}
                        onChange={onChange}
                    />
                    </div>
                </div>
                <br></br>
            </div>
        </div>
    </>
  );
}
