import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutHero';
import AboutLeadership from '../components/AboutLeadership';
import AboutManagement from '../components/AboutManagement';
import AboutTeam from '../components/AboutTeam';

const About = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{
                background: 'linear-gradient(180deg, #21438D 0%, #728DC5 40%, #D1DBEE 80%, #FFFFFF 100%)',
                width: '100%',
                paddingBottom: '50px'
            }}>
                <Navbar />
                <AboutHero />
            </div>

            <AboutLeadership />
            <AboutManagement />
            <AboutTeam />

            <Footer />
        </div>
    );
};

export default About;
