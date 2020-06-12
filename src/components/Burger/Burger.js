import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map( ig => {
        return [...Array(props.ingredients[ig])].map( (_, i) => {
            return <BurgerIngredient  type={ig} key={ig + i} />
        });
    }).reduce((arr,el) => {
        return arr.concat(el)
    }, []);

    //console.log(transformedIngredients);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Escolha seus ingredientes!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    );
};

export default burger;