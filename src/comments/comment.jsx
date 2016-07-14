import React              from 'react';
import moment             from 'moment';
import { embedUsernames } from '../utils/utils.jsx';

export default class Comment extends React.Component {

  static propTypes = {
    comment: React.PropTypes.shape({
      body: React.PropTypes.string.isRequired,
      created_at: React.PropTypes.string.isRequired,
      user: React.PropTypes.object.isRequired,
    }).isRequired
  }

  render () {
    const { body, user, created_at } = this.props.comment;

    return (
      <div className="comment">
        <div className="comment-left-container">
          <div className="comment-date">
            {moment(created_at).startOf('hour').fromNow()}
          </div>
          <div className="comment-body" dangerouslySetInnerHTML={{__html: embedUsernames(body)}} />
        </div>
        <div className="comment-right-container">
          <img className="comment-author-image" src={user.avatar_url} />
          <span>{user.login}</span>
        </div>
      </div>
    );
  }
}