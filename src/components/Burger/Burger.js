import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.css';

const burger = ( props ) => {
    const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,igValue) => {
            return <BurgerIngredient key={ igKey + igValue } type={ igKey } />
        });
    });
    return (
        <div className={ classes.Burger }>
            <BurgerIngredient type="bread-top" />
            {/* <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="salad" />
            <BurgerIngredient type="bacon" /> */}
            { transformedIngredients }
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;