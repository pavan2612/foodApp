import React from 'react';
import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from '../../Store/Cart-Context';
import { useContext } from 'react';

const MealItem = (props) => {
    const cartCtx = useContext(CartContext)
    const addToCartHandler = (Amount) =>{ 
        cartCtx.addItems({
            id:props.id,
            name:props.name,
            amount:Amount,
            price:props.price
        })
    }
    return  (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <p className={styles.description}>{props.description}</p>
                <p className={styles.price}>${props.price.toFixed(2)}</p>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )
}
export default MealItem;
