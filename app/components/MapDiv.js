import React from 'react'

import MapTileContainer from '../containers/MapTileContainer'

const MapContainer = () => {

  return (
    <div id='map-stash-div'>
      <MapTileContainer  initialCenter={ {lng: -105.7208812, lat: 40.3058035} }
          />
    </div>
  )


}

export default MapContainer
