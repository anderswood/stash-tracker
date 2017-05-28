import React, { Component } from 'react'

import StashList from './StashList'
import MapDiv from './MapDiv'
import NewStash from './NewStash'

export default class App extends Component {


  render () {
    return (
      <div>
        <header>
          <h1>StashTracker</h1>
        </header>
        <MapDiv />
        <NewStash />
        <StashList />
      </div>
    )
  }

}
