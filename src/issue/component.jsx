import React                 from 'react';
import { Link, hashHistory } from 'react-router';
import Comments              from '../comments/comments.jsx';
import Labels                from '../labels/labels.jsx';
import { embedUsernames }    from '../utils/utils.jsx';

require('!style!css!sass!./style.scss');

/**
 * IssueComponent displays all desired info for one particular issue
 */
export default class IssueComponent extends React.Component {

  static propTypes = {
    data: React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      state: React.PropTypes.string.isRequired,
      user: React.PropTypes.object.isRequired,
      body: React.PropTypes.string.isRequired
    }).isRequired
  }

  prepareComments (comments) {
    if (comments) {
      return <Comments comments={this.props.comments} />
    } else {
      return <span className="no-comments">No comments</span>
    }
  }

  render () {
    const { title, state, user, body, labels } = this.props.data;

    return (
      <div className="full-issue-container">
        <div className="full-issue">
          <div className="full-issue-title">
            <h4>{title}</h4>
          </div>
          <div className="full-issue-wrapper">
            <span className="state">Status: <strong><i>{state}</i></strong></span>
            <Labels labels={labels} />
            <div className="full-issue-main-info">
              <div className="full-issue-body">
                <span className="full-issue-body" dangerouslySetInnerHTML={{ __html: embedUsernames(body) }}></span>
              </div>
              <div className="bottom-holder">
                <a href="/" onClick={(e) => {
                  e.preventDefault();
                  hashHistory.goBack();
                }}>back</a>
                <div className="full-issue-author">
                  <img className="full-issue-author-image" src={user.avatar_url} />
                  <span>{user.login}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="comments-header"><strong><i>Comments</i></strong></span>
        {this.prepareComments(this.props.comments)}
      </div>
    );
  }
}