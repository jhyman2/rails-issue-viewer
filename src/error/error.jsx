import React from 'react';

require('!style!css!sass!./style.scss');

/**
 * Error component displayed for network failures
 */
export default class Error extends React.Component {

  render () {
    return (
      <div className="error-container">
        <span>{this.props.err}</span>
        <a>"https://developer.github.com/v3/#rate-limiting"</a>
      </div>
    );
  }
}