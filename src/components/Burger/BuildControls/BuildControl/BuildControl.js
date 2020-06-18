import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.removed} disabled={props.disabled} >Remover</button>
        <button className={classes.More} onClick={props.added} >Adicionar</button>
    </div>
);

export default buildControl;

//https://daveceddia.com/usestate-hook-examples/