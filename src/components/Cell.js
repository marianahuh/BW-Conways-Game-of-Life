import React from 'react';

export default class Cell extends React.Component {
	selectCell = () => {
		this.props.selectCell(this.props.row, this.props.col);
	};
	render() {
		return (
			<div
				id={this.props.id}
				className={this.props.cellClass}
				onClick={this.selectCell}
			/>
		);
	}
}
