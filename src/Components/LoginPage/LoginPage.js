import React from 'react';
import classes from './LoginPage.css';

const webElements = (props) =>{

    return(
        <div className={classes.LoginForm}>
            <p>Welcome to Demo Application</p><br/>
            <img src="https://img.icons8.com/cotton/64/000000/laptop-metrics.png" alt="Logo" /><br/>
            <input type="text"  placeholder="email@test.com"/>
            <br/>
            <input type="password" placeholder="password"/>
            <br/>
            <input type="button" onClick={props.clicked} value="signin"/>
        </div>
    );
}

export default webElements;