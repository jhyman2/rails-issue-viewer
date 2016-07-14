import React   from 'react';
import Comment from './comment.jsx';

require('!style!css!sass!./style.scss');

export default class Comments extends React.Component {

  prepareComments (comments) {
    const htmlComments = [];

    comments.forEach((comment) => {
      htmlComments.push(<Comment key={comment.id} comment={comment} />);
    });

    return htmlComments;
  }

  render () {
    return (
      <div className="comments-container">
        {this.prepareComments(this.props.comments)}
      </div>
    );
  }
}