import React, {Component} from 'react';

if (global.IS_BROWSER) {
	require('./input.styl');
}
let element;
function timer(){


	console.log(new Date.getSeconds());
}
setInterval(timer, 1000);
class InputCommit extends Component {


	render() {
		return (
		<div className="container">
			<div className="row">
				<div className="col-md-12 input">
					<label htmlFor="name" className="input-field__label">Name:</label>
					<input type="text" id="name" className="input__input-field input-field input-field_name" />
					<label htmlFor="name" className="input-field__error">Field is required</label>
					<label htmlFor="name" className="input-field__label">Message:</label>
					<textarea rows="5" id="text" className="input__input-field input-field input-field_text" />
					<label htmlFor="name" className="input-field__error">Field is required</label>
					<button type="button" className="input__input-btn input-btn btn btn-default">Send</button>
				</div>
			</div>
		</div>
		)
	}
}



export default InputCommit;
