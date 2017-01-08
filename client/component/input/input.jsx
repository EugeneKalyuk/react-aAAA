import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"

if (global.IS_BROWSER) {
	require('./input.styl');
}
let name = document.getElementById('name');
let nameError = document.getElementById('name-error');
let text = document.getElementById('text');
let textError = document.getElementById('text-error');

console.log(nameError)

function checkName(){
    if(!name.value.length){
        nameError.classList.addClass('input-field__error_active')
    }
}
function checkText() {
    if(!text.value.length){
        textError.classList.addClass('input-field__error_active')
    }
}

class InputCommit extends Component {

	constructor(props) {
        super(props);
        this.state = {
        	payload: 'empty'
		};
    }

    handelForm() {
        checkText();
		checkName();
		if(name.value.length && text.value.length){
            this.setState({
                payload: 'fill'
            })
		} else {
            this.setState({
                payload: 'empty'
            })
		}
    };

	
	
	render() {
        console.log(this.state);
		return (
		<div className="container">
			<div className="row">
				<div className="col-md-12 input">
					<label htmlFor="name" className="input-field__label">Name:</label>
					<input type="text" id="name" className="input__input-field input-field input-field_name" />
					<label htmlFor="name" className="input-field__error" id="name-error">Field is required</label>
					<label htmlFor="name" className="input-field__label">Message:</label>
					<textarea rows="5" id="text" className="input__input-field input-field input-field_text" />
					<label htmlFor="name" className="input-field__error" id="text-error">Field is required</label>
					<button type="button" className="input__input-btn input-btn btn btn-default" onClick={ this.handelForm.bind(this) }>Send</button>
				</div>
			</div>
		</div>
		)
	}
}



export default InputCommit;
