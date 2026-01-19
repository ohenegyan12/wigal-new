import React, { useState } from 'react';
import './PrivacyContent.css';

const PrivacyContent = () => {
    const [activeSection, setActiveSection] = useState('general');

    const sections = [
        {
            id: 'general',
            title: 'General Terms of Service',
            heading: 'Introduction',
            content: (
                <>
                    <p>
                        We care about data protection and privacy, and we also know that you care about it. We are dedicated to maintaining the security of your personal information, protecting your privacy, and keeping your data safe. Your personal information will be gathered, used lawfully, maintained lawfully, maintained securely, and kept private in order to give you the best products and services possible. It will not be shared with any third parties without your consent.
                    </p>
                </>
            )
        },
        {
            id: 'statement',
            title: 'Our Privacy And Data Protection Statement',
            heading: 'Our Privacy And Data Protection Statement',
            content: (
                <>
                    <p>
                        How Wigal collects, uses, and safeguards your information is described in our Statement.
                    </p>
                    <h3 style={{ fontFamily: 'Neo Sans Std', marginTop: '20px', marginBottom: '10px', fontSize: '1.2rem' }}>
                        Who is covered by this Statement?
                    </h3>
                    <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                        <li style={{ marginBottom: '8px' }}>All Users and/or Customers who are Legal Entities or Natural Persons; All Users and/or Customers who are Organizations.</li>
                        <li style={{ marginBottom: '8px' }}>All Wigal’s personnel, including both current and potential workers.</li>
                        <li>All service providers and partners for Wigal.</li>
                    </ul>
                </>
            )
        },
        {
            id: 'data-gather',
            title: 'What Personal Data Does Wigal Gather?',
            heading: 'What Personal Data Does Wigal Gather?',
            content: (
                <>
                    <p>Our main goal in gathering personal data about you is to give you a secure, comfortable, effective, and customised experience.</p>
                    <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                        <li style={{ marginBottom: '8px' }}>Name, sex, date of birth, addresses, International Mobile Equipment Identity, mobile phone number, email address, occupation, and information found in supporting documents like proof of identity and proof of address are just a few examples of the personal information that may be collected and stored by us.</li>
                        <li>For the purpose of providing our products, services, and for use of our website, Wigal and its authorised third parties may collect, store, and process the following types of Personal Information: Biometric Data, Racial or Ethnic Origin, financial information, information related to your use of our services, which may include your patterns, your browsing history on our website, location information, and other information provided while using our services.</li>
                    </ul>
                </>
            )
        },
        {
            id: 'purpose',
            title: 'Purpose Of Collecting Personal Information',
            heading: 'Purpose Of Collecting Personal Information',
            content: (
                <>
                    <p>Wigal gathers your personal information for a range of commercial purposes. Among them, but not restricted to, are:</p>
                    <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                        <li style={{ marginBottom: '8px' }}>confirming your identity;</li>
                        <li style={{ marginBottom: '8px' }}>providing, maintaining, and upgrading our products and services; efficiently concluding transactions and billing for goods and services; attending to your requests for assistance or services; conducting market research and analysis; doing business and operational analyses.</li>
                        <li style={{ marginBottom: '8px' }}>identifying and addressing problems and challenges with our goods and services;</li>
                        <li style={{ marginBottom: '8px' }}>ensuring compliance with legal and regulatory standards for fraud and crime detection and prevention.</li>
                        <li>adjust, evaluate, and enhance our services as well as the structure and content of our website.</li>
                    </ul>
                </>
            )
        },
        {
            id: 'security',
            title: 'Security Procedures and Protocols',
            heading: 'Security Procedures and Protocols',
            content: (
                <>
                    <p>In accordance with international standards, Wigal adopts appropriate security practices and processes, including organisational and technical security controls, to prevent unauthorised access to or disclosure of your personal information while it is in our possession.</p>
                    <p>Our security measures and policies adhere to accepted industry guidelines. Additionally, the confidentiality of the personal information that they access is protected by codes of conduct and confidentiality policies that are binding on all of our employees, service providers, and partners.</p>
                    <p>Your personal information may be kept on file by us for as long as necessary to fulfil your requests for goods and services or as otherwise required by law.</p>
                    <p>When we discard your personal information, we take reasonable steps to make it anonymous or unreadable.</p>
                    <p><strong>Internet usage:</strong> To guard your personal information against hacking and the spread of viruses, we keep the security of our internet connections and adhere to acceptable security precautions. Security threats could still exist, nevertheless, for reasons that are beyond our control.</p>
                    <p>We may maintain copies of your information in physical copy or electronic form in storage facilities that we own and run ourselves, or that are owned and run by our third parties/service providers. For the purpose of preventing unauthorised access to and disclosure of your information as well as our network, we utilise a mix of technical solutions, security controls, and internal procedures.</p>
                    <p><strong>Accuracy:</strong> We work hard to make sure that the personal information in our possession is accurate, and we encourage you to update it if it changes by getting in touch with us using the details provided below:</p>
                    <p><a href="mailto:support@wigal.com.gh" style={{ color: '#21438D', fontWeight: 600 }}>support@wigal.com.gh</a></p>
                </>
            )
        },
        {
            id: 'rights',
            title: 'Your Rights',
            heading: 'Your Rights',
            content: (
                <>
                    <h3 style={{ fontFamily: 'Neo Sans Std', fontSize: '1.2rem', marginBottom: '10px' }}>Access to personal data is permitted</h3>
                    <p>According to the legislation, you have the right to seek a copy of the personal data that Wigal has on file about you, including categories for advertising audience members and implied data.</p>

                    <h3 style={{ fontFamily: 'Neo Sans Std', fontSize: '1.2rem', marginBottom: '10px', marginTop: '20px' }}>Right to correct personal information</h3>
                    <p>You have the right to request the rectification of any inaccurate, out-of-date, incomplete, or excessive information that is being held about you.</p>

                    <h3 style={{ fontFamily: 'Neo Sans Std', fontSize: '1.2rem', marginBottom: '10px', marginTop: '20px' }}>The ability to object to the usage of personal data:</h3>
                    <p>In some situations, as allowed by law, you have the right to object to Wigal processing your personal information. However, you might not be able to use your right to object when the foundation for processing is a legal obligation.</p>

                    <h3 style={{ fontFamily: 'Neo Sans Std', fontSize: '1.2rem', marginBottom: '10px', marginTop: '20px' }}>Right to refuse to receive marketing communications</h3>
                    <p>You will not get targeted marketing from Wigal unless you give us permission to. You can choose to opt-out at any time by using the tools provided if you no longer wish to receive marketing messages from Wigal. You may also opt-out at any time if you have previously agreed to get material that is tailored to you depending on how and where you use our network.</p>
                </>
            )
        },
        {
            id: 'changes',
            title: 'Changes To This Policy',
            heading: 'Changes To This Policy',
            content: (
                <>
                    <p>Please be aware that this privacy statement may occasionally change. Without your express permission, we will not limit your rights under this Policy. Any time this page's policies change, we'll send you an email, update this page on our website, and, if there are important changes, we'll provide a more obvious notice (including notification in your account interface or SMS notification). The effective date of each revision of this policy will be displayed at the top of the page, and previous iterations will be archived for your inspection.</p>
                    <p>Send an email to <a href="mailto:support@wigal.com.gh" style={{ color: '#21438D', fontWeight: 600 }}>support@wigal.com.gh</a> if you have any questions about this privacy statement or would like to exercise any of the rights listed above, and a member of our privacy team will get back to you.</p>

                    <div style={{ marginTop: '30px', borderTop: '1px solid #E2E8F0', paddingTop: '20px' }}>
                        <p style={{ fontWeight: 700, marginBottom: '5px' }}>Address:</p>
                        <p style={{ margin: 0 }}>Wigal Vision Ltd.</p>
                        <p style={{ margin: 0 }}>V V 123 Valley View, Oyibi</p>
                    </div>
                </>
            )
        }
    ];

    const activeContent = sections.find(s => s.id === activeSection);

    return (
        <section className="privacy-content-section">
            <div className="container privacy-content-container">
                <div className="privacy-sidebar">
                    <div className="sidebar-menu">
                        {sections.map(section => (
                            <button
                                key={section.id}
                                className={`sidebar-item ${activeSection === section.id ? 'active' : ''}`}
                                onClick={() => setActiveSection(section.id)}
                            >
                                {section.title}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="privacy-text-area">
                    <h2 className="content-heading">{activeContent.heading}</h2>
                    <div className="content-body">
                        {activeContent.content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyContent;
