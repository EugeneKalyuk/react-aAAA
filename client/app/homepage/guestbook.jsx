import React, {Component, PropTypes} from 'react';
import Comments from '../../component/comments/comments';
import Form from '../../component/form/form';


if (global.IS_BROWSER) {
  require('./guestbook.styl');
}

class GuestBook extends Component {


  render() {
    const showResults = values =>
	  new Promise(resolve => {
	    setTimeout(() => {  // simulate server latency
	      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
		  resolve()
	    }, 500)
	  });
    return (
      <div className='guestbook'>
        <h1>GuestBook</h1>
          <Comments/>
          <Form onSubmit={showResults}/>
      </div>
    );
  }
}

export default GuestBook;
