import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CareersHero from '../components/CareersHero';
import CareersCulture from '../components/CareersCulture';

import CareersVacancy from '../components/CareersVacancy';

const Careers = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="careers-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{
                background: 'linear-gradient(180deg, #21438D 0%, #5d7bb5 40%, #D1DBEE 80%, #FFFFFF 100%)',
                width: '100%',
                paddingBottom: '50px' // Add space at bottom to blend
            }}>
                <Navbar />
                <CareersHero />
            </div>

            {/* Placeholder for future content */}
            <div style={{ flex: 1 }}>
                <CareersCulture />
                <CareersVacancy />
            </div>

            <Footer />
        </div>
    );
};

export default Careers;
