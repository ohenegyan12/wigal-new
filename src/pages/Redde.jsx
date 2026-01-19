
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ReddeHero from '../components/ReddeHero';
import ReddeBenefits from '../components/ReddeBenefits';
import ReddeSolutions from '../components/ReddeSolutions';
import ReddeFeatures from '../components/ReddeFeatures';
import ReddeAcceptPayments from '../components/ReddeAcceptPayments';
import ReddeDevelopers from '../components/ReddeDevelopers';
import ReddeCTA from '../components/ReddeCTA';
import Footer from '../components/Footer';

const Redde = () => {
    const location = useLocation();

    // Scroll to top or specific section on mount
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
        <div className="redde-page" style={{ minHeight: '100vh', position: 'relative' }}>
            <Navbar />
            <ReddeHero />
            <ReddeBenefits />
            <ReddeSolutions />
            <ReddeFeatures />
            <ReddeAcceptPayments />
            <ReddeDevelopers />
            <ReddeCTA />
            <Footer />
        </div>
    );
};

export default Redde;
