import React from 'react'

// Placeholder for react-router to place child routes
export default class App extends React.Component {
  render () {
    return (<div>{this.props.children}</div>);
  }
}