import React from 'react';
import './DocumentsGrid.css';

const documents = [
    {
        id: 1,
        title: 'Redde Onboarding Guidelines',
        description: 'This Document is to outline the measure/procedures that onboarding clients need to know and or implement at their outfit',
        logo: '/redde-white.svg',
        colorClass: 'redde',
        fileUrl: '/redde-onboarding-document.pdf'
    }
];

const DocumentsGrid = () => {
    return (
        <section className="documents-grid-section" id="resources">
            <div className="documents-grid-container">
                <h2 className="documents-section-title">DOCUMENTS</h2>

                <div className="documents-grid">
                    {documents.map((doc) => (
                        <a
                            key={doc.id}
                            href={doc.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="document-card"
                        >
                            <div className={`document-card-header ${doc.colorClass}`}>
                                <img src={doc.logo} alt={doc.title} className="document-card-logo" />
                            </div>
                            <div className="document-card-body">
                                <h3 className="document-card-title">{doc.title}</h3>
                                <p className="document-card-description">{doc.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DocumentsGrid;
