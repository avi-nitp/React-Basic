import React from 'react';
import styles from './Controls.module.css';

const controls = (props) => {
    return (
         <div className={styles.Control}>
             <div className={styles.Label}>{props.ingredientType}</div>
             <button className={styles.More} onClick={props.added}>More</button>
             <button className={styles.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
         </div>
    );
}

export default controls;