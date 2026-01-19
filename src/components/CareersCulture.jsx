import { motion } from 'framer-motion';
import './CareersCulture.css';

const CareersCulture = () => {
    return (
        <div className="careers-culture-section">
            <div className="container">
                <div className="culture-grid">
                    <motion.div
                        className="culture-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="culture-title">Our Culture</h2>
                        <p className="culture-description">
                            At Wigal, we thrive on ownership, integrity, and continuous improvement. We work collaboratively to innovate practical digital solutions in telecom, fintech, and messaging — empowering businesses and communities across Africa to communicate and grow.
                        </p>
                    </motion.div>
                    <div className="culture-images">
                        {/* Decorative elements */}
                        <motion.svg
                            className="spark spark-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            initial={{ scale: 0, rotate: -45 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                        >
                            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#1596BC" />
                        </motion.svg>
                        <motion.svg
                            className="spark spark-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                            initial={{ scale: 0, rotate: 45 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
                        >
                            <path d="M10 0L12.5 7.5L20 10L12.5 12.5L10 20L7.5 12.5L0 10L7.5 7.5L10 0Z" fill="#FBB03B" />
                        </motion.svg>

                        <motion.div
                            className="image-card card-1"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <img src="/office-happy-6.jpg" alt="Wigal Office Lounge" />
                        </motion.div>
                        <motion.div
                            className="image-card card-2"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <img src="/office-happy-4.jpg" alt="Wigal Team Meeting" />
                        </motion.div>
                        <motion.div
                            className="image-card card-3"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <img src="/office-happy-7.jpg" alt="Wigal Team Celebration" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareersCulture;
