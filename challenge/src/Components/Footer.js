import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "../Styles//Footer.css"; 
function Footer() {
  return (
    <footer className="footer">
      
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/joaomortagua2001/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/joaomortagua2001" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/joaomortagua26/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
