import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>Remover</button>
        <button className={classes.More}>Adicionar</button>
    </div>
);

export default buildControl;