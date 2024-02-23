import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Importing the CSS file

const Footer = () => (
  <div className="footer">
    <h2>
      Made with by{" "}
      <Link to={"https://github.com/dha2213"}>Dhananjay </Link>
    </h2> 
     
    <button className="contact-btn">
  <a href="mailto:dhananjayyadav221303@gmail.com" target="_blank" rel="noopener noreferrer">
    Contact Us
  </a>
</button>
  </div>
);

export default Footer;
