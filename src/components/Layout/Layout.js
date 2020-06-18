import React from 'react'
import Bag from '../../hoc/Bag';
import classes from './Layout.module.css';
import Toobar from '../Naviagation/Toolbar/Toolbar';

const layout = (props) => (
    <Bag>
        <Toobar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Bag>
);

export default layout;