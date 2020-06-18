import React from 'react';
import Bag from '../../../hoc/Bag';
import Button from '../../UI/Button/Button';

const orderSummaty = (props) => {
const ingredientsSummary = Object.keys(props.ingredients).map(key => { 
                            return (
                                <li key={key}>
                                    <span style={{textTransform: 'capitalize'}} >{key}</span> : {props.ingredients[key]}
                                </li>
                            ); 
                        });
                                    

    return (
        <Bag>
            <h3>Seu pedido</h3>
            <p>Um delicioso hamburguer com os seguintes ingredientes</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Valor total: {props.price}</strong></p>
            <p>Fechar o pedido?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCELAR</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUAR</Button>
        </Bag>
    );
};

export default orderSummaty;