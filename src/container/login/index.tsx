import { Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginRequest } from '../../redux/actions/login';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const userDetails = useSelector((state: any) => state.login.userDetails);
    // const isLogin = useSelector((state: any) => state.login.isLogin);

    return (
        <Formik
            initialValues={{
                Mobileno: '',
            }}
            onSubmit={(values) => {
                dispatch(loginRequest(values));
                navigate('/')
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