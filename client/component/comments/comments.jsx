import React, {Component} from 'react';

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

export default Comments;
