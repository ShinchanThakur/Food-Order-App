import React from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = props => {
    const cartCtx = React.useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((currAmount, item) => {
        return currAmount + item.amount;
    }, 0)
    return (
        <button className={styles.button} onClick={props.onShowCart}>
            <span className={styles.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;