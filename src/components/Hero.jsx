import React from 'react'
import styles from './styles.module.css'


const Hero = (props) => {
    return (
        <div className={`${styles.hero} ${props.bg}`}>
            {props.children}
        </div>
    )
}

export default Hero
