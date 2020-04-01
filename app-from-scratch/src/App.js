import React from 'react';
import './App.css';

function Welcome(props) {
	return <h3> Hello, {props.name}</h3>
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
