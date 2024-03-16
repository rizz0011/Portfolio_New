import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/rizzz0" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://www.instagram.com/rizz__khan0/" target="_blank">
        <BsInstagram />
      </a>
      <a href="https://www.facebook.com/rizwan.iftekhar.9" target="_blank">
        <BsFacebook />
      </a>
      <a href="https://twitter.com/rizwanahmadkha" target="_blank">
        <BsTwitter />
      </a>
    </div>
  );
}

export default HeaderSocials;
