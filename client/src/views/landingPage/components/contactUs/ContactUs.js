import React, { useEffect } from "react";
import { withRouter } from "react-router";
import "./contactUs.scss";
import WhatsApp from "../../../../assets/whatsapp.png";
import ContactEmail from "../../../../assets/ContactEmail.png";
import PinLarge from "../../../../assets/PinLarge.png";
import Instagram from "../../../../assets/Instagram.png";
import Facebook from "../../../../assets/Facebook.png";
import Twitter from "../../../../assets/Twitter.png";
import Map from "../../../../assets/SchoolMap.png";
import { toggle } from "../../../../actions/landingPageActions/landingPageActions";
import { connect } from 'react-redux';

function ContactUs(props) {

  useEffect(() => {
    props.toggle();

  }, [props])
  return (
    <div className="about-us">
      <header>
        <h1>Contact Us</h1>
        {/* <div className="link-container">
            <Link className="link" to="/kindergarten">
              Kindergarten
            </Link>
            <Link className="link" to="/primary">
              Primary
            </Link>
            <Link className="link red" to="#">
              Middle and Secondary
            </Link>
          </div> */}
      </header>
      <div className="body">
        <div className="body-left">
          <div className="contact-container">
            <img alt="speakout" src={WhatsApp} />
            <p>+973 35617635</p>
          </div>
          <div className="contact-container">
            <img alt="speakout" src={ContactEmail} />
            <p>speakout.info.bh@gmail.com</p>
          </div>
          <div className="contact-container">
            <img alt="speakout" src={PinLarge} />
            <p>
              Rd No 3949 <br />
              Bani Jamra, Bahrain
            </p>
          </div>
          <div className="img-container">
            <img alt="speakout" src={Map} />
          </div>
        </div>
        <div className="body-right">
          <h2>Social Media</h2>
          <div className="contact-container">
            <img alt="speakout" src={Instagram} />
            <p>speak_out_program</p>
          </div>
          <div className="contact-container">
            <img alt="speakout" src={Facebook} />
            <p>speakoutinfobh</p>
          </div>
          <div className="contact-container">
            <img alt="speakout" src={Twitter} />
            <p>speakoutbh</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    reset: state.landingPageReducer.reset,
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      { toggle }
  )(ContactUs)
)