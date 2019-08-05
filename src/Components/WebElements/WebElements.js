import React from 'react';
import classes from './WebElements.css';

const webElements = (props) =>{

    return(
        <div className={classes.LoginForm}>
            <input type="text"  placeholder="email@test.com"/>
            <br/>
            <input type="password" placeholder="password"/>
            <br/>
            <input type="button" onClick={props.clicked} value="signin"/>
        </div>
    );
}

export default webElements;