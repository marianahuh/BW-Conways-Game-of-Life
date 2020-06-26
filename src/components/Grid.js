import React from 'react';
import Cell from './Cell';

class Grid extends React.Component {
	render() {
		const width = this.props.cols * 16;
		let cellClass = 0;
		const rowsArr = this.props.gridWorld.map((rowArr, rowIdx) =>
			rowArr.map((cell, colIdx) => {
				const cellId = `${rowIdx}_${colIdx}`;

				cellClass = this.props.gridWorld[rowIdx][colIdx]
					? 'cell live'
					: 'cell dead';
				return (
					<Cell
						key={cellId}
						cellId={cellId}
						cellClass={cellClass}
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
