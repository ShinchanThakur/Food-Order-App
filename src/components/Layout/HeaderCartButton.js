import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useState } from 'react';

const HeaderCartButton = props => {
    const [numberOfCartItems, setNumberOfCartItems] = useState(0);
    return (
        <button className={styles.button} onClick={props.onShowCart}>
            <span className={styles.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;