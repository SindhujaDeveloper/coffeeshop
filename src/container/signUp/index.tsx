// import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Col, Row, Image, Tabs, Tab } from 'react-bootstrap';

// import { Formik } from 'formik';

import "../../assets/css/signup.scss";
import coffee_cup from '../../assets/images/corner_image1.png';

// import { signupRequest } from '../../redux/actions/login';

import Login from '../login';
import SignUp from './signup';

export default function SignUpwithProfile() {

	// const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	console.log(location.pathname.split('/')[2], 'location')

	// const { isLogin, userDetails } = useSelector((state: any) => state.login);

	const routePush = (path: string) => {
		navigate({ pathname: path });
	};

	// return (
	// 	<Formik
	// 		initialValues={{
	// 			Firstname: isLogin ? userDetails.Firstname : '',
	// 			Mobileno: isLogin ? userDetails.Mobileno : '',
	// 			Lastname: isLogin ? userDetails.Lastname : '',
	// 			Gender: isLogin ? userDetails.Gender : '',
	// 			Birthdate: isLogin ? userDetails.Birthdate : '',
	// 			City: isLogin ? userDetails.City : '',
	// 		}}
	// 		onSubmit={(values) => {
	// 			if (isLogin) {
	// 				dispatch(signupRequest({ values, isLogin: true }));
	// 			} else {
	// 				dispatch(signupRequest({ values }));
	// 				navigate('/')
	// 			}
	// 		}}
	// 	>
	// 		{({ values, errors, handleChange, handleSubmit, handleBlur, dirty, isValid }) => {
	return (
		<div className='signup_mainpage'>
			<Row>
				<Col xs={12} md={4}>
					<div className="signup_form">
						<Tabs
							id="justify-tab-example"
							activeKey={location.pathname.split('/')[2]}
							onSelect={(k: any) => routePush(k)}
							className="tabs_container"
							justify
						>
							<Tab eventKey="signup" title="SignUp" className='tab'>
								<SignUp />
							</Tab>
							<Tab eventKey="login" title="Login" className='tab'>
								<Login />
							</Tab>
						</Tabs>
					</div>
				</Col>
				<Col xs={12} md={4}>
					<Image src={coffee_cup} style={{ width: '202%', height: '105%' }} />
				</Col>
			</Row>
		</div>
		// )
		// 	}}
		// </Formik >
	);
}