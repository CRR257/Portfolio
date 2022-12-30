import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
const gif = require('assets/img/general/catdev.gif');
import './index.scss';

declare global {
    interface Window {
        emailjs:any;
    }
}
const ContactForm = () => {
    let [showModal, setShowModal] = useState(false);
    let [contactName, setContactName] = useState('');
    let [errorSendEmail, setErrorSendEmail] = useState('');
    const {register, handleSubmit, errors} = useForm();
    
    const onSubmit = (data: any, r: any) => {
        setShowModal(true);
        setContactName(data.name)
        const templateId = "template_sx0twwd";
        const serviceID = "gmail";
        sendFeedback(serviceID, templateId, {
            from_name: data.name,
            message_html: data.comment,
            reply_to: data.email
        });
        r.target.reset();
    };

    const sendFeedback = (serviceID: any, templateId: any, variables: any) => {
        console.log('serviceID', serviceID)
        console.log('templateId', templateId)
        console.log('variables', variables)
        window.emailjs.send(serviceID, templateId, variables).then((res:any) => {
        }).catch((err: any) => {
          setErrorSendEmail('Sorry, error in sending email');
          setShowModal(true);
          console.error("There has been an error.  Here some thoughts on the error that occured:", err)}
        );
    };

    const handleOnCloseModal = () => {
        setShowModal(false);
        setContactName('');
        setErrorSendEmail('');
    }

    return (
        <div>
            <div className={showModal ? "form-showmodal" : "form"}>
                <form onSubmit={
                    handleSubmit(onSubmit)
                }>
                    <div className="form-group">
                        <label>Name
                        </label>
                        <input name="name" placeholder="Bruce Wayne"
                            ref={
                                register({
                                    required: "Please enter your name",
                                    maxLength: {
                                        value: 20,
                                        message: "Please enter a name with fewer than 20 characters"
                                    }
                                })
                            }/>
                    </div>
                    <span className="error">{errors.name && errors.name.message}</span>

                    <div className="form-group">
                        <label>Email
                        </label>
                        <input name="email" placeholder="bruce@wayne.com"
                            ref={
                                register({
                                    required: "Please enter an email",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "invalid email address"
                                    }
                                })
                            }/> 
                      <span className="error">{errors.email && errors.email.message}</span>
                    </div>

                    <div className="form-group">
                        <label>Message
                        </label>
                        <textarea name="comment" className="textarea" placeholder="Hi Clara, I'm Bruce..."
                            ref={
                                register({required: true})
                            }/> 
                        <span className="error">{errors.comment && "oops, you forgot your message!"}</span>   
                    </div>
                    <br/>
                    <input type="submit" className="button"/>
                </form>

            </div>
            <div className="form-gif">
                <img src={gif}
                    alt="cat-typing"
                    className="gif--size"/>
            </div>

            { showModal && <div className="popup">
              {!errorSendEmail && <p className="popup--text"> Mail sent correctly! </p>}
              {!errorSendEmail &&<p className="popup--text">  Thanks {contactName}!</p>} 
              {errorSendEmail && <p className="popup--text"> {errorSendEmail}</p> }
              <button type="submit" className="popup--button"
                  onClick={handleOnCloseModal}>
                  Close
              </button>
            </div>} 
        </div>
    );
}


export default ContactForm;
