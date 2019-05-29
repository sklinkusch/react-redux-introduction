import React, { Component } from 'react'
import Header from './Header';

export default class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <Header tagline="404 - Page not found!" />
        <div className="alert alert-warning">
          <strong>
            Oops...sorry!<br />
          </strong>
          The requested page could not be found.
        </div>
      </div>
    )
  }
}
