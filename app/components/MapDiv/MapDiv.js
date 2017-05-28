import React from 'react'

import Map from '../Map/Map'

const MapContainer = () => {

  return (
    <div>
      <Map  initialCenter={ {lng: -105.7208812, lat: 40.3058035} }
          />
    </div>
  )


}

export default MapContainer
