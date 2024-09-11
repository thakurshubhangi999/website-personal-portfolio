import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS file
import emailIcon from "./emailIcon.png";
import linkedinIcon from "./linkedinIcon.png";
import githubIcon from "./githubIcon.png";
import menuIcon from "./menuIcon.png";
import closeIcon from "./closeIcon.png";
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
          src={menuOpen ? closeIcon : menuIcon}
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
          <li className="iconList">
            <a href="mailto:thakurshubhangi999@gmail.com">
              <img
                src={emailIcon}
                alt="Email icon"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </li>
          <li className="iconList">
            <a href="https://www.linkedin.com/in/thakur-shubhangi-0ba85b22b/">
              <img
                src={linkedinIcon}
                alt="LinkedIn icon"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </li>
          <li className="iconList">
            <a href="https://github.com/thakurshubhangi999">
              <img
                src={githubIcon}
                alt="Github icon"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
