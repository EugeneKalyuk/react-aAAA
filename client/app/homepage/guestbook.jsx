import React, {Component, PropTypes} from 'react';
import Comments from '../../component/comments/comments';
import Form from '../../component/form/form';


if (global.IS_BROWSER) {
  require('./guestbook.styl');
}

class GuestBook extends Component {


  render() {

    return (
      <div className='guestbook'>
        <h1>GuestBook</h1>
          <Comments/>
          <Form />
      </div>
    );
  }
}

export default GuestBook;
