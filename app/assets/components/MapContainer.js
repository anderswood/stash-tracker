import React from 'react'

import Map from './Map'

const MapContainer = () => {


  // function setCoords (paths) {
  //   console.log(paths);
  //   console.log('set state func');
  //   localStorage.setItem('paths', JSON.stringify(paths))
  // }


  return (
    <div>
      <Map  initialCenter={ {lng: -105.7208812, lat: 40.3058035} }
          />
    </div>
  )


}

export default MapContainer
