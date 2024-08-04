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
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FaHouseUser className="about__icon" />
              <h5>Web Developer</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <GoProject className="about__icon" />
              <h5>Project</h5>
              <small>10+ Project Completed</small>
            </article>
          </div>

          <p>
            I am Rizwan Ahmad Khan, a dedicated web developer with over 3 years
            of experience in front-end development. I am passionate about
            creating dynamic and user-friendly web applications. I excel in
            building responsive interfaces and optimizing application
            performance. As a software developer, my main focus is on designing,
            developing, and maintaining software applications. I have a strong
            foundation in web development and continuously seek to expand my
            knowledge by learning new technologies and techniques. My goal is to
            develop high-quality software solutions that meet the needs of
            end-users. Hire me to build creative and innovative applications
            that stand out.
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
