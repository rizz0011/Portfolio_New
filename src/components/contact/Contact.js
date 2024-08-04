import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = React.useRef();

  const sendEmail = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2baef531-8d7f-4c53-b6f3-7b001fb2e746");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      toast.success("Message send successfully!", {
        position: "top-center",
        autoClose: 1000,
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error("Opps something went wrong!", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail />
            <h4>Email</h4>
            <h5>ahmadkhanrizwan0@gmail.com</h5>
            <a href="mailto:ahmadkhanrizwan0@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <BsMessenger />
            <h4>Messenger</h4>
            <a href="https://m.me/rizwan.iftekhar.9">Send a message</a>
          </article>

          <article className="contact__option">
            <BsInstagram />
            <h4>Instagram</h4>
            <a href="https://www.instagram.com/rizz__khan0/?hl=en">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>

      <ToastContainer />
    </section>
  );
}

export default Contact;
