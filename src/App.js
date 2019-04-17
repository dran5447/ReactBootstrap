import React, { Component } from 'react';
import './App.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Register from './Register';
import Todo from './Todo';
import Home from './Home';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>React App</h1>
        </header>
        <body>
          <Tabs defaultActiveKey="home" id="tab-content">
            <Tab eventKey="home" title="Home">
              <Home />
            </Tab>
            <Tab eventKey="todo" title="Todo">
              <Todo />
            </Tab>
            <Tab eventKey="register" title="Register">
              <Register />
            </Tab>
          </Tabs>
        </body>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"/>
      </div>
    );
  }
}

export default App;
