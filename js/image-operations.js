import React from 'react';
import ReactDOM from 'react-dom';

export default class ImageOperations extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rotate : false,
			translate : false,
			scale : false,
			opacity : false
		};

	}
	rotate() {
		this.setState({
			rotate : !this.state.rotate
		});
		events.dispatch({
			"type": 'rotate',
			"isApplied": !this.state.rotate
		});
	}
	translate() {
		this.setState({
			translate : !this.state.translate
		});
		events.dispatch({
			"type": 'translate',
			"isApplied": !this.state.translate
		});
	}
	scale() {
		this.setState({
			scale : !this.state.scale
		});
		events.dispatch({
			"type": 'scale',
			"isApplied": !this.state.scale
		});
	}
	opacity() {
		this.setState({
			opacity : !this.state.opacity
		});
		events.dispatch({
			"type": 'opacity',
			"isApplied": !this.state.opacity
		});
	}
	reset() {
		this.setState({
			rotate : false,
			translate : false,
			scale : false,
			opacity : false
		});
		events.dispatch({
			"type": 'reset',
			"isApplied": true
		});
	}
	render() {
		return (
			<div className="operations">
				<div className="available-actions">
					<h3>Available Actions</h3>
					
					{!this.state.rotate &&
						<button className="button" onClick={this.rotate.bind(this)}>Rotate (45 Deg)</button>
					}
					{!this.state.translate &&
						<button className="button" onClick={this.translate.bind(this)}>Translate x by -40px</button>
					}
					{!this.state.scale &&
						<button className="button" onClick={this.scale.bind(this)}>Scale to 0.5</button>
					}
					{!this.state.opacity &&
						<button className="button" onClick={this.opacity.bind(this)}>Opacity to 0.5</button>
					}
					
				</div>
				<div className="applied-actions">
					<h3>Applied Actions</h3>
					
						{this.state.rotate && 
							<button className="button" onClick={this.rotate.bind(this)}>Rotate (45 Deg)</button>
						}
						{ this.state.translate &&
							<button className="button" onClick={this.translate.bind(this)}>Translate x by -40px</button>
						}
						{this.state.scale &&
							<button className="button" onClick={this.scale.bind(this)}>Scale to 0.5</button>
						}
						{this.state.opacity &&
							<button className="button" onClick={this.opacity.bind(this)}>Opacity 0.5</button>
						}
					
				</div>
				<button className="reset" value="reset" onClick={this.reset.bind(this)}>Reset</button>
			</div>
		)
	}
}