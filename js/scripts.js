import React from 'react';
import ReactDOM from 'react-dom';
import ImageUploadForm from './image-upload-form';
import ImageOperations from './image-operations';
import { createStore } from 'redux'

var imageOperations = function(operations = "",action) {

	switch(action.type) {
		case "rotate" :
			if (action.isApplied && operations.indexOf("rotate") == -1) {
				operations += " rotate";
			} else if (!action.isApplied && operations.indexOf("rotate") != -1){
				operations = operations.replace("rotate","");
			}
		break;
		case "translate" :
			if (action.isApplied && operations.indexOf("translate") == -1) {
				operations += " translate";
			} else if (!action.isApplied && operations.indexOf("translate") != -1){
				operations = operations.replace("translate","");
			}
		break;
		case "opacity" :
			if (action.isApplied && operations.indexOf("opacity") == -1) {
				operations += " opacity";
			} else if (!action.isApplied && operations.indexOf("opacity") != -1){
				operations = operations.replace("opacity","");
			}
		break;
		case "scale" :
			if (action.isApplied && operations.indexOf("scale") == -1) {
				operations += " scale";
			} else if (!action.isApplied && operations.indexOf("scale") != -1){
				operations = operations.replace("scale","");
			}
		break;
		case "reset" : 
			operations = "";
		break;
	}
	console.log(operations);
	return operations;
}
window.events = createStore(imageOperations);

ReactDOM.render(
	<div>
		<h1>React Code Challenge!</h1>
  		<ImageUploadForm/>
  		<ImageOperations/>
  	</div>,
  document.getElementById('container')
);