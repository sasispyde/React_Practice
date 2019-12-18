import React, { Component } from 'react';
import './App.css';
import Loginform from './Login_form.js';

var field = [];
class Login extends Component {

	// constructor(props){
	//     super(props);
	//     this.state = {
	//       fields: [],
	//       errors: {}
	//     }
	// }

	// contactSubmit(e)
	// {
	//     e.preventDefault();
	//     if(this.handleValidation()){
	//       let data={
	//         "name":field['name'],
	//         "password":field['password']
	//       };
	//       this.setState({
	//         fields:data,
	//         errors:""
	//       },() => {
	//       	console.log(this.state.errors);
	//       	console.log(this.state.fields);
	//       });
	//     }
	// }

	// handleChange(fieldss, e){ 
	//     field[fieldss] = e.target.value;
	//     this.setState({
	//     	fields:field
	//     });
	// }

	// handleValidation(){
	//     field = this.state.fields;
	//     let errors = {};
	//     let formIsValid = true;

	//     //Name
	//     if(!field["name"]){
	//       formIsValid = false;
	//       errors["name"] = "Please Enter the Name";
	//     }
	//     if(typeof field["name"] !== "undefined"){
	//       if(!field["name"].match(/^[a-zA-Z]+$/)){
	//         formIsValid = false;
	//         errors["name"] = "Only letters Are Allowed";
	//       }       
	//     }
	//     //Password
	//     if(!field["password"]){
	//       formIsValid = false;
	//       errors["password"] = "Please Enter the password";
	//     }
	//     if(typeof field["password"] !== "undefined"){
	//       if(!field["password"].match(/^[0,9]+$/)){
	//         formIsValid = false;
	//         errors["password"] = "Only letters Are Allowed";
	//       }       
	//     }
	// 	this.setState({errors: errors});
	//     return formIsValid;
	// }

  render() {
    return (
        <div>
          <div className="border">
          	<button className="login" onClick={this.props.handleLogin}>Login</button>
          </div>
          <h3>Login Page</h3>
          <Loginform />
        </div>
    );
  }
}

export default Login;