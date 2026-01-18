import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const NavItem = ({ title, items, scrolled, isMobile }) => {
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
                className={`nav-link ${scrolled ? 'scrolled' : ''}`}
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
                { label: "Bulk SMS", link: "#" },
                { label: "Voice SMS", link: "#" },
                { label: "IVR", link: "#" }
            ]
        },
        {
            title: "Redde Online",
            items: [
                { label: "Payment Gateway", link: "#" },
                { label: "Merchant Solutions", link: "#" }
            ]
        },
        {
            title: "Smart USSD",
            items: [
                { label: "Custom USSD", link: "#" },
                { label: "USSD Surveys", link: "#" }
            ]
        },
        {
            title: "ASAP Bulk Payments",
            items: [
                { label: "Bulk Payouts", link: "#" },
                { label: "Salary Payments", link: "#" }
            ]
        }
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img
                        src={scrolled ? "/logo-blue.png" : "/logo-white.png"}
                        alt="Wigal Logo"
                        className="logo-img"
                    />
                </Link>

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
                        />
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
