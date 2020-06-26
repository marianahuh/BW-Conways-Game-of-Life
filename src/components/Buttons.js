import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

class Buttons extends React.Component {
	render() {
		return (
			<div className='buttons'>
				<Button.Group icon color='teal' size='large'>
					<Button onClick={this.props.playButton}>
						<Icon name='play' />
					</Button>
					<Button onClick={this.props.stopButton}>
						<Icon name='stop' />
					</Button>
					<Button onClick={this.props.clear}>Clear</Button>
					<Button onClick={this.props.populate}>
						<Icon name='shuffle' />
					</Button>
				</Button.Group>
			</div>
		);
	}
}

export default Buttons;
