import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Info } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        businessType: '',
        businessName: '',
        mobileNumber: '233',
        businessLocation: '',
        email: '',
        aboutBusiness: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Clear error when user types
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: false
            });
        }
    };

    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.fullName.trim()) {
            tempErrors.fullName = true;
            isValid = false;
        }
        if (!formData.businessType) {
            tempErrors.businessType = true;
            isValid = false;
        }
        if (!formData.businessName.trim()) {
            tempErrors.businessName = true;
            isValid = false;
        }
        if (!formData.mobileNumber.trim()) {
            tempErrors.mobileNumber = true;
            isValid = false;
        }
        if (!formData.businessLocation.trim()) {
            tempErrors.businessLocation = true;
            isValid = false;
        }
        if (!formData.email.trim()) {
            tempErrors.email = true;
            isValid = false;
        }
        if (!formData.aboutBusiness.trim()) {
            tempErrors.aboutBusiness = true;
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Proceed with submission logic
            console.log("Form Submitted", formData);
            alert("Message Sent! (Simulation)");
        } else {
            console.log("Validation Failed");
            // Errors state is already updated, inputs will re-render with red borders
        }
    };

    return (
        <div className="contact-page">
            <div className="contact-image-section">
                <div className="contact-image-overlay"></div>
                <img src="/logo-white.png" alt="Wigal" className="contact-logo" />

                <div className="contact-image-footer">
                    <div className="contact-copyright">©2026 Wigal Vision.</div>
                    <div className="contact-socials">
                        <a href="https://www.youtube.com/@wigalvision6365" target="_blank" rel="noopener noreferrer"><img src="/youtube.svg" alt="YouTube" className="contact-social-icon" /></a>
                        <a href="https://x.com/wigalgh" target="_blank" rel="noopener noreferrer"><img src="/X_logo_2023_original 1.svg" alt="X" className="contact-social-icon" /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src="/Instagram_logo_2022 1.svg" alt="Instagram" className="contact-social-icon" /></a>
                        <a href="https://web.facebook.com/Wigalgh" target="_blank" rel="noopener noreferrer"><img src="/2023_Facebook_icon 1.svg" alt="Facebook" className="contact-social-icon" /></a>
                        <a href="https://www.linkedin.com/company/wigalgh/" target="_blank" rel="noopener noreferrer"><img src="/LinkedIn_icon 1.svg" alt="LinkedIn" className="contact-social-icon" /></a>
                    </div>
                </div>
            </div>

            <div className="contact-form-section">
                <Link to="/" className="contact-back-link">
                    <ArrowLeft size={20} /> Back
                </Link>

                <div className="contact-form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Full Name <span className="required-star">*</span></label>
                                <input
                                    type="text"
                                    name="fullName"
                                    className={`form-input ${errors.fullName ? 'error' : ''}`}
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Business Type <span className="required-star">*</span> <Info size={14} color="#A0AEC0" style={{ display: 'inline', marginLeft: 4 }} /></label>
                                <select
                                    name="businessType"
                                    className={`form-select ${errors.businessType ? 'error' : ''}`}
                                    value={formData.businessType}
                                    onChange={handleChange}
                                >
                                    <option value="">Select...</option>
                                    <option value="Sole Proprietorship">Sole Proprietorship</option>
                                    <option value="Limited Liability">Limited Liability Company</option>
                                    <option value="Partnership">Partnership</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Business Name <span className="required-star">*</span></label>
                                <input
                                    type="text"
                                    name="businessName"
                                    className={`form-input ${errors.businessName ? 'error' : ''}`}
                                    value={formData.businessName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Mobile Number <span className="required-star">*</span></label>
                                <input
                                    type="text"
                                    name="mobileNumber"
                                    className={`form-input ${errors.mobileNumber ? 'error' : ''}`}
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Business Location <span className="required-star">*</span></label>
                                <input
                                    type="text"
                                    name="businessLocation"
                                    className={`form-input ${errors.businessLocation ? 'error' : ''}`}
                                    value={formData.businessLocation}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email <span className="required-star">*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    className={`form-input ${errors.email ? 'error' : ''}`}
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">About Business <span className="required-star">*</span></label>
                            <textarea
                                name="aboutBusiness"
                                className={`form-textarea ${errors.aboutBusiness ? 'error' : ''}`}
                                placeholder="Tell us what you want.."
                                value={formData.aboutBusiness}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn" style={{ backgroundColor: '#21438D' }}>SEND MESSAGE</button>
                    </form>
                </div>

                <div className="contact-info-grid">
                    <div className="info-item">
                        <h4>Address</h4>
                        <p>Foster Washing Bay Junction, Off the Adentan-Ashiyie Road. VV 123, Valley View Oyibi</p>
                    </div>
                    <div className="info-item">
                        <h4>Email</h4>
                        <p>info@wigal.com.gh</p>
                        <p>support@wigal.com.gh</p>
                    </div>
                    <div className="info-item">
                        <h4>Phone</h4>
                        <p>+233552825758, +233553019529,</p>
                        <p>+233552809558</p>
                    </div>
                    <div className="info-item">
                        <h4>Working Hours</h4>
                        <p>24/7</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
