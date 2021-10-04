import React from 'react'
import styles from './styles.module.css'
import logo from '../assets/logo.png'

const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <img src={logo} alt="Logo" />
        </div>
    )
}

export default Navigation
