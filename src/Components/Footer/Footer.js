import React from "react";
import footerLogo from "../../assets/footer-logo.png";
import copyrightLogo from "../../assets/icons/copyright-icon.png";

export const Footer = () => {
  return (
    <footer>
      <div className="footerTop">
        <ul className="footerTop__content">
          <a href="home">
            <li>Home</li>
          </a>
          <a href="home">
            <li>About Us</li>
          </a>
          <a href="home">
            <li>Contact Us</li>
          </a>
          <a href="home">
            <li>Join our health community</li>
          </a>
        </ul>
        <p>
          Copyright <img src={copyrightLogo} alt="" /> 2022
          <img src={footerLogo} alt="" />
        </p>
      </div>
      <aside>
        <p>
          Disclaimer : The contents of this website is not intended to
          substitute professional medical advice, diagnosis or treatment.
        </p>
      </aside>
    </footer>
  );
};
