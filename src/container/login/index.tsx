import { Formik } from 'formik';
import { Container, Form, Image, InputGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginRequest, sendSmsRequest } from '../../redux/actions/login';
import '../../assets/css/login.scss'
import { useEffect } from 'react';
import phoneIcon from '../../assets/images/phoneIcon.png'

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { successMessage, errorMessage, userDetails } = useSelector((state: any) => state.login);

    useEffect(() => {
        if (successMessage) {
            dispatch(sendSmsRequest({
                'apikey': '6on957rb36978j0rl148a6j226v03jmr',
                'sender': 'SEDEMO',
                'to': userDetails?.Mobileno,
                'message': `Hello ${userDetails?.Firstname || ''}, This is a test message from spring edge`,
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
                navigate('/')
            }}
        >
            {({ values, errors, handleChange, handleSubmit, handleBlur, dirty }) => {
                return (
                    <Container fluid>
                        <form onSubmit={handleSubmit} className='form_login'>
                            <Row style={{ paddingLeft: '10%', paddingRight: '10%' }}>
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
                                {(errors.Mobileno || errorMessage) && <div id="email">{errorMessage}</div>}
                            </Row>
                            <Row style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '7%' }}>
                                <button
                                    disabled={!dirty || values.Mobileno === ''}
                                    // type="submit"
                                    onClick={() => { dispatch(loginRequest(values)); navigate('/') }}
                                    className="commonBtn"
                                >
                                    LOGIN
                                </button>
                            </Row>
                            <Row style={{ paddingLeft: '5%', paddingRight: '5%', paddingTop: '7%' }}>
                                <div className="signupTxt" style={{ display: 'flex', flexDirection: 'row' }}>
                                    <p>Have an Account?</p>
                                    <p style={{ fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => navigate('/main/signup')} >Signup</p>
                                </div>
                            </Row>
                            <Row style={{ paddingLeft: '5%', paddingRight: '5%', paddingTop: '3%' }}>
                                <p className="signupTxt">-----------------OR-------------------</p>
                            </Row>
                            <Row style={{ paddingLeft: '5%', paddingRight: '5%', paddingTop: '3%' }}>
                                <p className="signupTxt">Go To Home Page</p>
                            </Row>
                        </form>
                    </Container>
                )
            }}
        </Formik >
    );
}