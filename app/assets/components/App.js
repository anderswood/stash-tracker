import React, { Component } from 'react'

import MapContainer from './MapContainer'

export default class App extends Component {
  componentDidMount() {
    // INSERT API CALL TO YOUR INTERNAL API
  }

  render() {
    return (
      <div>
        <div>Hello World</div>
          <MapContainer />
        <div>after the map</div>
      </div>
    )
  }
}
