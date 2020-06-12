import React from 'react';
import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.module.css';

const controls = [
    { label: 'Salada', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Queijo', type: 'cheese'},
    { label: 'Carne', type: 'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label} />
        ))}
    </div>
);



export default buildControls;