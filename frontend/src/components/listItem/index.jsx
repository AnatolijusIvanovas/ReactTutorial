import React from 'react';
import './styles.css';

export class ListItem extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			checked: false,
		}
		
		this.changeChecked = this.changeChecked.bind(this);
	}
	
	changeChecked() {
		this.setState({checked: !this.state.checked})
	}
	
	render() {
		return (
			<div className={this.state.checked ? 
				'list-item-checked' : 
				'list-item'}
				onClick={this.changeChecked}>
				{this.props.title} {this.props.priority}
			</div>
		)
	}
}