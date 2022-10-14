import { useNavigate } from 'react-router-dom';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import '../../assets/css/header.css';
import profile_image from '../../assets/images/profile_image.png';
import { useSelector } from 'react-redux';

export default function Header() {

	const navigate = useNavigate();
	const isLogin = useSelector((state: any) => state.login.isLogin);

	return (
		<Navbar expand="lg">
			<Container>
				<Navbar.Brand href="#">Logo</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						fill
						justify
						variant="tabs"
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
					<Image
						src={profile_image}
						className='profile_image'
						width={'50px'}
						roundedCircle
						onClick={() => {
							if (isLogin) {
								navigate('./signUp')
							}
							else {
								navigate('./login')
							}
							// console.log('navigate', navigate)
						}}
					/>
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
	);
}