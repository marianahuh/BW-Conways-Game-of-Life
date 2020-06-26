import React from 'react';
import Cell from './Cell';

class Grid extends React.Component {
	render() {
		const width = this.props.cols * 16;
		let cell = 0;
		const rowsArr = this.props.gridWorld.map((rowArr, rowIdx) =>
			rowArr.map((colArr, colIdx) => {
				const cellId = `${rowIdx}_${colIdx}`;
				// checks each index of rows and cols to see if live or dead
				cell = this.props.gridWorld[rowIdx][colIdx] ? 'cell live' : 'cell dead';
				return (
					<Cell
						key={cellId}
						cellId={cellId}
						cell={cell}
						row={rowIdx}
						col={colIdx}
						selectCell={this.props.selectCell}
					/>
				);
			})
		);

		return (
			<div className='grid' style={{ width }}>
				{rowsArr}
			</div>
		);
	}
}

export default Grid;
