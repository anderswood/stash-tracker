import React, { Component } from 'react'

import MapTileContainer from '../containers/MapTileContainer'

export default class App extends Component {

  render () {
    return (
      <div>
        <header>
          <h1>StashTracker</h1>
        </header>
        <MapTileContainer  initialCenter={ {
          lng: -105.7208812,
          lat: 40.3058035
        } }/>
      </div>
    )
  }

}
