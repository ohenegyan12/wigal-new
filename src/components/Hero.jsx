
import React, { useState } from 'react';
import { MoveRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

const products = [
    {
        id: 'messaging',
        title: 'FROG Messaging',
        description: 'Powerful SMS, Voice & IVR Messaging',
        heroTitle: 'Grow Engagement with Powerful Messaging Tools',
        heroDescription: "Send Bulk SMS, Voice SMS, IVR or Email campaigns easily and reliably with FROG Ghana's leading messaging platform.",
        buttonText: 'Get Started with FROG',
        video: '/frog-new.mp4',
        logo: '/frog-logo.svg'
    },
    {
        id: 'payments',
        title: 'Redde Payments',
        description: 'Secure Online Payments & Collections',
        heroTitle: 'Accept Payments Your Way with Redde',
        heroDescription: 'Collect mobile money and card payments securely and easily with Redde, the payment gateway built for your business.',
        buttonText: 'Start Collecting Payments',
        gif: null,
        logo: '/redde-logo.svg'
    },
    {
        id: 'ussd',
        title: 'Smart USSD',
        description: 'Rich Interactive Mobile USSD Experiences',
        heroTitle: 'Engage Your Customers with Smart USSD',
        heroDescription: 'Create fast, reliable, and accessible USSD experiences for all mobile phones without requiring an internet connection.',
        buttonText: 'Contact Support',
        gif: null,
        logo: '/ussd-logo.svg'
    },
    {
        id: 'bulk-payments',
        title: 'ASAP Bulk Payments',
        description: 'Fast & Simple Mass Disbursements',
        heroTitle: 'Simplify Mass Payouts with ASAP',
        heroDescription: 'Disburse money to thousands of mobile money wallets and bank accounts instantly with the click of a button.',
        buttonText: 'Make a Payout',
        gif: null,
        logo: '/asap-logo.png'
    }
];

const Typewriter = ({ text, delay = 0.02, className, style }) => {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: delay, delayChildren: 0.1 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            y: 5,
        },
    };

    return (
        <motion.div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                columnGap: '0.25em',
                rowGap: '0.1em',
                ...style
            }}
            variants={container}
            initial="hidden"
            animate="visible"
            className={className}
        >
            {words.map((word, wordIndex) => (
                <span key={wordIndex} style={{ display: 'inline-flex', whiteSpace: 'nowrap' }}>
                    {word.split("").map((letter, letterIndex) => (
                        <motion.span variants={child} key={letterIndex}>
                            {letter}
                        </motion.span>
                    ))}
                </span>
            ))}
        </motion.div>
    );
};

const Hero = () => {
    const [activeTab, setActiveTab] = useState(products[0]);

    return (
        <section className="hero-section">
            <div style={{ minHeight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typewriter
                    key={activeTab.id + "-title"}
                    text={activeTab.heroTitle}
                    className="hero-title"
                />
                <Typewriter
                    key={activeTab.id + "-desc"}
                    text={activeTab.heroDescription}
                    className="hero-description"
                    delay={0.005}
                />
                <motion.button
                    key={activeTab.id + "-btn"}
                    className="hero-button"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <img src="/logo-arrow.svg" alt="" className="button-icon" />
                    <Typewriter text={activeTab.buttonText} delay={0.02} style={{ display: 'inline-flex', marginLeft: '8px' }} />
                </motion.button>
            </div>

            <div className="tabs-container">
                {products.map((product) => (
                    <motion.div
                        key={product.id}
                        className={`tab-item ${activeTab.id === product.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(product)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="tab-content-desktop">
                            <span className="tab-title">{product.title}</span>
                            <p className="tab-description">{product.description}</p>
                        </div>
                        <div className="tab-content-mobile">
                            <img src={product.logo} alt={product.title} className="tab-logo" />
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="display-area">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab.id + "-display"}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="display-content"
                    >
                        {activeTab.video ? (
                            <video
                                src={activeTab.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="display-video"
                            />
                        ) : activeTab.gif ? (
                            <img src={activeTab.gif} alt={activeTab.title} />
                        ) : (
                            <div className="placeholder-content">
                                {activeTab.title} Preview
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Hero;
