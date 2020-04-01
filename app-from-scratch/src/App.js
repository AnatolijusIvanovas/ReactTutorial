import React from 'react';
import './App.css';

function formatName() {
	return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
	if (user) {
		return <h1>Hello, {formatName(user)}!</h1>
	} else {
		return <h1>Hello, Stranger.</h1>
	}
}

const user = {
	firstName: 'John',
	lastName: 'Doe'
};

const element = (
	<div>
		<h3>{getGreeting(user)}</h3>
	</div>
);

function App() {
	return (
		<div>
			{element}
		</div>
	);
}

export default App;
