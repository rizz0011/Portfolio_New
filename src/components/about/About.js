import React from "react";
import "./about.css";
import IMG from "../../assets/me2.jpeg";
import { FaAward } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { GoProject } from "react-icons/go";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={IMG} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2.7+ Years Working</small>
            </article>

            <article className="about__card">
              <FaHouseUser className="about__icon" />
              <h5>Web Developer</h5>
              <small>2.6+ Years Working</small>
            </article>

            <article className="about__card">
              <GoProject className="about__icon" />
              <h5>Project</h5>
              <small>10+ Project Completed</small>
            </article>
          </div>

          <p>
            I am Rizwan Ahmad Khan, having 2+ years of hands-on experience in
            wed development, I am passionate about creating dynamic and
            user-friendly web applications. Proficient in front-end development,
            I excel at building responsive interfaces and optimizing application
            performance. As a software developer, my main focus is on designing,
            developing, and maintaining software applications. I have working
            experience in web development and strong knowledge in this field
            over time. I am always enjoy learning new technologies and
            techniques. My goal is to develop high-quality software solutions
            that meet the needs of end-users. Hire me for building creative and
            innovative Application.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
