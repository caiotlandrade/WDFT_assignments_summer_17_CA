import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	
	constructor () {
		super()
		this.state = {
			index: 0
		}
		this.nextPic = this.nextPic.bind(this);
		this.previousPic = this.previousPic.bind(this);
	}
	
	nextPic () {
		this.setState ({index: this.state.index + 1})
	}

	previousPic () {
		this.setState ({index: this.state.index - 1})
	}

	render() {
		return (
			<div>
				<h1>Calvin Carousel</h1>
			    <div>
			    	<button onClick={this.previousPic} disabled={this.state.index<=0}>Previous</button>
			      	<span>{(this.state.index + 1)} of {this.props.array.length}</span>
			      	<button onClick={this.nextPic} disabled={this.state.index>=(this.props.array.length-1)}>Next</button>
			    </div>
				<div>
					<img src={this.props.array[this.state.index]} />
				</div>
			</div>			
		)
	}
}

export default App;