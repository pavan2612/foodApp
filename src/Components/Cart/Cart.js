import styles from './Cart.module.css';
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import CartContext from '../../Store/Cart-Context';
import { useContext } from 'react';
import CheckOut from './CheckOut';
import { Fragment, useState } from 'react';

const Cart = (props) => {
    const [isCheckOut ,setIsCheckOut] = useState(false);
    const [isSubmit,setIsSubmit] = useState(false)
    const [hadSubmit,setHadSubmit] =useState(false)
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

    const oncheckHandler = () => {
        setIsCheckOut(true)
    }

    const submitData = (userData) => {
        setIsSubmit(true)
        fetch('https://practicereact-755c2-default-rtdb.firebaseio.com/usersData.json',{
            method:'POST',
            body : JSON.stringify({
                user:userData,
                items: CartCtx.items
            })
        })
        setIsSubmit(false)
        setHadSubmit(true)
        CartCtx.clearItems()
    }

    return(
        <Modal onClick={props.onClose}>
            {!isSubmit && hadSubmit && 
            <Fragment>
                <div className={styles.actions}>
                        <button type='button' className={styles['button--alt']} onClick={props.onClose}>Close</button>
                </div>
            </Fragment>
            }
            {isSubmit && <p>Successfully ordered. We will connect you shortly!!</p>}
            {!isSubmit&& !hadSubmit &&
            <Fragment>
                {cartItems}
                <div className={styles.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
                {isCheckOut && <CheckOut onConfirm={submitData} onCancel={props.onClose}/>}
                {!isCheckOut &&
                <div className={styles.actions}>
                    <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
                    {hasItems && <button className={styles.button} onClick={oncheckHandler}>Order</button> }
                </div>
                }
            </Fragment>
            }
        </Modal>
    )
}
export default Cart