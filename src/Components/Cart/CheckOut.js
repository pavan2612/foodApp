import { useRef } from 'react';
import { useState } from 'react';
import styles from './CheckOut.module.css';

const CheckOut = (props) => {
    const [formIsValid,setFormIsValid] = useState({
        name:true,
        street:true,
        code:true,
        city:true
    });

    const enteredNameRef = useRef() 
    const enteredStreetRef = useRef()
    const enteredCodeRef = useRef()
    const enteredCityRef = useRef()

    const submitHandler = (event) => {
            event.preventDefault()

        const enteredName = enteredNameRef.current.value
        const enteredStreet = enteredStreetRef.current.value
        const enteredCode = enteredCodeRef.current.value
        const enteredCity = enteredCityRef.current.value

        const nameValidity = enteredName.trim().length !== 0
        const streetValidity = enteredStreet.trim().length !== 0
        const codeValidity = enteredCode.trim().length === 6
        const cityValidity = enteredCity.trim().length !== 0

        setFormIsValid({
            name:nameValidity,
            street:streetValidity,
            code:codeValidity,
            city:cityValidity
        })
        let formIsValid = nameValidity && streetValidity && codeValidity && cityValidity
        if (!formIsValid){
            return
        }

        props.onConfirm({
            name:enteredName,
            street:enteredStreet,
            code:enteredCode,
            city:enteredCity
        })
    }

    
    const nameClassName = !formIsValid.name ? styles.invalid:''
    const streetClassName = !formIsValid.street ? styles.invalid:''
    const codeClassName = !formIsValid.code ? styles.invalid:''
    const cityClassName = !formIsValid.city ? styles.invalid:''

    return(
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={`${styles.control} ${nameClassName}`}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' ref={enteredNameRef}/>
                {!formIsValid.name && <p>Please enter valid name!</p>}
            </div>
            <div className={`${styles.control} ${streetClassName}`}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={enteredStreetRef}/>
                {!formIsValid.street && <p>Please enter valid street!</p>}
            </div>
            <div className={`${styles.control} ${codeClassName}`}>
                <label htmlFor='code'>Postal Code</label>
                <input type='text' id='code' ref={enteredCodeRef}/>
                {!formIsValid.code && <p>Please enter valid code of 6 digits!!</p>}
            </div>
            <div className={`${styles.control} ${cityClassName}`}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={enteredCityRef}/>
                {!formIsValid.city && <p>Please enter valid city!</p>}
            </div>
            <div className={styles.actions}>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button className={styles.submit}>Submit</button>
            </div>
        </form>
    )
} 
export default CheckOut