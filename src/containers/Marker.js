import React, { Component } from 'react';
import Draggable from 'react-draggable';

const titleOffsetPx = '100px';

export default class Marker extends Component {
	constructor(props) {
		super(props)

		this.eventLogger = (e: MouseEvent, data: Object) => {
			console.log('Event: ', e);
			console.log('Data: ', data);
		};

		this.markerStyle = {};
	}
	
	generateTitlePosition() {
		switch (this.props.props.titlePos) {
			case 'left':
				this.markerStyle = { right: titleOffsetPx }
				break;
			case 'top':
				this.markerStyle = { bottom: titleOffsetPx }
				break;
			case 'right':
				this.markerStyle = { left: titleOffsetPx }
				break;
			case 'bottom':
				this.markerStyle = { top: titleOffsetPx }
				break;
			default:
				break;
		}
	}
	componentWillMount() {
		this.generateTitlePosition();
	}

	render() {
		const { props } = this.props;
		return (
			<Draggable
				axis="both"
				handle=".handle"
				defaultPosition={{ x: props.posx, y: props.posy }}
				position={null}
				grid={[5, 5]}
				onStart={this.handleStart}
				onDrag={this.handleDrag}
				onStop={this.handleStop}>
				<div className="marker handle">
					<span className="marker__title" style={this.markerStyle}> {props.title} </span>
				</div>
			</Draggable>
		)
	}
}