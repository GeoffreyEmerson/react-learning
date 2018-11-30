import React from 'react';

import Aux from '../../hoc/AAux'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => (
    <Aux>
        <Toolbar></Toolbar>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;