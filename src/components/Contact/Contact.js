import React from "react";
import "./Contact.css"; // Import the CSS file

export const Contact = () => {
  return (
    <footer id="contact" className="contact-container">
      <section className="contact" id="contact">
        <h2 className="contact-title">Contact Info</h2>
        <div className="row">
          <div className="content">
            <div className="info">
              <p className="EmailPhone">
                <strong>Email:</strong>
                <a href="mailto:thakurshubhangi999@gmail.com">
                  thakurshubhangi999@gmail.com
                </a>
              </p>
              <p className="EmailPhone">
                <strong>Phone:</strong>
                <a href="tel:+91222333444">+91 222333444</a>
              </p>
              <p>
                <strong>Location:</strong> Bidar, India - 585328
              </p>
            </div>
          </div>
          <form action="">
            <input type="text" placeholder="name" className="box" />
            <input type="email" placeholder="email" className="box" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="box message"
              placeholder="message"
            ></textarea>
            <button type="submit" className="contactBtn">
              Send
            </button>
          </form>
        </div>
      </section>
    </footer>
  );
};

export default Contact;
