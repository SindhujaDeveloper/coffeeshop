import { Formik } from 'formik';
// import { useEffect } from 'react';
import { Container, Form, Image, InputGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupRequest } from '../../redux/actions/login';
import "../../assets/css/signup.scss";
import phoneIcon from '../../assets/images/phoneIcon.png';
import personIcon from '../../assets/images/person.png';
import calendarIcon from '../../assets/images/calendar.png';
import genderIcon from '../../assets/images/gender.png';
import cityIcon from '../../assets/images/city.png';


export default function SignUp() {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { isLogin, userDetails } = useSelector((state: any) => state.login);

	// const routePush = (path: string) => {
	// 	navigate({ pathname: path });
	// };

	return (
		<Formik
			initialValues={{
				Firstname: isLogin ? userDetails.Firstname : '',
				Mobileno: isLogin ? userDetails.Mobileno : '',
				Lastname: isLogin ? userDetails.Lastname : '',
				Gender: isLogin ? userDetails.Gender : '',
				Birthdate: isLogin ? userDetails.Birthdate : '',
				City: isLogin ? userDetails.City : '',
			}}
			onSubmit={(values) => {
				if (isLogin) {
					dispatch(signupRequest({ values, isLogin: true }));
				} else {
					dispatch(signupRequest({ values }));
					navigate('/')
				}
			}}
		>
			{({ values, errors, handleChange, handleSubmit, handleBlur, dirty, isValid }) => {

				const disableUserDetails = () => {
					if (
						values.Firstname === userDetails.Firstname &&
						values.Lastname === userDetails.Lastname &&
						values.City === userDetails.City &&
						values.Gender === userDetails.Gender &&
						values.Birthdate === userDetails.Birthdate &&
						values.Mobileno === userDetails.Mobileno && values.Mobileno !== ''
					) return true
				}

				return (
					<Container fluid="lg">
						<div className='signup_main'>
							{/* <form onSubmit={handleSubmit} className="signup_page">
								<input
									type="text"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.Mobileno}
									name="Mobileno"
									placeholder="Mobile No"
									className='login_fields'
								/>
								{errors.Mobileno && <div id="email">errors.Mobileno</div>}
								<input
									type="text"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.Firstname}
									name="Firstname"
									placeholder="First Name"
									className='login_fields'
								/>
								{errors.Firstname && <div id="password">errors.Firstname</div>}
								<input
									type="text"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.Lastname}
									name="Lastname"
									placeholder="Last Name"
									className='login_fields'
								/>
								{errors.Lastname && <div id="password">errors.Lastname</div>}
								<input
									type="text"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.Birthdate}
									name="Birthdate"
									placeholder="Date Of Birth"
									className='login_fields'
								/>
								{errors.Birthdate && <div id="password">errors.Birthdate</div>}
								<input
									type="text"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.Gender}
									name="Gender"
									placeholder="Gender"
									className='login_fields'
								/>
								{errors.Gender && <div id="password">errors.Gender</div>}
								<input
									type="text"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.City}
									name="City"
									placeholder="City"
									className='login_fields'
								/>
								{errors.City && <div id="password">errors.City</div>}
								<button
									disabled={disableUserDetails()}
									type="submit"
									className='commonBtn submit'
								>
									SUBMIT
								</button>
								<button
									className='commonBtn back'
									onClick={() => {
										navigate(-1)
									}}
								>
									BACK
								</button>
							</form> */}
							<form onSubmit={handleSubmit} className='form_login'>
								<Row style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '4%' }}>
									<InputGroup className="mb-3">
										<InputGroup.Text id="basic-addon1" style={{ outline: 0, backgroundColor: '#FFF3E6', border: '0px', borderColor: '#6B3715', borderRadius: '0px', borderStyle: 'solid', borderBottomWidth: '2px' }}>
											<Image src={phoneIcon} width='30px' height={'30px'} draggable='false' />
										</InputGroup.Text>
										<Form.Control
											placeholder="Mobile No"
											aria-label="Mobileno"
											value={values.Mobileno}
											onChange={handleChange}
											name="Mobileno"
											autoComplete={'off'}
										/>
									</InputGroup>
									{(errors.Mobileno) && <div id="email">{'errorMessage'}</div>}
								</Row>
								<Row style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '4%' }}>
									<InputGroup className="mb-3">
										<InputGroup.Text id="basic-addon1" style={{ outline: 0, backgroundColor: '#FFF3E6', border: '0px', borderColor: '#6B3715', borderRadius: '0px', borderStyle: 'solid', borderBottomWidth: '2px' }}>
											<Image src={personIcon} width='30px' height={'30px'} draggable='false' />
										</InputGroup.Text>
										<Form.Control
											placeholder="Name"
											aria-label="Firstname"
											value={values.Firstname}
											onChange={handleChange}
											name="Firstname"
											autoComplete={'off'}
										/>
									</InputGroup>
									{(errors.Firstname) && <div id="email">{'errorMessage'}</div>}
								</Row>
								{/* <Row style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '4%' }}>
									<InputGroup className="mb-3">
										<InputGroup.Text id="basic-addon1" style={{ outline: 0, backgroundColor: '#FFF3E6', border: '0px', borderColor: '#6B3715', borderRadius: '0px', borderStyle: 'solid', borderBottomWidth: '2px' }}>
											<Image src={phoneIcon} width='30px' height={'30px'} draggable='false' />
										</InputGroup.Text>
										<Form.Control
											placeholder="Last Name"
											aria-label="Lastname"
											value={values.Lastname}
											onChange={handleChange}
											name="Lastname"
											autoComplete={'off'}
										/>
									</InputGroup>
									{(errors.Lastname) && <div id="email">{'errorMessage'}</div>}
								</Row> */}
								<Row style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '4%' }}>
									<InputGroup className="mb-3">
										<InputGroup.Text id="basic-addon1" style={{ outline: 0, backgroundColor: '#FFF3E6', border: '0px', borderColor: '#6B3715', borderRadius: '0px', borderStyle: 'solid', borderBottomWidth: '2px' }}>
											<Image src={calendarIcon} width='30px' height={'30px'} draggable='false' />
										</InputGroup.Text>
										<Form.Control
											placeholder="Birth Date"
											aria-label="Birthdate"
											value={values.Birthdate}
											onChange={handleChange}
											name="Birthdate"
											autoComplete={'off'}
										/>
									</InputGroup>
									{(errors.Birthdate) && <div id="email">{'errorMessage'}</div>}
								</Row>
								<Row style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '4%' }}>
									<InputGroup className="mb-3">
										<InputGroup.Text id="basic-addon1" style={{ outline: 0, backgroundColor: '#FFF3E6', border: '0px', borderColor: '#6B3715', borderRadius: '0px', borderStyle: 'solid', borderBottomWidth: '2px' }}>
											<Image src={genderIcon} width='35px' height={'35px'} draggable='false' />
										</InputGroup.Text>
										<Form.Control
											placeholder="Gender"
											aria-label="Gender"
											value={values.Gender}
											onChange={handleChange}
											name="Gender"
											autoComplete={'off'}
										/>
									</InputGroup>
									{(errors.Gender) && <div id="email">{'errorMessage'}</div>}
								</Row>
								<Row style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '4%' }}>
									<InputGroup className="mb-3">
										<InputGroup.Text id="basic-addon1" style={{ outline: 0, backgroundColor: '#FFF3E6', border: '0px', borderColor: '#6B3715', borderRadius: '0px', borderStyle: 'solid', borderBottomWidth: '2px' }}>
											<Image src={cityIcon} width='30px' height={'30px'} draggable='false' />
										</InputGroup.Text>
										<Form.Control
											placeholder="City"
											aria-label="City"
											value={values.City}
											onChange={handleChange}
											name="City"
											autoComplete={'off'}
										/>
									</InputGroup>
									{(errors.City) && <div id="email">{'errorMessage'}</div>}
								</Row>
								<Row style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '4%' }}>
									<button
										disabled={disableUserDetails()}
										type="submit"
										className='commonBtn submit'
									>
										SIGN UP
									</button>
								</Row>
								<Row style={{ paddingLeft: '5%', paddingRight: '5%', paddingTop: '2%' }}>
									<div className="signupTxt" style={{ display: 'flex', flexDirection: 'row' }}>
										<p>Have an Account?</p>
										<p style={{ fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => navigate('/main/login')} >Login</p>
									</div>
								</Row>
							</form>
						</div>
					</Container>
				)
			}}
		</Formik >
	);
}