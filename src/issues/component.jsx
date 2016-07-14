import React              from 'react';
import { Link }           from 'react-router';
import Labels             from '../labels/labels.jsx';
import { embedUsernames } from '../utils/utils.jsx';

require('!style!css!sass!./style.scss');

const ISSUE_PREVIEW_LENGTH = 140;

export default class IssuesComponent extends React.Component {

  static propTypes = {
    issues: React.PropTypes.array.isRequired,
    pageNum: React.PropTypes.any
  }

  /**
   * formats issue body text so that max characters is 140 and breaks cleanly
   * @param  {string} body - issue description
   * @return {string}      - formatted description
   */
  prepareBody (body) {
    if (body.length > ISSUE_PREVIEW_LENGTH) {
      body = body.slice(0, ISSUE_PREVIEW_LENGTH);

      while (body.slice(-1) !== ' ') {
        body = body.slice(0, body.length - 1);
      }

      return `${body.slice(0, body.length - 1)}...`;
    } else {
      return `${body}...`;
    }
  }

  render () {
    const issues      = [];
    const { pageNum } = this.props;
    const endReached  = <p>Last page reached</p>;

    const next     = pageNum ? Number(pageNum) + 1 : 2;
    const previous = pageNum && pageNum > 1 ? Number(pageNum) - 1 : 0;

    this.props.issues.forEach((issue) => {
      issues.push(
        <div key={`container-${issue.number}`} className="issue">
          <Link to={`/issue/${issue.number}`}>Issue #{issue.number}: {issue.title}</Link>
          <p dangerouslySetInnerHTML={{__html: embedUsernames(this.prepareBody(issue.body))}}></p>
          <Labels labels={issue.labels} />
          <span>Reported by: <strong><i>{issue.user.login}</i></strong></span>
          <img src={issue.user.avatar_url} alt={issue.title} />
        </div>
      );
    });

    return (
      <div className="issues-table">
        <div className="nav-button-container">
          {<Link to={`/${previous}`} className={`${previous ? '' : 'hidden '}link-previous`}>back</Link>}
          {issues.length && <Link to={`/${next}`} className='link-next'>next page</Link>}
        </div>
        <div className="clear-fix"></div>
        {issues.length ? issues : endReached}
        <div className="nav-button-container">
          {<Link to={`/${previous}`} className={`${previous ? '' : 'hidden '}link-previous`}>back</Link>}
          {issues.length && <Link to={`/${next}`} className='link-next'>next page</Link>}
        </div>
      </div>
    );
  }
}