import React from 'react';
import styles from './Model.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const model = (props) => {
    return (
     <Aux>
         <Backdrop showSummary= {props.showSummary} clicked={props.modelClosed}/>
        <div 
        className={styles.Modal}
        style = {{
            transform: props.showSummary ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.showSummary ? '1' : '0'
        }}
        >
            {props.children}
        </div>
    </Aux>   
    );
}

export default model;