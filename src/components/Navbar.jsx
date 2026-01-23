import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';
import { ChevronDown } from 'lucide-react';

const NavItem = ({ title, items, scrolled, isMobile, isFrogTheme, isReddeTheme, isSmartUssdTheme, isAsapTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    // Desktop hover behavior
    const handleMouseEnter = () => {
        if (!isMobile) setIsOpen(true);
    };

    const handleMouseLeave = () => {
        if (!isMobile) setIsOpen(false);
    };

    return (
        <li
            className={`nav-item-dropdown ${isOpen ? 'active' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className={`nav-link ${scrolled ? 'scrolled' : ''} ${isFrogTheme ? 'frog-theme' : ''} ${isReddeTheme ? 'redde-theme' : ''} ${isSmartUssdTheme ? 'smart-ussd-theme' : ''} ${isAsapTheme ? 'asap-theme' : ''}`}
                onClick={toggleOpen}
            >
                {title} <ChevronDown size={14} className={`chevron ${isOpen ? 'open' : ''}`} />
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {items.map((item, index) => (
                        <li key={index}><a href={item.link}>{item.label}</a></li>
                    ))}
                </ul>
            )}
        </li>
    );
};

const Navbar = () => {
    const location = useLocation();
    const isFrogPage = location.pathname === '/frog';
    const isReddePage = location.pathname === '/redde';
    const isSmartUssdPage = location.pathname === '/smart-ussd';
    const isAsapPage = location.pathname === '/asap';
    const isPrivacyPage = location.pathname === '/privacy';
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // ... existing code ...
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        const handleResize = () => {
            if (window.innerWidth <= 900) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
                setIsMobileMenuOpen(false); // Close mobile menu if switching to desktop
            }
        };

        // Initial check
        handleResize();

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const navLinks = [
        {
            title: "FROG Messaging",
            items: [
                { label: "FROG SERVICES", link: "/frog#frog-services" },
                { label: "IVR and Voice", link: "/frog#ivr" },
                { label: "PRICING", link: "/frog#pricing" },
                { label: "DEVELOPERS", link: "/frog#developers" }
            ]
        },
        {
            title: "Redde Payment",
            items: [
                { label: "BENEFITS", link: "/redde#redde-benefits" },
                { label: "WHY REDDE", link: "/redde#redde-features" },
                { label: "DOCUMENTATION", link: "/redde#redde-developers" }
            ]
        },
        {
            title: "Smart USSD",
            items: [
                { label: "WHY SMART USSD", link: "/smart-ussd#why-choose" },
                { label: "BENEFITS", link: "/smart-ussd#ussd-features" },
                { label: "CONTACT SUPPORT", link: "/smart-ussd#support" }
            ]
        },
        {
            title: "ASAP Bulk Payments",
            items: [
                { label: "WHY ASAP", link: "/asap#why-asap" },
                { label: "BENEFITS", link: "/asap#asap-benefits" },
                { label: "CONTACT SUPPORT", link: "/asap#asap-support" }
            ]
        }
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isFrogPage ? 'frog-theme' : ''} ${isReddePage ? 'redde-theme' : ''} ${isSmartUssdPage ? 'smart-ussd-theme' : ''} ${isAsapPage ? 'asap-theme' : ''}`}>
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    <img
                        src={(scrolled || isSmartUssdPage) ? "/logo-blue.png" : "/logo-white.png"}
                        alt="Wigal Logo"
                        className="logo-img"
                    />
                </a>

                <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <div className={`burger-icon ${isMobileMenuOpen ? 'open' : ''} ${scrolled ? 'scrolled' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((nav, index) => (
                        <NavItem
                            key={index}
                            title={nav.title}
                            items={nav.items}
                            scrolled={scrolled}
                            isMobile={isMobile}
                            isFrogTheme={isFrogPage}
                            isReddeTheme={isReddePage}
                            isSmartUssdTheme={isSmartUssdPage}
                            isAsapTheme={isAsapPage}
                        />
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
