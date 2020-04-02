import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const data = [
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
];

class App extends Component {
	render() {
		return (
			<div className="App">
				{data.map(item =>
					<div>
						{item.title}
					</div>
				)}
			</div>
		);
	}
}

export default App;
