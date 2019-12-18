import React from 'react';
import './App.css';
var field = [];
class Login_form extends React.Component
{
	constructor(props){
	    super(props);
	    this.state = {
	      fields: [],
	      errors: {}
	    }
	}

	contactSubmit(e)
	{
	    e.preventDefault();
	    if(this.handleValidation()){
	      let data={
	        "name":field['name'],
	        "password":field['password']
	      };
	      this.setState({
	        fields:data,
	        errors:""
	      },() => {
	      	console.log(this.state.errors);
	      	console.log(this.state.fields);
	      });
	    }
	}

	handleChange(fieldss, e){ 
	    field[fieldss] = e.target.value;
	    this.setState({
	    	fields:field
	    });
	}

	handleValidation(){
	    field = this.state.fields;
	    let errors = {};
	    let formIsValid = true;

	    //Name
	    if(!field["name"]){
	      formIsValid = false;
	      errors["name"] = "Please Enter the Name";
	    }
	    if(typeof field["name"] !== "undefined"){
	      if(!field["name"].match(/^[a-zA-Z]+$/)){
	        formIsValid = false;
	        errors["name"] = "Only letters Are Allowed";
	      }       
	    }
	    //Password
	    if(!field["password"]){
	      formIsValid = false;
	      errors["password"] = "Please Enter the password";
	    }
	    if(typeof field["password"] !== "undefined"){
	      if(!field["password"].match(/^[0,9]+$/)){
	        formIsValid = false;
	        errors["password"] = "Only letters Are Allowed";
	      }       
	    }
		this.setState({errors: errors});
	    return formIsValid;
	}

	render()
	{
		return(
		<div>
	      <div className="center">         
	        <form name="contactform" id="details_form" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
	          <div className="col-md-6">
	            <fieldset>
	              <input ref="name" type="text" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "name")} />
	              <p className="error">{this.state.errors["name"]}</p>
	              <input refs="password" type="text" size="30" placeholder="password" onChange={this.handleChange.bind(this, "password")} />
	              <p className="error">{this.state.errors["password"]}</p>
	              <input type="submit" className="button button1" value="Login" />
	            </fieldset>
	          </div>
	        </form>
	      </div>
	     </div>
		);
	}
} 

export default Login_form;