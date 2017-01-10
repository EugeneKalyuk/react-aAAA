import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {newMessage} from './actions'
import RaisedButton from 'material-ui/RaisedButton';

if (global.IS_BROWSER) {
	require('./comments.styl');
}

class Comments extends Component {

	render() {

		return (
			<div className="container">
				<RaisedButton label="Full width" fullWidth={true} />
				<div className="row">
					<div className="col-md-12">
						<ul className="comments-field">
							<li>

							</li>
						</ul>
					</div>

				</div>
			</div>
		)
	}
}
function mapStateToProps ({userMessage}) {

	return {
		 userMessage
	}
}

export default connect(mapStateToProps, (dispatch) => {
	return {
		NEW_MESSAGE: bindActionCreators(newMessage, dispatch)
	}
})(Comments)
