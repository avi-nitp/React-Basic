import React from 'react';
import Controls from './Controls';
import styles from './BurgerBuilderController.module.css';
import cssStyle from './OrderButton.module.css';

const burgerBuilderController = (props) => {

    const allIngredients = [
        {label: 'Salad', type: 'salad'},
        {label: 'Meat', type: 'meat'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Cheese', type: 'cheese'}
    ];

    return (
        <div className={styles.BurgerController}>
            <p>Current Price <strong>{props.totalPrice.toFixed(2)}</strong></p>
            {allIngredients.map((elm) => (
                <Controls
                key = {elm.label}
                ingredientType= {elm.label}
                added= {() => props.addIngredient(elm.type)}
                removed= {() => props.removeIngredient(elm.type)}
                disabled = {props.buttonDisabledInfo[elm.type]}
                />
    ))}
    <button 
    className={cssStyle.OrderButton} 
    onClick={props.showOrderSummary} 
    disabled = {!props.enableOrderButton}
    >ORDER NOW
    </button>
        </div>
    );
}

export default burgerBuilderController;