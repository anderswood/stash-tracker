import React, { Component } from 'react'

import {polygonParams, polylineParams, drawmingMgrProps} from './mapSettings'

class MapTile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      zoom: 13,
      paths: [],
      drawingManagerProps: drawmingMgrProps(),
      polygonInputs: (e) => polygonParams(e),
      polylineInputs: (e) => polylineParams(e),
    }
  }

  render() {
    return (
      <div className='GMap'>
          <div  className='GMap-canvas'
                ref="mapCanvas">
          </div>
        <button onClick={ () => this.drawOverlayCoordsOnMap() }>DRAW COORDS</button>
        <button onClick={ () => this.clearMap() }>Wipe Map</button>
      </div>
    )
  }

  static propTypes() {
    initialCenter: React.PropTypes.objectOf(React.PropTypes.number).isRequired
  }

  componentDidMount() {
    this.map = this.createMap()
    this.drawingManager = new google.maps.drawing.DrawingManager(this.state.drawingManagerProps);
    this.drawingManager.setMap(this.map);

    google.maps.event.addListener(this.map, 'zoom_changed', ()=> this.handleZoomChange())

    google.maps.event.addListener(this.drawingManager, 'overlaycomplete', (event) => {
      if (event.type === 'polygon' || event.type === 'polyline') {
        this.retrieveOverlayCoordsFromMap(event)
      }
    });

    // this.marker = this.createMarker()
    // this.infoWindow = this.createInfoWindow()

  }

  componentDidUnMount() {
    google.maps.event.clearListeners(map, 'zoom_changed')
  }

  retrieveOverlayCoordsFromMap(e) {
    let updatePaths = Object.assign([], this.state.paths)
    let overlayPath = e.overlay.getPath().getArray().map((coordPair, i) => {
      return {lat: coordPair.lat(), lng: coordPair.lng()}
    });

    let newOverlay = {type: e.type, coords: overlayPath}
    this.props.handleOverlayAdd(newOverlay)

    updatePaths.push(e.overlay)
    this.setState({paths: updatePaths});
  }

  drawOverlayCoordsOnMap() {
    this.props.overlayList.forEach((path) => {
      let overlay;

      if (path.type === 'polygon') {
        let polygonParams = this.state.polygonInputs(path.coords)
        overlay = new google.maps.Polygon(polygonParams);

      } else if (path.type === 'polyline') {
        let polylineParams = this.state.polylineInputs(path.coords)
        overlay = new google.maps.Polyline(polylineParams);

      }
      overlay.setMap(this.map);
    })
  }

  clearMap() {
    this.state.paths.forEach( overlay => {
      overlay.setMap(null)
    })
    this.setState({paths: []})
  }

  createMap() {
      let mapOptions = {
        zoom: this.state.zoom,
        center: this.mapCenter(),
        mapTypeId: 'terrain'
      }
      return new google.maps.Map(this.refs.mapCanvas, mapOptions)
    }

  mapCenter() {
    return new google.maps.LatLng(
      this.props.initialCenter.lat,
      this.props.initialCenter.lng
    )
  }

  createMarker() {
    return new google.maps.Marker({
      position: this.mapCenter(),
      map: this.map
    })
	}

  createInfoWindow() {
    let contentString = "<div class='InfoWindow'>I'm a Window that contains Info Yay</div>"
    return new google.maps.InfoWindow({
      map: this.map,
      anchor: this.marker,
      content: contentString
    })
  }

  handleZoomChange() {
    this.setState({
      zoom: this.map.getZoom()
    })
  }
}

export default MapTile;
