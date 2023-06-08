import React, { useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const StyledContactForm = styled.div`
 display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  background-color: #f4f4f4;
  padding: 70px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  label {
    margin-top: 10px;
    padding-right: 200px;
   
  }

  input,
  textarea {
    padding: 8px;
    margin-top: 40px;
    padding-left: 200px;
  }
  input[type="submit"] {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 8px 20px;
    cursor: pointer;
  }
`;


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_3wc2g3l',
            'template_vcwe4qa',
            form.current,
            'GR636osXL0XcsltoQ')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
                form.current.reset();
            }, (error) => {
                console.log(error.text);

            });

    };

    return <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>

    </StyledContactForm>;
};



export default Contact;