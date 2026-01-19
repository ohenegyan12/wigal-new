import React, { useState } from 'react';
import './PrivacyContent.css'; // Reusing privacy styles for consistency

const SecurityContent = () => {
    const [activeSection, setActiveSection] = useState('supplier-relationships');

    const sections = [
        {
            id: 'supplier-relationships',
            title: 'Information Security Policy for Supplier Relationships',
            heading: 'Information Security Policy for Supplier Relationships',
            content: (
                <p>Wigal ensures that all security measures for service providers' access to assets are clearly agreed upon and documented to safeguard your data and interests. We prioritize data security by meticulously outlining and documenting all security protocols for service providers, guaranteeing the protection of your information. Additionally, we have implemented a comprehensive set of measures, including standard processes, access regulations, compliance oversight, incident management, audits, and training, all of which are key to safeguarding your data. Furthermore, we hold cloud service providers to the same standards as other service providers, ensuring they meet specific security criteria to protect your data.</p>
            )
        },
        {
            id: 'supplier-agreements',
            title: 'Addressing Security within Supplier Agreements',
            heading: 'Addressing Security within Supplier Agreements',
            content: (
                <p>Wigal ensures that every service provider agrees to and meets all necessary security standards. Our contracts with external parties accessing our systems include clauses on confidentiality, data protection, and security to safeguard our network. Our cloud service agreements clearly outline who is responsible for which security processes, ensuring a transparent and secure partnership.</p>
            )
        },
        {
            id: 'ict-supply-chain',
            title: 'Information and Communication Technology Supply Chain',
            heading: 'Information and Communication Technology Supply Chain',
            content: (
                <p>Our agreements with service providers cover security risks related to ICT services and product supply chains, ensuring comprehensive protection. We require third-party suppliers to acknowledge and adhere to our security standards. Our contracts detail audit rights, incident reporting procedures, confidentiality agreements, policy compliance, security standards, and termination conditions.</p>
            )
        },
        {
            id: 'supplier-delivery',
            title: 'Supplier Service Delivery Management',
            heading: 'Supplier Service Delivery Management',
            content: (
                <p>We ensure service excellence by rigorously monitoring, reviewing, and auditing our service providers' delivery. Our Business Development Managers actively monitor contracts and conduct thorough audits to ensure performance and compliance standards are met. We regularly evaluate our supply chain risk assessments to ensure resilience and continuity in our operations.</p>
            )
        },
        {
            id: 'managing-changes',
            title: 'Managing Changes to Supplier Services',
            heading: 'Managing Changes to Supplier Services',
            content: (
                <p>We ensure any changes to third-party services are promptly communicated and incorporated into our updated contracts for clarity and compliance. Our Head of Engineering ensures that stakeholders are promptly informed of policy changes and that these updates are accurately reflected in our contractual agreements.</p>
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

export default SecurityContent;
