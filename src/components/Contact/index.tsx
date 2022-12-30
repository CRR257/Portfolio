import React from 'react';
import ContactForm from 'components/Contact-form';

import "./index.scss";

export default function Contact() {
    return (
        <div className="contact"
            id={"contact"}>
            <div className="contact-container">
                <p className="contact-title">Contact</p>
                <ContactForm/>
            </div>
        </div>
    );
};
