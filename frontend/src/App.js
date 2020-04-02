import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			 data: [
				{
					title: 'Work 1',
					priority: 1,
				},
				{
					title: 'Study 2',
					priority: 10,
				},
				{
					title: 'Sleep 3',
					priority: -10,
				}
			]
		}
	}
	
	render() {
		return (
			<div className="App">
				{this.state.data.map(item =>
					<div>
						{item.title}
					</div>
				)}
			</div>
		);
	}
}

export default App;
