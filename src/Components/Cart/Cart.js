import styles from './Cart.module.css';
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import CartContext from '../../Store/Cart-Context';
import { useContext } from 'react';

const Cart = (props) => {
    const CartCtx = useContext(CartContext)

    const totalAmount = `$${CartCtx.totalAmount.toFixed(2)}`
    const hasItems = CartCtx.items.length>0

    const CartItemAddHandler = (item) => {
        CartCtx.addItems({...item,amount:1})
    }
    const CartItemRemoveHandler = (id) => {
        CartCtx.removeItems(id)
    }

    const cartItems = (
        <ul className={styles['cart-items']}>
            {CartCtx.items.map((item)=> (
            <CartItem 
            key={item.id}
            price={item.price}
            name = {item.name}
            amount = {item.amount}
            onAdd = {CartItemAddHandler.bind(null,item)}
            onRemove = {CartItemRemoveHandler.bind(null,item.id)}
        />
        ))}</ul>
    )

    return(
        <Modal onClick={props.onClose}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={styles.button}>Order</button> }
            </div>
        </Modal>
    )
}
export default Cart