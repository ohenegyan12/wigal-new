import React from 'react';
import { ArrowRight } from 'lucide-react';
import './DocumentsHero.css';

const DocumentsHero = () => {
    return (
        <section className="documents-hero">
            <div className="documents-hero-container">
                <h1 className="documents-hero-title">Documents & Resources</h1>
                <p className="documents-hero-description">
                    Find all the important files and documents you need in one place. From user guides and product manuals to policies and support resources, this page makes it easy for you to access and download key materials related to our services.
                </p>
                <a href="#resources" className="documents-hero-cta">
                    Explore Our Resources
                    <ArrowRight size={20} />
                </a>
            </div>
        </section>
    );
};

export default DocumentsHero;
