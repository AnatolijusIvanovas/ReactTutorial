import React, { Component } from 'react';
import './App.css';
import { ListItem } from './components/listItem';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			 data: [
				{
					id: 1,
					title: 'Work 1',
					priority: 1,
				},
				{
					id: 2,
					title: 'Study 2',
					priority: 10,
				},
				{
					
					id: 3,
					title: 'Sleep 3',
					priority: -10,
				},
				{
					id: 4,
					title: 'Work 4',
					priority: 1,
				},
				{
					id: 5,
					title: 'Study 5',
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
					<ListItem 	key={item.id} 
								title={item.title} 
								onRemove={() => this.removeElem(index)} 
								priority={item.priority} />)}
			</div>
		);
	}
}

export default App;
