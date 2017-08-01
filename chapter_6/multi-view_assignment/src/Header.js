import React, { Component } from 'react';
import {Link} from 'react-router';
import logo from './logo.svg';
import './App.css';


//swtch from seeing home and about 
class Header extends Component {
  constructor() {
    super();
    
  }

  render() {


    return (
      <div>
        <div className="App">
            <nav>
                <Link to="/to-do"> To-do App </Link>
                <Link to="/about"> About </Link>
            </nav>
        </div>
        <div>
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default Header;
