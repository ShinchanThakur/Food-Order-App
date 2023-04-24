import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Backdrop = _ => {
    return (
        <div className={styles.backdrop} />
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
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    )
}

export default Modal;