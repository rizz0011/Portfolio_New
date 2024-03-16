import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                {" "}
                User research and analysis to understand user behavior and needs.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                {" "}
                Designing user interfaces that are visually appealing and easy
                to use.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Creating user flow diagrams and wireframes to outline the
                software's structure.
              </p>
            </li>
          </ul>
        </article>

        <article className="services">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Building online stores and shopping cart</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Building E-commerce website.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Building One page application using React.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Building creative and responsive website for Bussiness.</p>
            </li>
          </ul>
        </article>

        <article className="services">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating innovative logo for website.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Designing responsive User interfaces.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Blog posts.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Social media posts.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
