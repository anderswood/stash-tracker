
export const polygonParams = (overlayCoordsArr) => {
  return {
    paths: overlayCoordsArr,
    draggable: true,
    editable: true,
    fillColor: '#E4801C',
    fillOpacity: 0.2,
    strokeColor: '#E4801C',
    strokeOpacity: 0.8,
    strokeWeight: 2,
  }
}

export const polylineParams = (overlayCoordsArr) => {
  return {
    path: overlayCoordsArr,
    draggable: true,
    editable: true,
    geodesic: true,
    strokeColor: '#E4801C',
    strokeOpacity: 0.8,
    strokeWeight: 2
  }
}

export const drawmingMgrProps = () => {
  return {
    drawingMode: google.maps.drawing.OverlayType.POLYGON,
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: ['marker', 'polygon', 'polyline']
    },
    markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
    polygonOptions: {
      draggable: true,
      editable: true,
      clickable: true,
      fillColor: '#E4801C',
      fillOpacity: 0.2,
      strokeColor: '#E4801C',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      zIndex: 1
    },
    polylineOptions: {
      draggable: true,
      editable: true,
      geodesic: true,
      strokeColor: '#E4801C',
      strokeOpacity: 0.8,
      strokeWeight: 2
    }
  }
}
