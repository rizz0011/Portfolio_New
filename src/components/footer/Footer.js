import React from "react";
import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <h2>Rizwan Ahmad Khan</h2>
      <a href="" className="footer__logo"></a>
      <ul className="permalinks">
        <l>
          <a href="#">Home</a>
        </l>
        <li>
          {" "}
          <a href="#about">About</a>
        </li>
        <li>
          <a href="experience">Experience</a>
        </li>
        <li>
          {" "}
          <a href="#services">Services</a>
        </li>{" "}
        <a href="#services">Services</a>
        <li>
          <a href="portfolio">Portfolio</a>
        </li>
        <li>
          {" "}
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/rizz__khan0/?hl=en">
          <BsInstagram />
        </a>
        <a href="https://www.facebook.com/rizwan.iftekhar.9">
          <BsFacebook />
        </a>
        <a href="https://www.linkedin.com/in/rizzz0">
          <BsLinkedin />
        </a>
        <a href="https://twitter.com/rizwanahmadkha">
          <BsTwitter />
        </a>
        <a href="https://github.com/rizz0011">
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small> All right reserved | Copyright &copy; | 2023</small>
      </div>
    </footer>
  );
}

export default Footer;
