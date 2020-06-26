import React from 'react';
import Board from './components/Board';
import './App.css';
import ModalRules from './components/ModalRules';

function App() {
	return (
		<div className='App'>
			<h1> Conway's The Game of Life</h1>
			<ModalRules />
			<Board />
		</div>
	);
}

export default App;
