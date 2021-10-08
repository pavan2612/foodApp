import React, { forwardRef } from 'react'
import styles from './Input.module.css'

const Input = forwardRef((props,ref) => {
    console.log(props.input.defaultValue)
    return(
        <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input}/>
        </div>
    )
})
export default Input