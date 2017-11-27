import React from 'react';
import ReactDOM from 'react-dom';

export default class ImageUploadForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imageData:""
		};
		window.events.subscribe(() =>
			this.setState({imageClassName : window.events.getState()})
		)
	}
	render() {
		return (
			<div className="image-container">
				<img id="image" ref={(image) => {this.image = image}} src={this.state.imageData} className={this.state.imageClassName}/>
				<input type="file" onChange={this.uploadImage.bind(this)} className="uploadImage" accept=".jpg,.png,.jpeg"/>
			</div>
		)
	}
	uploadImage(event) {
		let reader = new FileReader();
	    let file = event.target.files[0];

	    reader.onloadend = () => {
	      this.setState({
	        imageData: reader.result
	      });
	    }

	    reader.readAsDataURL(file)
	}
}