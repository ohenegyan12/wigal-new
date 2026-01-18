import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import Features from '../components/Features';
import BentoGrid from '../components/BentoGrid';
import ReddeGrid from '../components/ReddeGrid';
import UssdCard from '../components/UssdCard';
import AsapGrid from '../components/AsapGrid';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div style={{ minHeight: '100vh', position: 'relative' }}>
            <div style={{
                background: 'linear-gradient(180deg, #21438D 0%, #728DC5 30%, #D1DBEE 60%, #FFFFFF 100%)',
                width: '100%'
            }}>
                <Navbar />
                <Hero />
            </div>
            <Brands />
            <Features />
            <BentoGrid />
            <ReddeGrid />
            <UssdCard />
            <AsapGrid />
            <CTA />
            <Footer />
        </div>
    );
};

export default Home;
