import React from 'react';
import {NavLink} from 'react-router-dom';


const Navigation = () => {
    return(

        <div>
           <NavLink to="/" >Login</NavLink><br/>
           <NavLink to="/home" >Home</NavLink><br/>
           <NavLink to="/task" >Task Manager</NavLink>
           
        </div>
    );
};

export default Navigation;