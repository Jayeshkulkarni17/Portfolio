import React from "react";
import Footer from '../Components/Footer';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <hr />
            <div id='contact'>
                
                <div className='contact-header'>
            
                    <h1 className='bold centre'>
                        Contact Me
                    </h1>
                    <a
                        href='mailto:jayKulkarni17ab@gmail.com'
                        className='heading1'
                    >
                        jayKulkarni17ab@gmail.com
                    </a>
                    <br/>
                    <span className='heading1'>+91 9021029598</span>
                </div>
                {/* <form
                    className='contact-form'
                   action="https://formspree.io/f/moqggwnp" method="POST"
                >
                    <div className='form-group'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Name'
                            required
                            name="name"
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='email'
                            className='form-control'
                            aria-describedby='emailHelp'
                            placeholder='Email'
                            required
                            name="email"
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Subject'
                            required
                            name="subject"
                        />
                    </div>
                    <div className='form-group'>
                        <textarea
                            className='form-control'
                            rows='5'
                            placeholder='Message'
                            required
                            name="message"
                        />
                    </div>
                    <input type='submit' className='btn shine' value='Submit' />
                </form> */}
            </div>
            
            <Footer />
        </>
    );
};

export default Contact;
