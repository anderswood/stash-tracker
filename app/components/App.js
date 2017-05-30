import React, { Component } from 'react'

import StashListContainer from '../containers/StashListContainer'
import MapDiv from './MapDiv'
import NewStashContainer from '../containers/NewStashContainer'

export default class App extends Component {


  render () {
    return (
      <div>
        <header>
          <h1>StashTracker</h1>
        </header>
        <section id='content-div'>
          <section id='map-stash-div'>
            <MapDiv />
            <NewStashContainer />
          </section>
          <section id='list-div'>
            <StashListContainer />
          </section>
        </section>
      </div>
    )
  }

}
