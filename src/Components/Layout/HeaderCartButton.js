import React from 'react'
import styles from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import { useContext } from 'react'
import CartContext from '../../Store/Cart-Context'

const HeaderCartButton = (props) => {
    const cart = useContext(CartContext)
//    const numberOfItems = cart.items.reduce(() => {return },0)

    return (
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>3</span>
        </button>
    )
}

export default HeaderCartButton