import React from 'react';

const orderedIngredient = (props) => {
     return (
         <div>
             <p><strong>{props.type}: {props.ingredientCount}</strong></p>
         </div>
     );
}

export default orderedIngredient;