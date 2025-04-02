import React from 'react';
import './About.css';  // CSS फाइल इम्पोर्ट करो

export default function About() {
    return (
        <section className="about-section">
            <div className="container">
                <h2 className="section-title">About Us</h2>
                <p className="about-text">
                    Welcome to our website! We are passionate about delivering the best services to our customers.
                    Our team is dedicated to providing high-quality solutions that exceed expectations.
                </p>
                <p className="about-text">
                    Our mission is to empower businesses with innovative and effective tools that help them grow and thrive.
                    Thank you for choosing us as your trusted partner!
                </p>
            </div>
        </section>
    );
}
