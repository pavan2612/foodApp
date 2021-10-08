import styles from './Cart.module.css';
import Modal from '../UI/Modal'

const Cart = (props) => {
    return(
        <Modal onClick={props.onClose}>
            <div></div>
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>65</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    )
}
export default Cart