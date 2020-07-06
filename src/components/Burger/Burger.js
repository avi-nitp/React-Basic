import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styles from './Burger.module.css';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(iKey=> {
         return [...Array(props.ingredients[iKey])].map((_, i)=>{
             return <BurgerIngredient key= {iKey + i} type ={iKey}/>;
         })
    })
    .reduce((arr, el)=>{
        return arr.concat(el);
   },[]);

   if(transformedIngredients.length === 0) {
       transformedIngredients = <p>Please add some Ingredients</p>;
   }
    return (
       <div className={styles.Burger}>
           <BurgerIngredient type='bread-top'/>
           {transformedIngredients}
           <BurgerIngredient type='bread-bottom'/>
        </div>
    );
}

export default burger;