import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import emailjs from 'emailjs-com'
import {BsMessenger} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {

  const form = React.useRef()



  const sendEmail = (e) => {
   
   e.preventDefault();
   toast.success("Message send successfully!",{
    position:'top-center' ,
    autoClose: 1000,
   });
    emailjs.sendForm('service_9yq19jt', 'template_3alzfhk', form.current, 't7PGuY_hSyR_DQ6by')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail />
            <h4>Email</h4>
            <h5>ahmadkhanrizwan0@gmail.com</h5>
            <a href='mailto:ahmadkhanrizwan0@gmail.com'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsMessenger />
            <h4>Messenger</h4>
            <a href='https://m.me/rizwan.iftekhar.9'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsInstagram/>
            <h4>Instagram</h4>
            <a href='https://instagram.com/rizz_khan0?igshid=YmMyMTA2M2Y='>Send a message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
     
      <ToastContainer />
    </section>
  )
}

export default Contact