import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerBuilderController from '../../components/Burger/BurgerBuilderController/BurgerBuilderController';
import {PRICE_LIST} from '../../Constants/Constant';
import Model from '../../components/UI/Model/Model';
import OrderSummary from '../../components/OrderSummary/OrderSummary';


class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        },
        totalPrice: 4,
        enableOrderButton: false,
        showOrderSummary: false
    }

    addIngredientHandler = (ingredientType) => {
        const oldIngredientCount = this.state.ingredients[ingredientType];
        const newIngredientCount = oldIngredientCount + 1;
        let updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[ingredientType] = newIngredientCount;
        const oldPrice =  this.state.totalPrice;
        const updatedPrice = oldPrice + PRICE_LIST[ingredientType];
        this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice});
        this.orderButtonToggler(updatedIngredients);
        console.log(updatedPrice + " " + oldPrice);
    }

    removeIngredientHandler = (ingredientType) => {
        const oldIngredientCount = this.state.ingredients[ingredientType];
        const newIngredientCount = oldIngredientCount>0 ? oldIngredientCount - 1 : 0;
        let updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[ingredientType] = newIngredientCount;
        const oldPrice =  this.state.totalPrice;
        const updatedPrice = oldIngredientCount>0 ? oldPrice - PRICE_LIST[ingredientType] : oldPrice;
        this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice});
        this.orderButtonToggler(updatedIngredients);
        console.log(updatedPrice + " " + oldPrice);
    }

    orderButtonToggler = (ingredients) => {
        let sumOfIngredients = 0;
        Object.values(ingredients).map((iKey) => {
             sumOfIngredients += iKey;
        });
        console.log("sum "+sumOfIngredients);
        this.setState({enableOrderButton: sumOfIngredients>0});
    }

    shouldShowOrderSummary = () => {
        this.setState({showOrderSummary: true});
    }

    cancelPurchaseHandler = () => {
        this.setState({showOrderSummary: false});
    }

    continuePurchaseHandler = () => {
        alert("Continue Ordering! We won't deliver");
    }

render() {
    const buttonDisabledInfo = {
        ...this.state.ingredients
    };
    for( let key in buttonDisabledInfo) {
         buttonDisabledInfo[key] = buttonDisabledInfo[key] <= 0
    }
    return (
        <Aux> 
        <Model showSummary= {this.state.showOrderSummary} modelClosed={this.cancelPurchaseHandler}>
            <OrderSummary 
            ingredients= {this.state.ingredients}
            orderCancelled ={this.cancelPurchaseHandler}
            orderContinue ={this.continuePurchaseHandler}
            totalPrice={this.state.totalPrice}
            />
        </Model>
        <Burger ingredients= {this.state.ingredients}/>
        <BurgerBuilderController 
        addIngredient= {this.addIngredientHandler}
        removeIngredient= {this.removeIngredientHandler}
        totalPrice = {this.state.totalPrice}
        buttonDisabledInfo= {buttonDisabledInfo}
        ingredients= {this.state.ingredients}
        enableOrderButton = {this.state.enableOrderButton}
        showOrderSummary= {this.shouldShowOrderSummary}
        />
        </Aux>
    );
}
}

export default BurgerBuilder;