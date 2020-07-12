import React, { useState } from 'react'

import Bag from '../../hoc/Bag';
import Burger from '../../components/Burger/Burger';
import BuilcControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const BurgerBuilder = (props) => {     

    const [ingredients, setIngredients] = useState({
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0 
    });
    const [price, setPrice] = useState(4);
    const [purchasable, setPurchasable] = useState(false);
    const [purchasing, setPurchasing] = useState(false);

    const updatePurchaseState = (newIngred) => {

        const sum = Object.keys(newIngred)
            .map(key =>  newIngred[key])
            .reduce( (acc, i) => acc + i ,0);
        
            setPurchasable(sum > 0);
    }

    const addIngredientHandler = (type) => {
        const oldCount = ingredients[type];
        const updatedCount = oldCount + 1;

        setIngredients({
            ...ingredients,
            [type]: updatedCount
        });

        const priceAddition = INGREDIENT_PRICES[type];
        setPrice(prevState => prevState + priceAddition);
        updatePurchaseState({
            ...ingredients,
            [type]: updatedCount
        });
    }

    const removeIngredientHandler = (type) => {
        const oldCount = ingredients[type];

        if(oldCount <=0) { return; }

        const updatedCount = oldCount - 1;

        setIngredients({
            ...ingredients,
            [type]: updatedCount
        });

        const priceDeduction = INGREDIENT_PRICES[type];
        setPrice(prevState => prevState - priceDeduction);
        updatePurchaseState({
            ...ingredients,
            [type]: updatedCount
        });
    }


    const purchaseHandler = () => {
        setPurchasing(true);
    }   

    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }

    const purchaseContinueHandler = () => {
        //alert('You got it!');
        const order = {
            ingredients: ingredients,
            price: price,
            customer: {
                name: 'Kuka',
                address: {
                    street: 'Av. Copacabana',
                    zipCode: '91900-050',
                    country: 'Brasil'
                },
                email: 'ronaldo.bicca@gmail.com'
            },
            deliveryMethod: 'fastest'
        };

        axios.post('/orders.json', order)
                .then(response => console.log(response))
                .catch(error => console.log(error));
    }

    const disabledInfo = {
        ...ingredients
    };
    for(let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
    <Bag>
        <Modal show={purchasing} modalClosed={purchaseCancelHandler} >
            <OrderSummary
                price={price.toFixed(2)}
                purchaseCancelled = {purchaseCancelHandler}
                purchaseContinued={purchaseContinueHandler}
                ingredients={ingredients} />
        </Modal>    
        <Burger ingredients={ingredients}/>
        <BuilcControls 
            ingredientAdded={addIngredientHandler} 
            ingredientRemoved={removeIngredientHandler} 
            disabled={disabledInfo} 
            purchasable={purchasable}
            ordered={purchaseHandler}
            price={price.toFixed(2)}  />
    </Bag>
    );
}

export default BurgerBuilder;