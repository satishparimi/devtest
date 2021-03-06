import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class SelectDate extends Component {

    constructor(props) {
        super(props);
        this.state = {
          startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
      }
     
      handleChange(date) {
        this.setState({
          startDate: date
        });
      }

      getStartDate = () =>{

        return this.state.startDate;
      }
     
      render() {
        return (
           <div>
             <div>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                
                />
            </div>
            
            </div>
        );
      }
}

export default SelectDate;