import React, { Component } from 'react';
import svg from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'React',
      lastName: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({firstName: event.target.value});
    this.setState({lastName: event.target.value});
  }

  handleSubmit(event) {
    alert('Thanks for the update, ' + this.state.firstName + "!");
    event.preventDefault();
  }

  render() {
    return (

      <div className="App">
        <header className="header">
          <img src={svg} className="App-logo" alt="animated svg" />
          <p>
            Hello, {this.state.firstName}!
          </p>

          <Form onSubmit={this.handleSubmit}>

            <Form.Row >
              <Form.Group controlId="formBasicFName" as={Col} md="4">
                <Form.Label> First Name: </Form.Label>
                <Form.Control type="text" onChange={this.handleChange}
                  required placeholder="First Name" />
              </Form.Group>

              <Form.Group controlId="formBasicLName" as={Col} md="4">
                <Form.Label> Last Name: </Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>

              <Form.Group controlId="formBasicNName" as={Col} md="4">
                <Form.Label> Preferred Name: </Form.Label>
                <Form.Control type="text" placeholder="Preferred/Nick Name" />
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">Submit</Button>

          </Form>
        </header>
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
