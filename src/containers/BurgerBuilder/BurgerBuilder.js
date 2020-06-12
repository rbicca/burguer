import React, { useState } from 'react'

import Bag from '../../hoc/Bag';
import Burger from '../../components/Burger/Burger';
import BuilcControls from '../../components/Burger/BuildControls/BuildControls';

const BurgerBuilder = (props) => { 

    const [ingredients, setIngredients] = useState({
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0 
    });

    return (
    <Bag>
        <Burger ingredients={ingredients}/>
        <BuilcControls />
    </Bag>
    );
}

export default BurgerBuilder;