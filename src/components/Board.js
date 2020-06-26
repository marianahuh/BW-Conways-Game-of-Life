import React from 'react';
import Buttons from './Buttons';
import Grid from './Grid';

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.rows = 30;
		this.cols = 60;
		this.state = {
			generation: 0,
			gridWorld: Array(this.rows)
				.fill()
				.map(() => Array(this.cols).fill(0)),
		};
	}

	selectCell = (row, col) => {
		const gridWorld = this.state.gridWorld.map((rowArr, rowIdx) =>
			rowArr.map((cell, colIdx) =>
				rowIdx === row && colIdx === col ? !cell : cell
			)
		);
		this.setState(() => ({ gridWorld }));
	};

	populate = () => {
		const gridWorld = this.state.gridWorld.map((rowArr) =>
			rowArr.map(() => Math.floor(Math.random() * 3) === 1)
		);
		this.setState(() => ({ gridWorld }));
	};

	stopButton = () => {
		clearInterval(this.intervalId);
	};

	clear = () => {
		const grid = Array(this.rows)
			.fill()
			.map(() => Array(this.cols).fill(0));
		this.setState({
			gridWorld: grid,
			generation: 0,
		});
	};

	playButton = () => {
		clearInterval(this.intervalId);
		this.intervalId = setInterval(this.play);
	};

	componentWillMount() {
		this.playButton();
		this.populate();
	}

	// game logic
	play = () => {
		// first copy of grid
		let grid1 = this.state.gridWorld;
		// copy of first grid
		let gridCopy = arrCopy(this.state.gridWorld);
		// iterates over all elements in the grid
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				// counts each 8 neighbors
				let count = 0;
				if (i > 0) if (grid1[i - 1][j]) count++;
				if (j > 0) if (grid1[i][j - 1]) count++;
				if (i > 0 && j > 0) if (grid1[i - 1][j - 1]) count++;
				if (i > 0 && j < this.cols - 1) if (grid1[i - 1][j + 1]) count++;
				if (j < this.cols - 1) if (grid1[i][j + 1]) count++;
				if (i < this.rows - 1) if (grid1[i + 1][j]) count++;
				if (i < this.rows - 1 && j > 0) if (grid1[i + 1][j - 1]) count++;
				if (i < this.rows - 1 && j < this.cols - 1)
					if (grid1[i + 1][j + 1]) count++;
				// if not live and has 3 live neighbors, becomes alive
				if (!grid1[i][j] && count === 3) gridCopy[i][j] = true;
				// if cell has less than 2 or more than 3 neighbors, it dies
				if (grid1[i][j] && (count < 2 || count > 3)) gridCopy[i][j] = false;
			}
		}
		this.setState((prevState) => ({
			gridWorld: gridCopy,
			generation: prevState.generation++,
		}));
	};

	render() {
		return (
			<div className='grid-container'>
				<h2>Generations: {this.state.generation}</h2>
				<Grid
					gridWorld={this.state.gridWorld}
					rows={this.rows}
					cols={this.cols}
					selectCell={this.selectCell}
				/>
				<Buttons
					playButton={this.playButton}
					stopButton={this.stopButton}
					clear={this.clear}
					populate={this.populate}
				/>
			</div>
		);
	}
}
// Makes a deep copy arrays
const arrCopy = (arr) => {
	return JSON.parse(JSON.stringify(arr));
};

export default Board;
