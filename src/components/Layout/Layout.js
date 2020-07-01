import React, { useState } from 'react'
import Bag from '../../hoc/Bag';
import classes from './Layout.module.css';
import Toobar from '../Naviagation/Toolbar/Toolbar';
import SideDrawer from '../Naviagation/SideDrawer/SideDrawer';

const layout = (props) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showSideDrawer, setShowSideDrawer] = useState(true);

    const sideDrawerClosedHandler = () =>{
        setShowSideDrawer(false);
    }

    const sideDrawerToggleHandler = () => {
        console.log('oi');
        setShowSideDrawer(!showSideDrawer);
    }

    return(
            <Bag>
                <Toobar drawerToggleClicked={sideDrawerToggleHandler}/>
                <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {props.children}
                </main>
            </Bag>      
    );
}

export default layout;