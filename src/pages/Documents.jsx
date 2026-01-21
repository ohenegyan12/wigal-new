import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DocumentsHero from '../components/DocumentsHero';
import DocumentsGrid from '../components/DocumentsGrid';

const Documents = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <DocumentsHero />

            <DocumentsGrid />

            <Footer />
        </div>
    );
};

export default Documents;
