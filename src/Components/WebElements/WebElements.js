import React from 'react';
import classes from './WebElements.css';

const webElements = () =>{

    return(
        <div className={classes.LoginForm}>
            <input type="text" placeholder="email@test.com"/>
            <br/>
            <input type="password" placeholder="password"/>
            <br/>
            <input type="submit" value="signin"/>
        </div>
    );
}

export default webElements;