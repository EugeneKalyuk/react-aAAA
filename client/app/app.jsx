import React, {Component, PropTypes} from 'react';

if (global.IS_BROWSER) {
  require('./app.styl');
}

const propTypes = {
  children: PropTypes.node
};

class App extends Component {


  render() {


	  return (
      <div>
	      <div className="container">
	      <div className="row">
		      <div className="col-md-12">
			      {this.props.children}
		      </div>
	      </div>
      </div>

      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
