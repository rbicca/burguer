import React from 'react'
import Bag from '../../hoc/Bag';
import classes from './Layout.module.css';

const layout = (props) => (
    <Bag>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Bag>
);

export default layout;