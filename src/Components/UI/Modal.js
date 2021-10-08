import styles from './Modal.module.css'
import ReactDOM from 'react-dom'
import React from 'react'

const BackDrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClick}/>
}

const ModalOverlay = (props) => {
    return <div className={styles.modal}>
        <div className={styles.content}>
            {props.children}
        </div>
    </div>
}

const Modal = (props) => {
    return(
    <React.Fragment>
        {ReactDOM.createPortal(<BackDrop onClick={props.onClick}/>,document.getElementById("overLays"))}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,document.getElementById("overLays"))}
    </React.Fragment>
    )

}
export default Modal