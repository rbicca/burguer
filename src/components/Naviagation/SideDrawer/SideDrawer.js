import React from 'react';
import classes from './SideDrawer.module.css';

import Logo from '../../Logo/Logo';
import NavItems from '../NavItens/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Bag from '../../../hoc/Bag';

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Bag>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <Logo height="11%"/>
                <nav>
                    <NavItems />
                </nav>
            </div>
        </Bag>
    );
}

export default sideDrawer;