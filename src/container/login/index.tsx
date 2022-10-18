import { Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginRequest } from '../../redux/actions/login';
import '../../assets/css/login.css'
import { useEffect } from 'react';

export default function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { successMessage, errorMessage } = useSelector((state: any) => state.login);

	useEffect(() => {
		if (successMessage) {
			navigate('/')
		}
	}, [navigate, successMessage])

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
					<form onSubmit={handleSubmit}>
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
						<Button
							disabled={!dirty || values.Mobileno === ''}
							type="submit"
						>
							Submit
						</Button>
						<p onClick={() => navigate('/signup')} className="signupTxt">
							Don't have an account?. Please SignUp
						</p>
					</form>
				)
			}}
		</Formik>
	);
}