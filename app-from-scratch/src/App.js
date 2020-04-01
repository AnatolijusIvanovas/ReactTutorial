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

function App() {
	return (
		<div>
			<Welcome name="John" />
			<Welcome name="Jack" />
			<Welcome name="Josh" />
		</div>
	);
}

export default App;
