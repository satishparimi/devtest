import React from 'react';
import classes from './LoginPage.css';


const signIn = () =>{

    return   alert('Logged in Sucessfully');
               
       
     

  
}

const LoginPage = (props) =>{


    return(
        <div >
            <div className={classes.LoginForm} >
                <p>Welcome to Demo Application</p><br/>
                <img src="https://img.icons8.com/cotton/64/000000/laptop-metrics.png" alt="Logo" /><br/>
                <input type="text"  placeholder="email@test.com"/>
                <br/>
                <input type="password" placeholder="password"/>
                <br/>
                <input type="button" onClick={signIn} value="SignIn">     
                </input>
            </div>
            <div className={classes.footer}>
            <h3>&copy; All rights Reserved 2018  </h3>
            </div>
            
            

        </div>
    );
}

export default LoginPage;