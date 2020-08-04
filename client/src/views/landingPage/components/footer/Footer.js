import React from "react";
import { withRouter } from "react-router";
import "./footer.scss";
import Email from "../../../../assets/Email.png";
import Facebook from "../../../../assets/Facebook.png";
import Twitter from "../../../../assets/Twitter.png";
import Home from "../../../../assets/Home.png";
import Pin from "../../../../assets/Pin.png";
import Instagram from "../../../../assets/Instagram.png";

const Footer = () => {
  return (
    <footer>
      <div className="contacts">
        <div className="icons">
            <img alt="speakout" src={Instagram} />
            <img alt="speakout" src={Facebook} />
            <img alt="speakout" src={Twitter} />
            <img alt="speakout" src={Home} />
        </div>
        <div className="address">
          <img alt="speakout" src={Pin} />
          <p>Rd No 3949, Bani Jamra, Bahrain</p>
        </div>
        <div className="email">
          <img alt="speakout" src={Email} />
          <p>speakout.infobh@gmail.com</p>
        </div>
      </div>
      <div className="links">
        <p>Terms of Use</p>
        <p>Careers</p>
        <p>Site Map</p>
      </div>
    </footer>
  );
};

const FooterWithRouter = withRouter(Footer);

export default FooterWithRouter;