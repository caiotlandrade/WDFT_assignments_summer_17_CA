import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component{
	constructor(){
		super();
		this.state = {
			todos:[
				// 
	            // {text: 'You can now start tracking your tasks', done: false, id: 1},
	            // {text: 'To start, mark these two tasks as done and click on the "clear complete" button', done: false, id: 2}
					],
			id: 3,
			selection: ''
		}
		this.addNewTodo = this.addNewTodo.bind(this);
		this.changeCheckBox = this.changeCheckBox.bind(this);
		this.clearItems = this.clearItems.bind(this);
		this.changeSelect = this.changeSelect.bind(this);
	}

	// lif
	componentWillMount() {
		let todoState = {};
		axios.get('http://localhost:8080/api/state')
		.then(result => {
			console.log("success");
			console.log(result.data);
			todoState = result.data;
			this.setState(todoState);
		})
		.catch(error => {
			console.log(error);
			console.log("error");
		})
		
	}

	componentDidUpdate() {
		axios.post('http://localhost:8080/api/state', this.state)
		.then(result => {
			console.log(result.data);
			console.log("success on the post");
		})
		.catch(error => {
			console.log(error);
			console.log("error on the post");
		})
	}

	// function that gets the value from input and add it to the array
	addNewTodo(newEntry) {
		let todoCopy = this.state.todos; // copy array before adding new entry
		todoCopy.push({text: newEntry, 
										done: false, 
										id: this.state.id
									}); 	// adding new entry with all key:value pairs
		this.setState({todos: todoCopy, id: (this.state.id + 1)});  // setting new state with up-to-date array
	}

	// function that changes the boolean value of the item on the list
	changeCheckBox(index) {
		let todoCopy = this.state.todos; // copy array before adding new entry
		todoCopy[index].done = !todoCopy[index].done //changing the value of done
		this.setState({todos: todoCopy}); 	// setting new state with up-to-date array
	}

	clearItems() {
		let todoCopy = this.state.todos; // copy array before adding new entry
		todoCopy = todoCopy.filter((todoItem)=>{
					return !todoItem.done
				}) 	// filtering all complete items out
		this.setState({todos: todoCopy});  // setting new state with new array
	}

	changeSelect(event) {
		this.setState({
			selection: event
		})
	}

	render(){
		return(
			<div className="container">
				<h1 className="text-center">todos</h1>

				<Input addNewTodo={this.addNewTodo} />

				<List todoArray={this.state.todos} 
							selection={this.state.selection} 
							changeCheckBox={this.changeCheckBox} />

				<FilterView changeSelect={this.changeSelect} />

				<Clear clearItems={this.clearItems} />
				
			</div>
		)
	}
}


// component with the whole form including the functions to listen the input value and to trigger addNewTodo())
class Input extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      newTodo: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

	// this monitors the change and listen to the input value
  handleChange(event) {
    this.setState({newTodo: event.target.value});
  }
	// this triggers addNewTodo() and empties the form
  handleSubmit(event) {
		event.preventDefault();
		// this calls the function on main component to add the new entry
		this.props.addNewTodo(this.state.newTodo)
		this.setState({newTodo: ''}); // this erases the form
  }

	render () {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div className="input-group">
						<input className="form-control" 
										type="text" placeholder="What's your task?" 
										value={this.state.newTodo} 
										onChange={this.handleChange}  />
						<span className="input-group-btn">
							<button className="btn btn-primary" type="submit">Add it to the list</button>
						</span>
					</div>
				</form>
			</div>
		)
	}
}


// component with  everything on the list element (including checkbox and its function)
class List extends React.Component {
	render () {
		let filteredArray = this.props.todoArray; // copying the array coming through props
		filteredArray = filteredArray.filter((todoItem, i) => {
			todoItem.index = i; // filtering the array and redefining the index
			if (this.props.selection === "all"){
				return todoItem
			} else if (this.props.selection === "active"){
				return !todoItem.done
			} else if (this.props.selection === "complete"){
				return todoItem.done
			}
		})
		return (
			<div>
				{filteredArray.map((todoItem, i)=>{
					return (
						<li className="list-group-item">
							<input type="checkbox" 
											value={todoItem.done} 
											checked={todoItem.done} 
											name={todoItem.id} 
											onChange={()=>{this.props.changeCheckBox(todoItem.index)}}/>
							<label className={todoItem.done ? "done" : ""}>{todoItem.text}</label>
						</li>
					)
				})}
			</div>
		)
	}
}

class Clear extends React.Component {
	constructor (props) {
    super (props)
    this.triggerClear = this.triggerClear.bind(this);
  }
	
	triggerClear(event) {
		event.preventDefault();
		this.props.clearItems();
	}
	
	render () {
		return (
			<div>
				<button className="pull-right btn btn-default" onClick={this.triggerClear}>Clear Complete</button>
			</div>
		)
	}
}

class FilterView extends React.Component {
	constructor () {
		super ()
		this.handleSelect = this.handleSelect.bind(this);
	}

	handleSelect(event) {
		this.props.changeSelect(event.target.value);
	}
	
	render () {
		return (
			<div>
				<select onChange={this.handleSelect}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="complete">Complete</option>
        </select>
			</div>
		)
	}
}

export default App;
