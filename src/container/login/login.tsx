import { Formik } from 'formik';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginRequest, sendSmsRequest } from '../../redux/actions/login';
import '../../assets/css/login.scss'
import { useEffect } from 'react';

export default function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { successMessage, errorMessage, userDetails } = useSelector((state: any) => state.login);

	useEffect(() => {
		if (successMessage) {
			dispatch(sendSmsRequest({
				'apikey': '6on957rb36978j0rl148a6j226v03jmr',
				'sender': 'SEDEMO',
				'to': userDetails.Mobileno,
				'message': `Hello ${userDetails.Firstname || ''}, This is a test message from spring edge`,
				'format': 'json'
			}))
			navigate('/');
		}
	}, [dispatch, navigate, successMessage, userDetails]);


	return (
		<Formik
			enableReinitialize
			initialValues={{
				Mobileno: '',
			}}
			onSubmit={(values) => {
				dispatch(loginRequest(values));
			}}
		>
			{({ values, errors, handleChange, handleSubmit, handleBlur, dirty }) => {
				return (
					<Container fluid>
						<p className='title'>LOGIN</p>
						<form onSubmit={handleSubmit} className='form_login'>
							<input
								type="text"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.Mobileno}
								name="Mobileno"
								placeholder="Mobile No"
								className='login_fields'
							/>
							{(errors.Mobileno || errorMessage) && <div id="email">{errorMessage}</div>}
							<button
								disabled={!dirty || values.Mobileno === ''}
								type="submit"
								className="commonBtn"
							>
								Submit
							</button>
							<p onClick={() => navigate('/signup')} className="signupTxt">
								Don't have an account?. Please SignUp
							</p>
						</form>
					</Container>
				)
			}}
		</Formik>
	);
}