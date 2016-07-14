import React from 'react';

require('!style!css!sass!./style.scss');

/**
 * Loading component with only a div and css to create a spinning animation.
 */
export default class Loading extends React.Component {
  render () {
    return (
      <div className="loading">
      </div>
    );
  }
}