import React from 'react';
import './App.css';

// import Form from './Form.js';
// import Table from './Table.js';

class App extends React.Component {
  // constructor() {
  //   super();

    // this.state = {
    //   username: '',
    //   email:"",
    //   phone:"",
    //   items: []
    // };
  //   this.state = {
  //     error: null,
  //     isLoaded: false,
  //     items: []
  //   };
  // };

    constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }


  // handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   let items = [...this.state.items];

  //   items.push({username: this.state.username, 
  //       email: this.state.email,
  //       phone: this.state.phone
  //   });

  //   this.setState({
  //     username: '',
  //     email: '',
  //     phone: '',
  //     items,
  //   });
  // };

  // handleInputChange = (e) => {
  //   let input = e.target;
  //   let name = e.target.name;
  //   let value = input.value;

  //   this.setState({
  //     [name]: value
  //   })
  // };


    componentDidMount() {
      var url="http://192.168.1.88:3013/shop";
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {

      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.name}>
                {item.name} {item.price}
              </li>
            ))}
          </ul>
        );
      }
    if(this.state.items.length<=0)
    {
      return (
      <div className="App">
        <Form handleFormSubmit={ this.handleFormSubmit } handleInputChange={ this.handleInputChange }/>
      </div>
    );
    }
    else
    {
      return (
      <div className="App">
        <Form handleFormSubmit={ this.handleFormSubmit } handleInputChange={ this.handleInputChange }/>
        <Table items={ this.state.items }/>
      </div>
    );
    }
  }
}
export default App;





import React from 'react';
import './App.css';
// import ReactBnbGallery from 'react-bnb-gallery'


// import Form from './Form.js';
// import Table from './Table.js';
import Basic from './Basic.js';

// const photos = [];
// var name="";

class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     error: null,
  //     isLoaded: false,
  //     items: []
  //   };
  //   this.state = { galleryOpened: false };
  //   this.toggleGallery = this.toggleGallery.bind(this);
  // }

  // toggleGallery() {
  //   this.setState(prevState => ({
  //     galleryOpened: !prevState.galleryOpened
  //   }));
  // }

  // componentWillMount() {
  //   fetch("http://192.168.1.88:3013/shop")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         result.forEach(function(item){
  //             name="http://192.168.1.88:3013/images/"+item.name;
  //             photos.push({
  //             photo:name,  
  //             caption: item.title,
  //             subcaption: item.description,
  //             thumbnail: name});
  //         });
  //         this.setState({
  //           isLoaded: true,
  //           items: result
  //         });
  //       },
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     )
  // }

  render() {

    return (
      <Basic />
    );
    // const { error, isLoaded, items } = this.state;
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
    //   if(isLoaded)
    //   {        
    //   return (
    //     <div>
    //     <button onClick={this.toggleGallery}>Open gallery</button>
    //       <ReactBnbGallery
    //         show={this.state.galleryOpened}
    //         photos={photos}
    //         onClose={this.toggleGallery} />
    //     </div>
    //   );
    //   }
    //   else
    //   {
    //     return <div>Loading...</div>;
    //   }
    // }
  }
}

export default App;

        // <form onSubmit={this.props.handleFormSubmit}>
        //   <label htmlFor="username">
        //   Username:</label>
        //   <input id="username"  type="text" name="username" onChange={this.props.handleInputChange} />
        //   <label htmlFor="email">
        //   Email:</label>
        //   <input id="email"  type="text" name="email" onChange={this.props.handleInputChange} />
        //   <label htmlFor="phone">
        //   Phonenumber:</label>
        //   <input id="phone"  type="text" name="phone" onChange={this.props.handleInputChange} />
        //   <br/>
        //   <button type="submit" value="Submit">Add</button>
        // </form>

  //==============================================================================

  //============================Form With Edit and Delete=========================



        // const { PureComponent } = React;

// class App extends PureComponent {
//    state = {
//       formState: {
//          id: '',
//          firstName: "",
//          lastName: "",
//          email: "",
//          mode: "submit"
//       },
//       users: [
//          {
//             id: 0,
//             firstName: "david",
//             lastName: "guerrero",
//             email: "david_xc3@hotmail.com",
//             updating: false
//          }
//       ]
//    };

//    resetFormState = () => {
//       this.setState({
//          formState: {
//             firstName: "",
//             lastName: "",
//             email: "",
//             mode: "submit",
//             id: ""
//          }
//       });
//    };

//    onChange = event => {
//       this.setState({
//          formState: {
//             ...this.state.formState,
//             [event.target.name]: event.target.value
//          }
//       });
//    };

