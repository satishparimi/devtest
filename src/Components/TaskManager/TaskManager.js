import React,{Component} from 'react';

import classes from '../TaskManager/TaskManager.css';
import 'react-datepicker/dist/react-datepicker.css';
import SelectDate from './SelectDate';


class TaskManager extends Component {

    constructor(props) {
        super(props);

        this.state ={
            email: '',
            Password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
      };
      

      handleSubmit(e) {
        //alert('The values are ' + this.email.value);
        alert(`eamil is ${this.email.value} and password is ${this.password.value}`)

        e.preventDefault();
        
      }

      formHandler = () =>{
        alert('leave request sumitted sucessfully!!');
      }
    
      render () {
        return (
            <div >
                <hr/>
               <form className={classes.leaveform}>   
               <div>
                   <h4>Start Date</h4>
                   <SelectDate/>
                   <h4>End Date</h4>
                   <SelectDate/><br/>
                   <textarea className={classes.Textarea} placeholder="description"></textarea><br/>
                   <input type="submit" onClick={this.formHandler}/>
               </div>   
                 
            </form>            
                
          </div>
        );        
      }
    }
export default TaskManager;