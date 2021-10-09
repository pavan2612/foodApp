import styles from './MealItemForm.module.css';
import Input from '../UI/Input';
import { useRef, useState } from 'react';

const MealItemForm = (props) => {
    const [enteredAmountState,SetenteredAmountState] = useState(true)
    const amountInputRef = useRef() 
    
    const submitHandler = (event) => {
        event.preventDefault()

    const enteredAmount =  amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount
    
    if(enteredAmountNumber < 1 || enteredAmount.trim().length===0){
        SetenteredAmountState(false)
        return
    }
    props.onAddToCart(enteredAmountNumber)
    }
    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input 
            label='Amount' 
            ref={amountInputRef}
            input={{
                type:'number',
                id: 'amount_'+ props.id,
                min:'1',
                step:'1',
                defaultValue:'1',
                numberOfItems:{}
            }}/>
            <button>+ Add</button>
            {!enteredAmountState && <p>Enter amount greater than 1</p>}
        </form>
        )
}
export default MealItemForm