//    onSubmit = event => {
//       const { users, formState } = this.state;
//       event.preventDefault();
//       const firstName = event.target.querySelector("input[name='firstName']")
//          .value;
//       const lastName = event.target.querySelector("input[name='lastName']")
//          .value;
//       const email = event.target.querySelector("input[name='email']").value;
//       if (formState.mode === "submit") {
//          this.setState({
//             users: [
//                ...this.state.users,
//                {
//                   firstName,
//                   lastName,
//                   email,
//                   updating: false,
//                   id: this.state.users[this.state.users.length - 1].id + 1
//                }
//             ]
//          });
//       } else if (formState.mode === "edit") {
//          const index = users.find((user)=> user.id === formState.id).id;
//          users[index] = {
//                   firstName,
//                   lastName,
//                   email,
//                   updating: false,
//                   id: users[index].id
//                }
//          this.setState({
//             users: [...users]
//          });
//       }

//       this.resetFormState();
//    };

//    updateUser = key => {
//       let { users } = this.state;
//       users[key].updating = true;

//       this.setState({
//          formState: { ...this.state.users[key], mode: "edit" },
//          users
//       });
//    };

//    deleteUser = key => {
//       let { users } = this.state;
//       users.splice(key, 1);
//       this.setState({
//          users: [...users]
//       });
//    };

//    render() {
//       const { users, formState } = this.state;
//       return (
//          <div>
//             <Form
//                formState={formState}
//                onChange={this.onChange}
//                onSubmit={this.onSubmit}
//             />
//             <Table
//                users={users}
//                updateUser={this.updateUser}
//                deleteUser={this.deleteUser}
//             />
//          </div>
//       );
//    }
// }

// const Table = ({ users = [], updateUser, deleteUser }) => {
//    return (
//       <div className="table">
//          <div className="table-header">
//             <div className="row">
//                <div className="column">First Name</div>
//                <div className="column">Last Name</div>
//                <div className="column">Email</div>
//                <div className="column">Options</div>
//             </div>
//          </div>
//          <div className="table-body">
//             {users.map((user, index) => {
//                return (
//                   <div key={index} className={`row ${user.updating ? "updating" : ""}`}>
//                      <div className="column">{user.firstName}</div>
//                      <div className="column">{user.lastName}</div>
//                      <div className="column">{user.email}</div>
//                      <div className="column">
//                         <button className="icon" className="fas fa-user-minus" onClick={() => updateUser(index)}
//                         >Edit
//                         </button>
//                         <button className="icon" className="fas fa-user-minus" onClick={() => deleteUser(index)}
//                            >Delete
//                         </button>
//                      </div>
//                   </div>
//                );
//             })}
//          </div>
//       </div>
//    );
// };

// const Field = ({ label = "", name = "", value = "", onChange }) => {
//    return (
//       <div className="field">
//          <label htmlFor={name}>{label}</label>
//          <input type="text" name={name} value={value} onChange={onChange} />
//       </div>
//    );
// };

// const Form = ({ formState, onChange, onSubmit }) => {
//    return (
//       <form className="form" onSubmit={onSubmit}>
//          <fieldset>
//             <Field
//                name="firstName"
//                label="user name"
//                value={formState.firstName}
//                onChange={onChange}
//             />
//             <Field
//                name="lastName"
//                label="last name"
//                value={formState.lastName}
//                onChange={onChange}
//             />
//             <Field
//                name="email"
//                label="email"
//                value={formState.email}
//                onChange={onChange}
//             />
//          </fieldset>
//          <button>{formState.mode}</button>
//       </form>
//    );
// };

// export default App;


{
  name: "sasiS", 
  email: "sasidharan@ndot.in", 
  mobile: "09488338868", 
  address: "notttt"
}

[{…}]0: {name: "sasiS", email: "sasidharan@ndot.in", mobile: "09488338868", address: "notttt"}length: 1__proto__: Array(0)



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
        fields="";
        console.log(this.state.fields);
      });
    }
  }

  handleChange(field, e){ 
    fields = this.state.fields;
    fields[field] = e.target.value;
  }

  import ReactBnbGallery from 'react-bnb-gallery'


import Forms from './Forms.js';
import Table from './Table.js';
import Basic from './Basic.js';

const photos = [];
var name="";


google api key : AIzaSyChHlib_knJSiO4c0_xMbo3WGN_lCx6Xdo

Q_auth_client_id : 59228241162-eu4qacr8vssdnhga69e4hh9la35pfrpg.apps.googleusercontent.com

secrect key : jrJFvoDC_RQOsRa5XKSKpWqV

    else
    {
      return (
      <div className="center">         
        <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
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
    )
    }
    
api_requested_data = { '{"name":"sasi","email":"sasidharan@ndot.in","mobile":"09488338868","address":"notttt"}': '' };
