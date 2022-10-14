import React from "react";
import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h4>Useful Links</h4>
          <div className="footer-links">
            <a href="#faq">&bull; Support</a>
            <a href="#faq">&bull; About</a>
            <a href="#faq">&bull; Learn</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Services</h4>
          <div className="footer-links">
            <a href="#faq">&bull; App development</a>
            <a href="#faq">&bull; Web development</a>
            <a href="#faq">&bull; AI development</a>
            <a href="#faq">&bull; Blockchain Dev</a>
            <a href="#faq">&bull; RPA development</a>
            <a href="#faq">&bull; Product Dev</a>
          </div>
        </div>

        <div className="footer-box">
          <h4>Contact Us</h4>
          <div className="footer-contact">
            <p>
              <FaMapMarkerAlt /> &nbsp; Address: Florida,United States.
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +14534275689
            </p>

            <p>
              <FaFax /> &nbsp; Fax: +153264648
            </p>

            <p>
              <FaEnvelope /> &nbsp; Email: info@Bolstats.com
            </p>

            <p>
              <FaGlobe /> &nbsp; Website: www.Bolstates.com
            </p>
          </div>
        </div>

        <div className="footer-box">
          <img src={logo} alt="logo" />
          <p className="u-small-text">&copy; Copyright 2022. BolStats.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
