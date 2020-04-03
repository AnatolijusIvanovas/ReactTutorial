import React from 'react';
import './styles.css';

export class ListItem extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			checked: false,
		}
	}
	
	render() {
		return (
			<div className={this.state.checked ? 
				'list-item-checked' : 
				'list-item'}
				onClick={() => this.setState({checked: !this.state.checked})}>
				{this.props.title} {this.props.priority}
			</div>
		)
	}
}