import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Brand Column */}
                <div className="footer-brand">
                    <div className="brand-info">
                        <a href="/" style={{ display: 'inline-block' }}>
                            <img src="/logo-white.png" alt="Wigal" className="footer-logo" />
                        </a>
                        <p className="footer-description">
                            A technology company building secure and scalable software solutions for businesses.
                        </p>
                    </div>
                    <div className="social-links">
                        <a href="https://www.youtube.com/@wigalvision6365" target="_blank" rel="noopener noreferrer">
                            <img src="/youtube.svg" alt="YouTube" className="social-icon" />
                        </a>
                        <a href="https://x.com/wigalgh" target="_blank" rel="noopener noreferrer">
                            <img src="/X_logo_2023_original 1.svg" alt="X (Twitter)" className="social-icon" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="/Instagram_logo_2022 1.svg" alt="Instagram" className="social-icon" />
                        </a>
                        <a href="https://web.facebook.com/Wigalgh" target="_blank" rel="noopener noreferrer">
                            <img src="/2023_Facebook_icon 1.svg" alt="Facebook" className="social-icon" />
                        </a>
                        <a href="https://www.linkedin.com/company/wigalgh/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                            <img src="/LinkedIn_icon 1.svg" alt="LinkedIn" className="social-icon" />
                        </a>
                        <a href="https://github.com/wigalgh" target="_blank" rel="noopener noreferrer">
                            <img src="/brands/Github_logo_svg.svg" alt="GitHub" className="social-icon" />
                        </a>
                    </div>
                </div>

                {/* Company Column */}
                <div className="footer-column col-company">
                    <h4>COMPANY</h4>
                    <ul className="footer-links">
                        <li><a href="/careers">Careers</a></li>
                        <li><a href="/documents">Documents</a></li>
                    </ul>
                </div>

                {/* Support Column */}
                <div className="footer-column col-support">
                    <h4>SUPPORT</h4>
                    <ul className="footer-links">
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="https://support.wigal.com.gh/" target="_blank" rel="noopener noreferrer">Support</a></li>
                    </ul>
                </div>

                {/* Certifications Column */}
                <div className="footer-column col-certifications">
                    <h4>CERTIFICATIONS</h4>
                    <div className="certifications-wrapper">
                        <img src="/pci-logo.png" alt="PCI DSS Compliant" className="cert-logo" />
                        <img src="/ISO-logo.png" alt="ISO Certified" className="cert-logo iso-logo" />
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-legal-links">
                    <a href="/privacy">Privacy Policy</a>
                    <span className="separator">|</span>
                    <a href="/security">Security Policy</a>
                </div>
                <div className="copyright">
                    ©2026 Wigal Vision.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
