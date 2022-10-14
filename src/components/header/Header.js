import React, { useEffect } from "react";

import "./Header.css";

import "../UI/button/Button.css";

import * as animationData from "./aa.json";

import Lottie from "react-lottie";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
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
          <h1>
            <span>ALL YOUR STATISTICS IN ONE PLACE</span>
            <span>THE BOLSTATS APP GIVES YOU REAL-TIME INSIGHTS</span>
          </h1>
          <p className="u-text-small u-text-light">
            BolStats is a 105 app specially developed for sellers on the bol.com
            platform. The app gives you insight into how your online store is
            doing. We offer a cheap price especially for the starting
            entrepreneur, for that price you get an extensive app. in the app
            you can see statistics about how your store is doing. You will also
            receive a notification with a new order and a registered return.
          </p>
          <div className="header-cta">
            {/* <Button
              text={"Learn More"}
              color="#2463e9"
              btn
              Class={"btn-dark"}
              href={"#faq"}
            /> */}
            {/* <Button
              text={"How It Works?"}
              btnClass={"btn-dark"}
              href={"#faq"}
            /> */}
          </div>
        </div>

        <div className="header-right" data-aos="fade-left">
          <div id="lottie">
            <Lottie options={defaultOptions} />
          </div>
          {/* <img src={phoneHeader} alt="phone" /> */}
        </div>
      </div>

      {/* <div className="floating-icon">
        <a href="#faq">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div> */}
    </section>
  );
};

export default Header;
