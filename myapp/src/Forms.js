import React from 'react';
import './App.css';
import Table from './Table.js';


var fields;
class Froms extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      fields: [],
      errors: {}
    }
  }

  contactSubmit(e){
    e.preventDefault();
    if(this.handleValidation()){
      let data={
        "name":fields['name'],
        'email':fields['email'],
        'mobile':fields['phone'],
        'address':fields['address']
      };
      let items = [...this.state.fields];
      items.push(data);
      this.setState({
        fields:items,
        errors:""
      },() => {
      		fetch('http://192.168.1.88:3014/testing', {
      		    method: 'post',
      		    // mode: 'no-cors',
      		    body: JSON.stringify(data),
              headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
              }
      		  }).then(res => res.json()).then(
                (result) => {
                  console.log(result);
                  // var error={};
                  // error["phone"]=result.error;
                  // this.setState({
                  //   errors:error
                  // })
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                  console.log(error);
                }
            )
      		 	.catch(function (error) {
      		    	console.log('Request failed', error);
      		});     	
      });
    }
  }

  handleChange(field, e){ 
    fields = this.state.fields;
    fields[field] = e.target.value;
  }

  handleValidation(){
    fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if(!fields["name"]){
      formIsValid = false;
      errors["name"] = "Please Enter the Name";
    }

    if(typeof fields["name"] !== "undefined"){
      if(!fields["name"].match(/^[a-zA-Z]+$/)){
        formIsValid = false;
        errors["name"] = "Only letters Are Allowed";
      }       
    }

    if(!fields["phone"]){
      formIsValid = false;
      errors["phone"] = "Please Enter The Phone Number";
    }

    if(typeof fields["phone"] !== "undefined"){
      if(!fields["phone"].match(/[1-9]/g)){
        formIsValid = false;
        errors["phone"] = "Only Numbers Are Allowed";
      }       
    }

    if(!fields["address"]){
      formIsValid = false;
      errors["address"] = "Please Enter The Address";
    }

    //Email
    if(!fields["email"]){
      formIsValid = false;
      errors["email"] = "Please Enter Your Email Id";
    }

    if(typeof fields["email"] !== "undefined"){
      let lastAtPos = fields["email"].lastIndexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  render(){
      return (
      <div>
      <div className="center">         
        <form name="contactform" id="details_form" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
          <div className="col-md-6">
            <fieldset>
              <input ref="name" type="text" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "name")} />
              <p className="error">{this.state.errors["name"]}</p>
              <input refs="email" type="text" size="30" placeholder="Email" onChange={this.handleChange.bind(this, "email")} />
              <p className="error">{this.state.errors["email"]}</p>
              <input refs="phone" type="text" size="30" placeholder="Phone" onChange={this.handleChange.bind(this, "phone")} />
              <p className="error">{this.state.errors["phone"]}</p>
              <input refs="address" type="text" size="30" placeholder="Address" onChange={this.handleChange.bind(this, "address")} />
              <p className="error">{this.state.errors["address"]}</p>
              <input type="submit" className="button button1" value="Submit" />
            </fieldset>
          </div>
        </form>
      </div>
      { 
      this.state.fields.length>0 &&
      <div>
        <Table items={ this.state.fields }/>
      </div>
      }
      </div>
    )
  }
}

export default Froms;