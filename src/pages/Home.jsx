import React from "react";
import Navbar from "../components/navbar/Navbar";

// import Navbar from "../../components/navbar/Navbar";
import "./home/Home.css";
import "./home/HomeMobile.css";
import Footer from "../components/footer/Footer";
import Error from "../components/error/Error";
// import AOS from "aos";

const Home = () => {
  return (
    <div className="home-main">
      <div className="left" data-aos="fade-right">
        <Footer />
      </div>

      <div className="right">
        <Error />

        <div className="r-up" data-aos="fade-down" data-aos-delay="2000">
          <Navbar />
        </div>
        <hr />
        <div
          className="r-down"
          data-aos="fade-down-right"
          data-aos-delay="2500"
        >
          <div className="inside">
            <h3 className="c-white">
              DIFFICUILT PATHS LEADS TO BEAUTIFULL DESTINATIONS
            </h3>
            <button className="btn-home">View Resume</button>
          </div>
        </div>
      </div>
      <div className="right-most" data-aos="fade-down" data-aos-delay="3000">
        <div className="i-r-last">
          <div className="i-item">HOME</div>
          <div className="i-item">ABOUT</div>
          <div className="i-item">SERVICES</div>
          <div className="i-item">CONTACT</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
