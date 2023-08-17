import { Form, Image, InputGroup, Modal, Row } from 'react-bootstrap';
import '../assets/css/modal.scss';
import phoneIcon from '../assets/images/phoneIcon.png';
import personIcon from '../assets/images/person.png';
import calendarIcon from '../assets/images/calendar.png';
import genderIcon from '../assets/images/gender.png';
import cityIcon from '../assets/images/city.png';
import { useDispatch , useSelector} from 'react-redux';
import { Formik } from 'formik';
import { signupRequest } from '../redux/actions/login';

interface IProfileModal {
	show: boolean;
	onLogout?: () => void;
	closeModal: () => void;
}

export const ProfileModal = ({ show, closeModal }: IProfileModal) => {

	const dispatch = useDispatch();

	const { isLogin, userDetails } = useSelector((state: any) => state.login);

	return (
		<Modal
			show={show}
			aria-labelledby="contained-modal-title"
			centered
		>
			<Modal.Body>

				<Formik
					initialValues={{
						Firstname: isLogin ? userDetails?.Firstname : '',
						Mobileno: isLogin ? userDetails?.Mobileno : '',
						Lastname: isLogin ? userDetails?.Lastname : '',
						Gender: isLogin ? userDetails?.Gender : '',
						Birthdate: isLogin ? userDetails?.Birthdate : '',
						City: isLogin ? userDetails?.City : '',
					}}
					onSubmit={(values) => {
						dispatch(signupRequest({ values, isLogin: true }));
					}}
				>
					{({ values, errors, handleChange, handleSubmit, handleBlur, dirty, isValid }) => {

						const disableUserDetails = () => {
							if (
								values.Firstname === '' ||
								values.City === '' ||
								values.Gender === '' ||
								values.Birthdate === '' ||
								values.Mobileno ===''
							) return true
						}

						return (

							<form onSubmit={handleSubmit} className='form_profile'>
								<Row style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '4%' }}>
									<InputGroup className="mb-3">
										<InputGroup.Text id="basic-addon1" style={{ outline: 0, backgroundColor: '#FFF3E6', borderRadius: '0px', border: '3px #6B3715', borderStyle: 'solid' }}>
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
										<InputGroup.Text id="basic-addon1" style={{ outline: 0, backgroundColor: '#FFF3E6', borderRadius: '0px', border: '3px #6B3715', borderStyle: 'solid' }}>
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
										<InputGroup.Text id="basic-addon1" style={{ outline: 0, backgroundColor: '#FFF3E6', borderRadius: '0px', border: '3px #6B3715', borderStyle: 'solid' }}>
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
										<InputGroup.Text id="basic-addon1" style={{ outline: 0, backgroundColor: '#FFF3E6', borderRadius: '0px', border: '3px #6B3715', borderStyle: 'solid' }}>
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
										<InputGroup.Text id="basic-addon1" style={{ outline: 0, backgroundColor: '#FFF3E6', borderRadius: '0px', border: '3px #6B3715', borderStyle: 'solid' }}>
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
										UPDATE
									</button>
								</Row>
								<Row style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '4%' }}>
									<button className='commonBtn submit' type='reset' onClick={() => closeModal()}>
										CANCEL
									</button>
								</Row>
							</form>
						)
					}}
				</Formik>
			</Modal.Body>
			<Modal.Footer>

			</Modal.Footer>
		</Modal>
	);
}

