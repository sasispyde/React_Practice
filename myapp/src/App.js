// import React from 'react';
// import './App.css';
// import Forms from './Forms.js';
// import Login from './Gmail_login.js'


// class App extends React.Component {

// render() {
//     return(
//       <div className="App">
//         <Login/>
//         <Forms/>
//       </div>
//     );
//   }
// }

// export default App;
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import './App.css'

class App extends Component {

	constructor(props)
	{
		super(props);
		this.state={
			isLoggedin : false
		}
	}

  handleLogin = (e) =>
  {
  	this.setState({
  		isLoggedin : true
  	});
  }

  render() {
    return (
    <div>
    { !this.state.isLoggedin && 
    	<Login handleLogin={ this.handleLogin} />
    }
    { 
    this.state.isLoggedin &&
    <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
          	<li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
  	}
  	</div>
    );
  }
}

export default App;

