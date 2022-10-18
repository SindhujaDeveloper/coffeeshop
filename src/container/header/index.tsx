import { useNavigate } from 'react-router-dom';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import '../../assets/css/header.css';
import profile_image from '../../assets/images/profile_image.png';
import logo from '../../assets/images/logo.svg';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { LogoutModal } from '../../components';
import { logout } from '../../redux/actions/login';
import { useDispatch } from 'react-redux';

export default function Header() {

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const isLogin = useSelector((state: any) => state.login.isLogin);
	const [enable, setEnable] = useState(false);
	const [alert, setAlert] = useState(false);


	return (
		<>
			<Navbar expand="lg" className="navbar-style" sticky="top">
				<Container>
					<Navbar.Brand href="#">
						<Image src={logo} width={"88px"} height={'87px'} />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							fill
							justify
							// variant="tabs"
							className="me-auto my-5 my-lg-0"
							style={{ maxHeight: '100px', width: "100%" }}
							navbarScroll
						>
							<Nav.Item>
								<Nav.Link href="#action1">Home</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="#action2">Gallery</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="#action3">Contact Us</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="#action4">Menu</Nav.Link>
							</Nav.Item>
						</Nav>
						<div className='sgnInsgnOutBtn'>
							{isLogin ?
								(
									<>
										<Image
											src={profile_image}
											className='profile_image'
											width={'50px'}
											roundedCircle
											onClick={() => { setEnable(!enable) }}
										/>
										{
											enable && (
												<div className='profileBtn'>
													<div
														onClick={() => {
															setEnable(false);
															navigate('./signUp');
														}}
													>
														Profile
													</div>
													<div
														onClick={() => {
															setAlert(true);
															setEnable(false);
														}}
													>Logout</div>
												</div>
											)
										}
									</>
								)
								:
								<Button
									variant="light"
									className='signinBtn'
									onClick={() => {
										navigate('./login');
									}}
								>
									<p className='signinTxt'>Sign In</p>
								</Button>}
						</div>

						{/* <Form className="d-flex">
							<Form.Control
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
							<Button variant="outline-success">Search</Button>
						</Form> */}
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<LogoutModal
				show={alert}
				closeAlert={() => setAlert(false)}
				onLogout={() => {
					dispatch(logout());
					setAlert(false)
				}}
			/>
		</>
	);
}