import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component 
{
  constructor(props) {
    super(props);
    this.state = { firstname: '', lastname: '', email: ''};
  }
  
  myChangeHandler = (event) => 
  {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  render() 
  {
    return (
      <form>

        <h1>CFL Form</h1>

      <p>First Name:</p>
      <input
        type='text'
        name = 'firstname'
        onChange={this.myChangeHandler}
      />

      <p>Middle name:</p>
      <input
        type='text'
        name = 'middlename'
      />

      <p>Last name:</p>
      <input
        type='text'
        name = 'lastname'
        onChange={this.myChangeHandler}
      />

      <p>Enter your age:</p>
      <input
        type='number'
        name='age'
      />

      <p>Address:</p>
      <input
        type='text'
      />

      <p>City:</p>
      <input
        type='text'
      />

      <p>State:</p>
      <input
        type='text'
      />

      <p>Zipcode:</p>
      <input
        type='number'
      />

      <p>Phone Number:</p>
      <input
        type='number'
        name = 'phonenumber'
      />

      <p>Email:</p>
      <input
        type='text'
        name='email'
        onChange={this.myChangeHandler}
      />


      <p> What is the best time to reach you? </p>
      <label name = 'reachtime' 
      onChange={this.myChangeHandler}> 
      
      <select value={this.state.value} onChange={this.handleChange}>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>

        </label>
        
      <br />
      <br />
      <br />
      <br />
      
      <p> <b> Hello, {this.state.firstname} {this.state.lastname}. Thank you for entering your information. 
      We'll reach you at {this.state.email} </b> </p>
      
      
      </form>
    	);
  }
}


ReactDOM.render(<MyForm />, document.getElementById('root'));




  
  





