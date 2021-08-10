import React from 'react'
import styles from './styles.module.css'

const BottomTab = () => {
    return (
        <div className={styles.tab}>
            <div className={styles.topTab}>
                <div className={styles.circleBorder}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.text}>
                    <h2 className={styles.color}>Loan Prediction</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum</p>
                </div>
                <div style={{ float: "right", }}>
                    <div className={styles.circleBorder}>
                        <div className={styles.circle}></div>
                    </div>
                </div>

            </div>
            <div className={styles.bottomTab}>
                <p>Lotus Beta Analytics</p>
            </div>
        </div>
    )
}

export default BottomTab
