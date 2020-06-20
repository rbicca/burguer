import React from 'react';
import classes from './NavItens.module.css';
import NavItem from  './NavItem/NavItem'

const navItens = (props) => (
    <ul className={classes.NavigationItems}>
        <NavItem link="/" active>Monte o seu</NavItem>
        <NavItem link="/">Pagar</NavItem>
    </ul>
);

export default navItens;