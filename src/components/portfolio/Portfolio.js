import React from "react";
import "./portfolio.css";
import IMG from "../../assets/me.png";
import Calculator from "../../assets/cal.png";
import Ecom from "../../assets/e-com.png";
import TodoList from "../../assets/todolist.png";
import Quiz from "../../assets/quiz.png";
import PortfolioImg from "../../assets/portfolioClient.png";
import luxurious from "../../assets/luxuriousSofa.png"

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Portfolio() {
  const handleClick = () => {
    toast.warn("This is not deplyoed yet You can visit github to get code.", {
      position: "top-center",
      autoClose: 4000,
      theme: "colored",
    });
  };

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Calculator} alt="" />
          </div>
          <h3>Mobile Calculator</h3>
          <p>
            Mobile claculator with interactive UI, made in React JS having the
            functionality to perform mathematical operation.
          </p>
          <div className="portfolio__item-cta">
            <a className="btn btn-primary" onClick={handleClick}>
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Ecom} alt="" />
          </div>
          <h3> E-commerce Website</h3>
          <p>
            Fully responsive E-commerce website created using Vanilla Javascript
            with functionality to add/remove items in cart, filter items based
            on categories and later on checkout the cart items.
          </p>
          <div className="portfolio__item-cta">
            <a className="btn btn-primary" onClick={handleClick}>
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={TodoList} alt="" />
          </div>
          <h3>Todo List</h3>
          <p>
            This is a straightforward React application made for the purpose of
            adding daily activites. Also the todos can be marked done on
            completed as well can be removed from the list if not needed.
          </p>
          <div className="portfolio__item-cta">
            <a className="btn btn-primary" onClick={handleClick}>
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Quiz} alt="" />
          </div>
          <h3>Quiz Application</h3>
          <p>
            Developed quiz application using React Js, CSS and Javascript with
            responsive user interface.it is functionality, allowing users to
            play quizzes on a cricket topic and also implemented result
            reporting.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://cricket-quiz-app.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PortfolioImg} alt="" />
          </div>
          <h3>Portfolio</h3>
          <p>
            Designed and developed a portfolio using HTML, CSS, and JavaScript
            with full functionality showcasing my skills and projects. Worked
            independently to build a responsive UI.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://rizwan-ahmad.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={luxurious} alt="" />
          </div>
          <h3>Luxurious Sofa Furniture</h3>
          <p>
            This project involved creating an elegant and functional online
            presence for the client, showcasing their luxurious sofas, modern
            furniture, and other offerings. The website features a user-friendly
            interface, a responsive design, and optimized performance to enhance
            the user experience.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://luxuriousfurniture.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Portfolio;
