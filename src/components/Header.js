import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>
          What to do?
      </h1>
        <span className="tagline">{this.props.tagline}</span>
      </header>
    )
  }
}
