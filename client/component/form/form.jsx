import React, {Component, PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';


if (global.IS_BROWSER) {
	require('./form.styl');
}

const validate = values => {
	const errors = {};
	if(!values.name){
		errors.name = "Required"
	}
	if(!values.text){
		errors.text = "Required"
	}
	return errors;
};

const checkSymbols = values => {
	const numbers = {};
	if(values.text){
		numbers.text = (300 - values.numbers.length)
	}
	return numbers
}

class Form extends Component {
	constructor(props) {
		super(props)
	};

	renderName = ({ input, label, type, meta : { touched, error }}) => (
		<div>
			<label>{label}</label>
			<div>
				<input {...input} placeholder={label} type={type} className="input__input-field input-field"/>
				{touched && error && <span className="input-field__error">{error}</span>}
			</div>
		</div>
	);

	renderText = ({ input, label, meta : { touched, error, number } }) => (
		<div>
			<label>{label}</label>
			<div>
				<textarea {...input} placeholder={label} maxLength="300" className="input__input-field input-field"/>
				{touched && error && <span className="input-field__error">{error}</span>}
				{number && <span className="input-field__number">{number}</span>}

			</div>
		</div>
	);

	stopEvent = (e) => {
		e.preventDefault();
		console.log(this);
		return false
	};

	render (){
		const {handelForm, reset, dispatch, submitFailed} = this.props;

		return (
			<form onSubmit={handelForm} className="col-md-12">
				<Field name="name" component={this.renderName} type="text" label="Name"/>
				<Field name="text" component={this.renderText}  label="Message"/>
				<button type="submit"  className="input__input-btn" onClick={this.stopEvent.bind(this)}>Submit</button>
			</form>
		)
	}
}

export default connect(
	state => ({
		prop: state.prop
	})
)(reduxForm({
	form: 'form',
	validate,
	checkSymbols
})(Form))