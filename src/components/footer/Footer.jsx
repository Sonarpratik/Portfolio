import React from 'react';
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
    return (
        <div>
             <div className="box">
          <div className="upper">
            <h3>
              ar<span className="change-it">CADE</span>
            </h3>
          </div>
          <div className="middle">
            <h3 className="h-h3">Hello its.....</h3>
            <h1
              className="h-h1"
              data-aos="fade-right"
              data-aos-delay="1000"
              data-aos-duration="1000"
            >
              Sonar Pratik
            </h1>
            <p
              className="for-size"
              data-aos="fade-right"
              data-aos-delay="1500"
              data-aos-duration="1000"
            >
              Home Made Web Devloper
            </p>
            <button className="btn-home">Hire Me</button>
          </div>
          <div
            className="lower"
            data-aos="fade-down"
            data-aos-delay="1500"
            data-aos-duration="1000"
          >
            <a className="a-icon" href="/">
              <GitHubIcon />
            </a>
            <a className="a-icon" href="/">
              <InstagramIcon />
            </a>
            <a className="a-icon" href="/">
              <TwitterIcon />
            </a>
          </div>
        </div>
        </div>
    );
}

export default Footer;
