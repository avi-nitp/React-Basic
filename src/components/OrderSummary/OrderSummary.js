import React from 'react';
import {PRICE_LIST} from '../../Constants/Constant';
import OrderedIngredient from './OrderedIngredient';
import Button from '../UI/Button/Button';

const orderSummary = (props) => {

    let orderedIngredients = [];
    for (const [key, value] of Object.entries(props.ingredients)) {
         if(`${value}` > 0) {
             orderedIngredients.push(
                 <li>
                    <OrderedIngredient 
                    key={`${key}`.concat('_').concat(`${value}`)}
                    type={`${key}`} 
                    ingredientCount={`${value}`} 
                    ingredientPrice={(PRICE_LIST[`${key}`] * `${value}`).toFixed(2)}
             />
             </li>
             );
         }
    }
    return (
        <div>
            <p>Your tasty burger will contain:</p>
           <ul>
             {orderedIngredients}
           </ul>
           <p><strong>Total Price:{props.totalPrice.toFixed(2)}</strong></p>
           <p>Do you want to continue?</p>
           <Button btnType="Success" clicked={props.orderContinue}>CONTINUE</Button>
           <Button btnType="Danger" clicked={props.orderCancelled}>CANCEL</Button>
        </div>
    );
}

export default orderSummary;