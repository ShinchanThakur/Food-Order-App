import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Backdrop = props => {
    return (
        <div className={styles.backdrop} onClick={props.onClose} />
    )
}

const ModalOverlay = props => {
    return (
        <div className={styles.modal}>
            {props.children}
        </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal = props => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    )
}

export default Modal;