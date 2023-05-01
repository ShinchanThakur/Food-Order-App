import styles from './Cart.module.css';
import CartItem from "./CartItem";
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const Cart = props => {
    const cartCtx = useContext(CartContext);
    let totalAmountNumber = cartCtx.totalAmount;
    if (totalAmountNumber < 0)
        totalAmountNumber = 0;
    const totalAmount = `$${totalAmountNumber.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    const cartItemAddHandler = item => {
        cartCtx.addItem({ ...item, amount: 1 });
    }
    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    }
    const cartItems = (
        <ul className={styles['cart-items']}>
            {cartCtx.items.map((item) => {
                return <CartItem
                    key={item.id}
                    price={item.price}
                    name={item.name}
                    amount={item.amount}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            }
            )}
        </ul>
    );

    return (
        <Modal onClose={props.onHideCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;