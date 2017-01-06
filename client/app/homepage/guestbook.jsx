import React, {Component} from 'react';
import Comments from '../../component/comments/comments';
import InputCommit from '../../component/input/input'


if (global.IS_BROWSER) {
  require('./guestbook.styl');
}

class GuestBook extends Component {
  render() {
    return (
      <div className='guestbook'>
        <h1>GuestBook</h1>
        <Comments/>
        <InputCommit/>
      </div>
    );
  }
}

export default GuestBook;
