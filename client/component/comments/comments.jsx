import React, {Component} from 'react';
import {connect} from 'react-redux';
import Form from '../../component/form/form'


if (global.IS_BROWSER) {
	require('./comments.styl');
}

class Comments extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<ul className="comments-field"></ul>
					</div>

				</div>
			</div>
		)
	}
}
function mapStateToProps ({form}) {
	console.log(form);
	return {
		form
	}
}

export default connect(mapStateToProps, dispatch => {
	return {

	}
})(Comments)
