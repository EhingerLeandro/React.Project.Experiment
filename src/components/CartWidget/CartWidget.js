import cart from '../CartWidget/assets/carrito.png';
import styles from './Cart.module.css';

const Cart = () => {
    return (
        <div className='cartWidget'>
            <img className={styles.cart} src={cart} alt='cart'/>
            <span>Cantidad(0)</span>
        </div>
    )
}
export default Cart;