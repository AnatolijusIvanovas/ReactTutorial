import React from 'react';
import './App.css';

function Welcome(props) {
	return <h3> Hello, {props.name}</h3>
}

const element = <Welcome name="John Doe" />

function App() {
	return element
}

export default App;
