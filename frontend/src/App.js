import React, { Component } from 'react';
import './App.css';
import { ListItem } from './components/listItem';

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
				{this.state.data.map((item, index) =>
					<ListItem 	key={index} 
								title={item.title} 
								priority={item.priority} />)}
			</div>
		);
	}
}

export default App;
