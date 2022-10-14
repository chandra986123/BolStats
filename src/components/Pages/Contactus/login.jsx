import * as React from "react";
import AOS from "aos";
import { useEffect } from "react";
import "./contact.css";

import * as animationData from "./cc.json";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import Lottie from "react-lottie";

const Logins = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" data-aos="fade-right">
          <div id="lottien">
            <Lottie options={defaultOptions} />
          </div>
        </div>

        <div className="header-right">
          <h1 data-aos="zoom-in">Contact Us Now!</h1>
          <form>
            <div className="form-control" data-aos="fade-right">
              <input type="text" placeholder="Your name" />
            </div>
            <div className="form-control" data-aos="fade-right">
              <input type="text" placeholder="Your Email" />
            </div>
            <div className="form-control" data-aos="fade-right">
              <input
                type="textarea"
                rows="5"
                cols="10"
                placeholder="Your Message"
              />
            </div>
            <div className="form-controls">
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
      </div>
    </section>
  );
};

export default Logins;
