import {React, useRef} from 'react'
import './Contact.css'
import FrontImage from './FrontImage'
import contactImage from './images/vegetable-love.jpg'
import emailjs from '@emailjs/browser'
function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mp0qsfq', 'template_w8zc3u7', form.current, '4k3x_ho8Osh_q22-O')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };



  return (
    <div className="contact">
      {/* <h1>Contact Us</h1> */}
      <FrontImage src={contactImage} headline='Contact Us' moto='We would like to hear your feedback and we are open to work together.'/>
      <div className='contact-column'>
        <div className='address'>
        <i class="fa fa-map-marker fa-5x" aria-hidden="true"></i>
        <p><strong>head office:</strong> Addis Ababa, Ethiopia</p>
            <p><strong>branch:</strong> sululta, Oromia, Ethiopia</p>
            <p><strong>Tel:</strong> +25111111111</p>
            <p><strong>Email:</strong> organic@email.com</p>
        </div>
      <div className='contact--form'>
      <form ref={form} onSubmit={sendEmail} action="">
        <label htmlFor="">Name: </label>
        <input type="text" name='user_name' required />
        <label htmlFor="">Email: </label>
        <input type="email" name='user_email' required />
        <label htmlFor="">Your Message:</label>
        <textarea name='message' />
        <button type='submit' value='send' className='send-btn'>send</button>
      </form>
    </div>
      </div>
    <div className='larger-icons'>
    <i class="fa fa-facebook fa-3x" aria-hidden="true"></i>
    <i class="fa fa-telegram fa-3x" aria-hidden="true"></i>
    <i class="fa fa-envelope fa-3x" aria-hidden="true"></i>
    <i class="fa fa-phone fa-3x" aria-hidden="true"></i>
    <i class="fa fa-linkedin fa-3x" aria-hidden="true"></i>
    </div>
    <div className='smaller-icons'>
    <i class="fa fa-facebook fa-lg" aria-hidden="true"></i>
    <i class="fa fa-telegram fa-lg" aria-hidden="true"></i>
    <i class="fa fa-envelope fa-lg" aria-hidden="true"></i>
    <i class="fa fa-phone fa-lg" aria-hidden="true"></i>
    <i class="fa fa-linkedin fa-lg" aria-hidden="true"></i>
    </div>
    </div>
  )
}

export default Contact