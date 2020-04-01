import React from 'react';
import './App.css';

function Welcome(props) {
	return <h3> Hello, {props.name}</h3>
}

function Comment(props) {
	return (
		<div className="Comment">
			<UserInfo user={props.author} />
			<div className="Comment-text">
				{props.text}
			</div>
			<div className="Comment-date">
				{props.date}
			</div>
		</div>
	);
}

function Avatar(props) {
	return (
		<img className="Avatar" 
			src={props.author.avatarUrl} 
			alt={props.author.name} 
		/>
	);
}

function UserInfo(props) {
	return (
		<div className="UserInfo">
			<Avatar user={props.user} />
			<div className="UserInfo-name">
				{props.user.name}
			</div>
		</div>
	);
}

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}
	
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}
	
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	
	tick() {
		this.setState({
			date: new Date()
		});
	}
	
	render() {
		return (
			<div>
				<h3>It is {this.state.date.toLocaleTimeString()}.</h3>
			</div>
		);
	}
}

function App() {
	return (
		<div>
			<Welcome name="John Doe" />
			<Clock />
			<Clock />
			<Clock />
		</div>
	);
}

export default App;
