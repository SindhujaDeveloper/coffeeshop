import { useNavigate } from "react-router-dom";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import "../../assets/css/header.css";
import profile_image from "../../assets/images/profile_image.png";
import logo from "../../assets/images/logo.svg";
import { useSelector } from "react-redux";
import { useState } from "react";
import { LogoutModal } from "../../components";
import { logout } from "../../redux/actions/login";
import { useDispatch } from "react-redux";
import { ProfileModal } from "../../components/profileModal";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLogin = useSelector((state: any) => state.login.isLogin);
  const [showButtons, setShowButtons] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [alert, setAlert] = useState(false);

  return (
    <>
      <Navbar expand="lg" className="navbar-style" fixed="top">
        <Container>
          <Navbar.Brand>
            <Image src={logo} width="55px" height="87px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              fill
              justify
              className="me-auto my-5 my-lg-0"
              style={{ maxHeight: "100px", width: "100%" }}
              navbarScroll
            >
              <Nav.Item>
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#booknow">Book Now</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#menu">Menu</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#contact">Contact Us</Nav.Link>
              </Nav.Item>
            </Nav>
            <div className="sgnInsgnOutBtn">
              {isLogin ? (
                <>
                  <Image
                    src={profile_image}
                    className="profile_image"
                    width="50px"
                    roundedCircle
                    onClick={() => setShowButtons(!showButtons)}
                  />
                  {showButtons && (
                    <div className="profileBtn">
                      <div
                        onClick={() => {
                          setShowProfile(true);
                          setShowButtons(false);
                        }}
                      >
                        Profile
                      </div>
                      <div
                        onClick={() => {
                          // setShowCart(true);
                          setShowButtons(false);
                          navigate('/cart')
                        }}
                      >
                        My Cart
                      </div>
                      <div
                        onClick={() => {
                          setAlert(true);
                          setShowButtons(false);
                        }}
                      >
                        Logout
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Button
                  variant="light"
                  className="signinBtn"
                  onClick={() => navigate("/main/login")}
                >
                  <p className="signinTxt">Sign In</p>
                </Button>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ProfileModal
        show={showProfile}
        closeModal={() => setShowProfile(false)}
      />
      <LogoutModal
        show={alert}
        closeAlert={() => setAlert(false)}
        onLogout={() => {
          dispatch(logout());
          setAlert(false);
        }}
      />
      {/* <CartModal show={showCart} closeModal={() => setShowCart(false)} /> */}
    </>
  );
}
