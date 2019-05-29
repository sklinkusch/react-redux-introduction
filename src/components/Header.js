import React, { Component, Fragment } from 'react'

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <h1>
          What to do?
      </h1>
        <span className="tagline">This could be your bucket list.</span>
      </Fragment>
    )
  }
}
