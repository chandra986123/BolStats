import React from "react";
import "./Subscribe.css";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Subscribes = () => {
  return (
    <section id="subcribe">
      <div className="container subscribe">
        <h2 data-aos="zoom-in">Contact Us Now!</h2>
        <form>
          <div className="form-control" data-aos="fade-right">
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="form-control" data-aos="fade-right">
            <input type="text" placeholder="Your Email" />
          </div>
          <div className="form-control" data-aos="fade-right">
            <input
              type="textarea"
              rows="4"
              cols="10"
              placeholder="Your Message"
            />
          </div>
          <div className="form-controls" data-aos="fade-right">
            <button>Contact Us</button>
          </div>
        </form>

        <div className="social-icons">
          <div className="social-icon">
            <TiSocialGooglePlus />
          </div>
          <div className="social-icon">
            <FaFacebookF />
          </div>
          <div className="social-icon">
            <FaTwitter />
          </div>
          <div className="social-icon">
            <FaInstagram />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribes;
