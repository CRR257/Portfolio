import React from 'react';
import ContactForm from '../Contact-form/index';

import "./index.scss";

const contact = () => {
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

export default contact;
