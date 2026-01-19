import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AsapHero from '../components/AsapHero';
import AsapWhyMatters from '../components/AsapWhyMatters';
import AsapBenefits from '../components/AsapBenefits';
import AsapCTA from '../components/AsapCTA';
import Footer from '../components/Footer';

const Asap = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="asap-page" style={{ minHeight: '100vh', position: 'relative' }}>
            <Navbar />
            <div id="asap-hero">
                <AsapHero />
            </div>
            <div id="why-asap">
                <AsapWhyMatters />
            </div>
            <div id="asap-benefits">
                <AsapBenefits />
            </div>
            <div id="asap-support">
                <AsapCTA />
            </div>
            <Footer />
        </div>
    );
};

export default Asap;
