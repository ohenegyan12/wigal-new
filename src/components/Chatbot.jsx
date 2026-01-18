import React, { useState } from 'react';
import { MessageCircle, X, Send, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi there! Looking to book a meeting or learn more about Wigal?", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState("");

    const handleSendMessage = (e, text = null) => {
        if (e) e.preventDefault();
        const msgText = text || inputValue.trim();
        if (!msgText) return;

        const newUserMessage = {
            id: messages.length + 1,
            text: msgText,
            sender: 'user'
        };

        setMessages([...messages, newUserMessage]);
        setInputValue("");

        // Simulate bot response
        setTimeout(() => {
            const botResponse = {
                id: messages.length + 2,
                text: "Thanks for reaching out! We'll get back to you shortly.",
                sender: 'bot'
            };
            setMessages(prev => [...prev, botResponse]);
        }, 1000);
    };

    return (
        <div className="chatbot-container">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="chatbot-window"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="chat-header">
                            <div className="chat-brand">
                                <div className="brand-logo-container">
                                    <img src="/logo-blue.png" alt="Wigal" className="brand-logo" />
                                </div>
                                <span className="brand-name">Wigal</span>
                            </div>
                            <button className="close-btn" onClick={() => setIsOpen(false)}>
                                <X size={20} color="#666" />
                            </button>
                        </div>

                        <div className="chat-messages">
                            {messages.map((msg, index) => (
                                <div key={msg.id} className={`message-wrapper ${msg.sender}`}>
                                    <div className={`message ${msg.sender}`}>
                                        {msg.text}
                                    </div>
                                    {msg.sender === 'bot' && (
                                        <div className="bot-meta">
                                            <img src="/logo-blue.png" alt="Bot" className="bot-avatar-small" />
                                            <span className="bot-name">Wigal</span>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {messages.length === 1 && (
                                <div className="chat-actions">
                                    <button className="action-pill" onClick={() => handleSendMessage(null, "Schedule a Meeting with Sales 🗓")}>
                                        Schedule a Meeting with Sales 🗓
                                    </button>
                                    <button className="action-pill" onClick={() => handleSendMessage(null, "Start the Application 🚀")}>
                                        Start the Application 🚀
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="chat-footer">
                            <form className="chat-input-area" onSubmit={handleSendMessage}>
                                <input
                                    type="text"
                                    placeholder="Enter..."
                                    className="chat-input"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                />
                                <button type="submit" className="send-btn" disabled={!inputValue.trim()}>
                                    <ChevronDown size={18} className="send-icon-rotate" />
                                </button>
                            </form>
                            <div className="chat-disclaimer">
                                Wigal provides this chat. You agree this chat may be recorded.
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                className="chatbot-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close Chat" : "Open Chat"}
            >
                <div className="chatbot-liquid"></div>
                <div className="chatbot-icon">
                    {isOpen ? (
                        <ChevronDown size={32} />
                    ) : (
                        <img src="/chatbot-icon.svg" alt="Chat" style={{ width: '28px', height: '28px' }} />
                    )}
                </div>
            </button>
        </div>
    );
};

export default Chatbot;
