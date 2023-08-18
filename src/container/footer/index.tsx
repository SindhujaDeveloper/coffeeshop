import React from "react";
import "../../assets/css/footer.css";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Coffee Shop Logo" />
          </div>
          <div className="footer-info">
            <h3>Contact Us</h3>
            <p>Update soon</p>
            <p>Email: crazydeveloper.p@gmail.com</p>
            <p>Phone: 8098949366</p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#booknow">Book Now</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Coffee Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
