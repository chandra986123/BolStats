import React from "react";
import { FaApple } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { IconContext } from "react-icons";
import "./Download.css";

const Download = () => {
  return (
    <section id="download">
      <div className="container download">
        <h2>Cross-Platform Mobile Development</h2>
        <p className="u-text-small u-text-light">
          Native app development eschews the complexity of creating a
          sustainable product that spans multiple platform app development and
          focuses on generating a competent design that stays close to the
          target platform.Learn from experts who have been doing business
          successfully for years via bol.com. Follow step by step with
          experienced sellers.
        </p>

        <IconContext.Provider value={{ size: "25" }}>
          <div className="download-icons">
            <div className="download-icon" data-aos="flip-left">
              {/* <p className="rt"> Android</p> */}
              <GrAndroid />
            </div>

            <div className="download-icon" data-aos="flip-left">
              {/* <p className="rt">ios</p> */}
              <FaApple />
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </section>
  );
};

export default Download;
