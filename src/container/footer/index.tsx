import { Col, Row } from "react-bootstrap";
import "../../assets/css/footer.css";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <Row className="footer-content">
        <Col className="footer-logo">
          <img src={logo} alt="Coffee Shop Logo" />
        </Col>
        <Col className="footer-info">
          <h3>Contact Us</h3>
          <p>Update Soon</p>
          <p>Email: crazydeveloper.p@gmail.com</p>
          <p>Phone: 8098949366</p>
        </Col>
        <Col className="footer-links">
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
        </Col>
      </Row>
      <div className="footer-bottom">
        <p>&copy; 2023 Coffee Shop. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
