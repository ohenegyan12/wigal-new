import React from 'react';
import { X } from 'lucide-react';
import './IVRModal.css';

const IVRModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="ivr-modal-overlay" onClick={onClose}>
            <div className="ivr-modal-container" onClick={e => e.stopPropagation()}>
                <div className="ivr-modal-content">
                    <img src="/frog-logo.svg" alt="FROG Logo" className="ivr-modal-logo" loading="lazy" />

                    <h2 className="ivr-modal-title">Introducing IVR</h2>

                    <p className="ivr-modal-text">
                        Interactive Voice Response (IVR) is now live on FROG,
                        giving you powerful automation that scales how you
                        interact with your audience over voice calls.
                    </p>

                    <h3 className="ivr-modal-subtitle">With FROG's IVR you can:</h3>

                    <p className="ivr-modal-text">
                        Automate calls with customizable menus that guide
                        callers, capture their choices, and trigger actions —
                        using greetings, keypad inputs, and voice messages.
                    </p>

                    <a href="https://frog.wigal.com.gh/register" target="_blank" rel="noopener noreferrer" className="ivr-modal-button">
                        Get Started With Frog
                    </a>
                </div>

                <div className="ivr-modal-image-col">
                    <button className="ivr-modal-close" onClick={onClose} aria-label="Close modal">
                        <X size={24} />
                    </button>
                    <img src="/ivr-banner.jpg" alt="IVR Banner" className="ivr-modal-image" loading="lazy" />
                </div>
            </div>
        </div>
    );
};

export default IVRModal;
