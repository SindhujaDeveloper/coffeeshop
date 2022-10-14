import { Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupRequest } from '../../redux/actions/login';

export default function SignUpwithProfile() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const userDetails = useSelector((state: any) => state.login.userDetails);
	const isLogin = useSelector((state: any) => state.login.isLogin);

	return (
		<Formik
			initialValues={{
				Firstname: userDetails ? userDetails.Firstname : '',
				Mobileno: userDetails ? userDetails.Mobileno : '',
				Lastname: userDetails ? userDetails.Lastname : '',
				Gender: userDetails ? userDetails.Gender : '',
				Birthdate: userDetails ? userDetails.Birthdate : '',
				City: userDetails ? userDetails.City : '',
			}}
			onSubmit={(values) => {
				if (isLogin) {
					dispatch(signupRequest({ values, isLogin: true }));
					navigate('/');
				} else {
					dispatch(signupRequest({ values, isLogin: false }));
					navigate('/')
				}
			}}
		>
			{({ values, errors, handleChange, handleSubmit, setFieldTouched, touched, setFieldValue, handleBlur, dirty, isValid }) => {
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
						{errors.Mobileno && <div id="email">errors.Mobileno</div>}
						{/* {isLogin && (
							<> */}
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
						{/* </>)} */}
						<Button
							disabled={!dirty}
							type="submit"
						>
							Submit
						</Button>
					</form>
				)
			}}
		</Formik>
	);
}