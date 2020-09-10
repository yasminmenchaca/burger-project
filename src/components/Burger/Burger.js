import React from 'react';

import classes from './Burger.css';
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                <BurgerIngredients key={igKey + i} type={igKey}/>;
            });
        });
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type='bread-top'/>
            <BurgerIngredients type='cheese'/>
            <BurgerIngredients type='meat'/>
            <BurgerIngredients type='bread-bottom'/>
        </div>
    );
}

export default burger;