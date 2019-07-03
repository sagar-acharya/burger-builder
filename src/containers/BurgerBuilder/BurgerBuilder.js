import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    cheese:0.5,
    salad:0.4,
    bacon:1.3,
    meat:0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            cheese:0,
            salad:0,
            bacon:0,
            meat:0
        },
        totalPrice: 4,
        purchasable: false
    }

    updatePurcahseState (ingredients) {
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey]
        })
        .reduce((sum,el) => {
            return sum + el;
        },0);

        this.setState({purchasable: sum});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updatedIngredient = { ...this.state.ingredients };
        updatedIngredient[type] = updateCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENT_PRICES[type];
        this.setState({totalPrice: newPrice, ingredients: updatedIngredient});
        this.updatePurcahseState(updatedIngredient);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) {
            return;
        }
        const updateCount = oldCount - 1;
        const updatedIngredient = { ...this.state.ingredients };
        updatedIngredient[type] = updateCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - INGREDIENT_PRICES[type];
        this.setState({totalPrice: newPrice, ingredients: updatedIngredient});
        this.updatePurcahseState(updatedIngredient);
    }

    render() {
        let disabledIngredients = { ...this.state.ingredients };
        for(let key in disabledIngredients) {
            disabledIngredients[key] = disabledIngredients[key] <= 0;
        }
        return (
            <Aux>
                <Burger ingredients={ this.state.ingredients } />
                <BuildControls 
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledIngredients}
                price={this.state.totalPrice}
                purchasable={this.state.purchasable}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;