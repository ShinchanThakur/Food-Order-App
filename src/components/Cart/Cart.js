import styles from './Cart.module.css';
import CartItem from "./CartItem";
import Card from '../UI/Card';

const Cart = props => {
    const cartItems = (
        <ul className={styles['cart-items']}>
            {props.cart.map((order) =>
                <CartItem
                    key={order.id}
                    price={order.price}
                    name={order.name}
                    amount={order.amount}
                    onRemove={() => { }}
                    onAdd={() => { }}
                />
            )}
        </ul>
    );

    return (
        <Card>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>36.62</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Card >
    )
}

export default Cart;