import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import { Form } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('test1', 'template_gz75pya', form.current, 'user_pSBtvJkjJCDiTT06fYpuB')
        .then((result) => {
            alert("Successfully")
        }, (error) => {
            alert(error.text);
        });
        e.target.reset();
    };
    return (
        <Form ref={form} onSubmit={sendEmail} className="contact-body mx-5 my-5">
            
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your Name</Form.Label>
    <Form.Control as="textarea" placeholder="Your Name" required name="name" rows={3} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" required name="email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your Message</Form.Label>
    <Form.Control as="textarea" placeholder="Your message" required name="message" rows={3} />
        </Form.Group>
        
        <input type="submit" value="Send"
            
        />
        
        </Form>
    );
};

export default Contact;