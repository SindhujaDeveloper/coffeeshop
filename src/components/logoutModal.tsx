import { Modal } from 'react-bootstrap';
import '../assets/css/modal.scss';
// import logout from '../assets/images/logoutIcon.png';

interface ILogoutModal {
	show: boolean;
	onLogout: () => void;
	closeAlert: () => void;
}

export const LogoutModal = ({ show, closeAlert, onLogout }: ILogoutModal) => {
	return (
		<Modal
			show={show}
			aria-labelledby="contained-modal-title"
			centered
		>
			<Modal.Body>
				{/* <div className='logoutIcon'>
					<img src={logout} alt='confirm' width={'100px'} />
				</div> */}
				<section className='modalMsg'>
					Are you Sure want to logout from this app?
				</section>
			</Modal.Body>
			<Modal.Footer>
				<div className='btnMain'>
					<button onClick={closeAlert} className='modalBtn'>
						CANCEL
					</button>
					<button onClick={onLogout} className='modalBtn'>
						LOGOUT
					</button>
				</div>
			</Modal.Footer>
		</Modal>
	);
}

