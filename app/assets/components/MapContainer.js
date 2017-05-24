import React, { Component } from 'react'

import MyMap from './MyMap'

export default class MapContainer extends Component {

  render () {
    return (
      <MyMap  mapElement={ <div className='map-element' style={{ height: "400px"}}/> }
              containerElement={ <div className='container-element' style={{ height: "400px"}}/> }/>
    )
  }


}
