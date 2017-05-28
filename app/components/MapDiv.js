import React from 'react'

import MapTile from './MapTile'

const MapContainer = () => {

  return (
    <div>
      <MapTile  initialCenter={ {lng: -105.7208812, lat: 40.3058035} }
          />
    </div>
  )


}

export default MapContainer
