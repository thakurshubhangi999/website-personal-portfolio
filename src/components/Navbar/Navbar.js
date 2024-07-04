import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS file
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a className="title" href="/">
        Portfolio
      </a>
      <div className="menu">
        <img
          className="menuBtn"
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`menuItems ${menuOpen ? "menuOpen" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div class="social-icons">
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-linkedin" style={{color: 'white'}}></i>
        </a>
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-github" style={{color: 'white'}}></i>
        </a>
        <a href="mailto:youremail@example.com">
          <i
            class="fa fa-envelope"
            aria-hidden="true"
            style={{color: 'white'}}
          ></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
