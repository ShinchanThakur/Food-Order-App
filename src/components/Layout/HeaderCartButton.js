import React, { useEffect, useState } from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = props => {
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
    const cartCtx = React.useContext(CartContext);
    const { items } = cartCtx;
    const numberOfCartItems = items.reduce((currAmount, item) => {
        return currAmount + item.amount;
    }, 0)
    useEffect(() => {
        if (items.length === 0)
            return;
        setButtonIsHighlighted(true);
        const timer = setTimeout(() => {
            setButtonIsHighlighted(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        };
    }, [items])
    const buttonClassName = `${styles.button} ${buttonIsHighlighted ? styles.bump : ''}`;
    return (
        <button className={buttonClassName} onClick={props.onShowCart}>
            <span className={styles.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;