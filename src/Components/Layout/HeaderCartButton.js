import React, { useEffect, useState } from 'react'
import styles from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import { useContext } from 'react'
import CartContext from '../../Store/Cart-Context'

const HeaderCartButton = (props) => {
    const [buttonIsHighlighted,setButtonIsHighlighted] = useState(true)
    const cart = useContext(CartContext)
    const numberofItems = cart.items.reduce((total,item) => {
        return total+item.amount},0)
        
    let {items} = cart
    const btnClasses = `${styles.button} ${buttonIsHighlighted ? styles.bump:''}`

    useEffect(()=>{
        if(items.length===0){
            return
        }
        setButtonIsHighlighted(true)
        const timer = setTimeout(() => {
            setButtonIsHighlighted(false)
        },300)
        return () => {
            (clearTimeout(timer))
        }
    },[items])

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberofItems}</span>
        </button>
    )
}

export default HeaderCartButton