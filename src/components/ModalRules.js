import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';

class ModalRules extends Component {
	state = { open: false };

	show = (dimmer) => () => this.setState({ dimmer, open: true });
	close = () => this.setState({ open: false });

	render() {
		const { open, dimmer } = this.state;
		return (
			<>
				<Button onClick={this.show('blurring')}>Rules</Button>
				<Modal dimmer={dimmer} open={open} onClose={this.close}>
					<Modal.Header>Rules to The Game of Life</Modal.Header>
					<Modal.Content>
						<Modal.Description>
							<p>
								The universe of the Game of Life is an infinite, two-dimensional
								orthogonal grid of square cells, each of which is in one of two
								possible states, live or dead, (or populated and unpopulated,
								respectively). Every cell interacts with its eight neighbours,
								which are the cells that are horizontally, vertically, or
								diagonally adjacent. At each step in time, the following
								transitions occur:
							</p>
							<p>
								1. Any live cell with fewer than two live neighbours dies, as if
								by underpopulation.
								<br />
								2. Any live cell with two or three live neighbours lives on to
								the next generation.
								<br />
								3. Any live cell with more than three live neighbours dies, as
								if by overpopulation.
								<br />
								4. Any dead cell with exactly three live neighbours becomes a
								live cell, as if by reproduction.
							</p>
							<a href='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Examples_of_patterns'>
								read more{' '}
								<span role='img' aria-label='pointer to wiki page'>
									👉{' '}
								</span>{' '}
								wikipedia
							</a>
						</Modal.Description>
					</Modal.Content>
					<Modal.Actions>
						<Button
							positive
							icon='checkmark'
							labelPosition='right'
							content='Got it'
							onClick={this.close}
						/>
					</Modal.Actions>
				</Modal>
			</>
		);
	}
}

export default ModalRules;
