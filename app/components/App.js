import React, { Component } from 'react'

import MapTileContainer from '../containers/MapTileContainer'
import HeaderIcon from './HeaderIcon'

export default class App extends Component {

  render () {
    return (
      <div>
        <header>
          <h1>Stash<HeaderIcon/>Tracker</h1>
        </header>
        <MapTileContainer  initialCenter={ {
          lng: -105.7208812,
          lat: 40.3058035
        } }/>
      </div>
    )
  }

}
