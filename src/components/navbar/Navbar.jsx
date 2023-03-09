// import  from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./img/p1.png" className="d-block w-100" alt="..." />
            <div className="desc">
              <h3 className="c-yellow">Portfilio</h3>
              <p>
                Tech stack : Node JS, CSS, Handlebars(HBS), HTML, MongoDB <br />
                Hosting : GitHub, Heroku <br />
                Live Project :
                <a
                  className="c-black "
                  href="https://profile.sonarpratik.repl.co"
                  target="_blank"
                >
                  Visit Site
                </a>
                <br />
                Description : Basic Portfolio of my all websites <br />
              </p>
            </div>
          </div>
          <div className="carousel-item ">
            <img src="./img/p2.png" className="d-block w-100" alt="..." />
            <div className="desc">
              <h3 className="c-yellow">E-commerce</h3>

              <p>
                Tech stack : React JS, Node Js, API , CSS <br />
                Hosting : GitHub <br />
                Live Project :
                <a
                  className="c-black"
                  href="https://subtle-cendol-7b88b7.netlify.app/
                  "
                  target="_blank"
                >
                  Visit Site
                </a>
                <br />
                Description : Ecommerce app with backend and react js
                <br />
              </p>
            </div>
          </div>
          <div className="carousel-item ">
            <img src="./img/p3.png" className="d-block w-100" alt="..." />
            <div className="desc">
              <h3 className="c-yellow">Nuts And Transport</h3>

              <p>
                Tech stack : Node JS, CSS, Handlebars(HBS), HTML, JavaScript,
                MongoDB, Express JS <br />
                Hosting : GitHub, Heroku
                <br />
                Live Project :
                <a
                  className="c-black"
                  href="https://NutSandTransport.sonarpratik.repl.co
                  "
                  target="_blank"
                >
                  Visit Site
                </a>
                <br />
                Description : First website with MongoDB, Login and Register
                <br />
              </p>
            </div>
          </div>
          <div className="carousel-item ">
            <img src="./img/p4.png" className="d-block w-100" alt="..." />
            <div className="desc">
              <h3 className="c-yellow">Weather</h3>

              <p>
                Tech stack : Node JS, CSS, Handlebars(HBS), HTML, JavaScript,
                API fetching, Bootstrap
                <br />
                Hosting : GitHub, Heroku
                <br />
                Live Project :
                <a
                  className="c-black"
                  href="https://weather.sonarpratik.repl.co/weather
                  "
                  target="_blank"
                >
                  Visit Site
                </a>
                <br />
                Description : Weather app giving live temperature and climate
                condition
                <br />
              </p>
            </div>
          </div>
          <div className="carousel-item ">
            <img src="./img/p5.png" className="d-block w-100" alt="..." />
            <div className="desc">
              <h3 className="c-yellow">Text Utile</h3>

              <p>
                Tech stack : React JS, CSS
                <br />
                Hosting : GitHub
                <br />
                Live Project :
                <a
                  className="c-black"
                  href="https://sonarpratik.github.io/reactlive/
                  "
                  target="_blank"
                >
                  Visit Site
                </a>
                <br />
                Description : My first basic app with React
                <br />
              </p>
            </div>
          </div>
          <div className="carousel-item ">
            <img src="./img/d2.png" className="d-block w-100" alt="..." />
            <div className="desc">
              <h3 className="c-yellow">Word Scrambler</h3>

              <p>
                Tech stack : HTML, Bootstrap , CSS , JavaScript
                <br />
                Hosting : GitHub 
                <br />
                Live Project :
                <a
                  className="c-black"
                  href="https://sonarpratik.github.io/WordScramble/
                  "
                  target="_blank"
                >
                  Visit Site
                </a>
                <br />
                Description : My Second basic JavaScript Game
                <br />
              </p>
            </div>
          </div>
          <div className="carousel-item ">
            <img src="./img/d3.png" className="d-block w-100" alt="..." />
            <div className="desc">
              <h3 className="c-yellow">QR Code Generator for Your BMI</h3>

              <p>
                Tech stack : HTML, React , CSS , JavaScript , Qr Library
                <br />
                Hosting : GitHub 
                <br />
                Live Project :
                <a
                  className="c-black"
                  href="https://ubiquitous-sundae-17d378.netlify.app/
                  "
                  target="_blank"
                >
                  Visit Site
                </a>
                <br />
                Description : My first basic JavaScript Game
                <br />
              </p>
            </div>
          </div>
          <div className="carousel-item ">
            <img src="./img/d1.png" className="d-block w-100" alt="..." />
            <div className="desc">
              <h3 className="c-yellow">Car Dash</h3>

              <p>
                Tech stack : HTML, Bootstrap , CSS , JavaScript
                <br />
                Hosting : GitHub 
                <br />
                Live Project :
                <a
                  className="c-black"
                  href="https://sonarpratik.github.io/CarDash/
                  "
                  target="_blank"
                >
                  Visit Site
                </a>
                <br />
                Description : My first basic JavaScript Game
                <br />
              </p>
            </div>
          </div>
          <div className="carousel-item ">
            <img src="./img/p6.png" className="d-block w-100" alt="..." />
            <div className="desc">
              <h3 className="c-yellow">iGames</h3>

              <p>
                Tech stack : HTML, Bootstrap , CSS
                <br />
                Hosting : GitHub
                <br />
                Live Project :
                <a
                  className="c-black"
                  href="https://sonarpratik.github.io/iGame/
                  "
                  target="_blank"
                >
                  Visit Site
                </a>
                <br />
                Description : My first basic app with Bootstrap
                <br />
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
