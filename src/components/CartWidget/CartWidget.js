import cart from '../CartWidget/assets/carrito.png';
import styles from './Cart.module.css';

const Cart = () => {
    return (
        <div>
            <img class={styles.cart} src={cart} alt='cart'/>
            <span>Cantidad (0)</span>
        </div>
    )
}
export default Cart;