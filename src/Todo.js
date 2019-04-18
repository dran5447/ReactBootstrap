import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
      }
    
    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now(),
            done: false,
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: '',
        }));
    }

    render() {
        return (
            <div id="todo">
                <span>
                    <h3>TODO</h3>
                    <TodoList items={this.state.items} />

                    <Form onSubmit={this.handleSubmit} id="form">
                            <Form.Group controlId="formBasicFName" as={Col} md="12">
                                <Form.Label> What needs to be done? </Form.Label>
                                <Form.Control type="text" onChange={this.handleChange}
                                required placeholder="Item info here" value={this.state.text}/>
                            </Form.Group>
                        <Button variant="primary" type="submit"> Add Item </Button>
                    </Form>
                </span>
            </div>
        );
    }
}

class TodoList extends React.Component {
    alertClicked(item, e) {
        item.done = !item.done;  

        if(item.done){
            e.currentTarget.classList.add("text-strike");
        }
        else if (e.currentTarget.classList.contains("text-strike")){
            e.currentTarget.classList.remove("text-strike");
        }
    }

    render() {
      return (
        <ListGroup>
          {this.props.items.map(item => (
            <ListGroupItem key={item.id} 
                className={ item.done  ? 'text-strike' : '' }
                action onClick={this.alertClicked.bind(this, item)}>{item.text}</ListGroupItem>
          ))}
        </ListGroup>
      );
    }
  }

export default Todo;