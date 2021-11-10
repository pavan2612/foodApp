import mealsImage from '../../assets/meals.jpg'
import styles from './Header.module.css'
import React from 'react'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
    return(
        <React.Fragment>
            <header className={styles.header}>
                <p>PM Meals</p>
                <HeaderCartButton onClick={props.onClick}/>
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt='A table full of delicious food!!'/>
            </div>
        </React.Fragment>
    )
}
export default Header