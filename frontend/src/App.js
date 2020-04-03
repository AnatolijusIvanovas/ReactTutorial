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
				},
				{
					title: 'Work 4',
					priority: 1,
				},
				{
					title: 'Study 5',
					priority: 10,
				},
				{
					title: 'Work 6',
					priority: 1,
				},
				{
					title: 'Study 7',
					priority: 10,
				},
				{
					title: 'Sleep 8',
					priority: -10,
				},
				{
					title: 'Work 9',
					priority: 1,
				},
				{
					title: 'Study 10',
					priority: 10,
				},
			]
		};
		
		this.removeElem = this.removeElem.bind(this);
	}
	
	removeElem(removeIndex) {
		this.setState({data: 
				this.state.data.filter((item, index) => 
					index !== removeIndex)})
	}
	
	render() {
		return (
			<div className="App">
				{this.state.data.map((item, index) =>
					<ListItem 	key={index} 
								title={item.title} 
								onRemove={() => this.removeElem(index)} 
								priority={item.priority} />)}
			</div>
		);
	}
}

export default App;
