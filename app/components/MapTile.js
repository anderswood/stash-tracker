import React, { Component } from 'react'

import {polygonParams, polylineParams, drawmingMgrProps} from './mapSettings'
// import TestFile from './test'
import NewStashContainer from '../containers/NewStashContainer'
import StashListContainer from '../containers/StashListContainer'

class MapTile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      zoom: 13,
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
        <button onClick={ () => this.drawOverlayCoordsOnMap(this.props.overlayList) }>DRAW COORDS</button>
        <button onClick={ () => this.clearMap() }>Wipe Map</button>
        <button onClick={ () => this.saveMap() }>save map</button>
        <div>
          <NewStashContainer handleClearMap={ this.clearMap.bind(this) } />
        </div>
        <div>
          <StashListContainer handleClearMap={ this.clearMap.bind(this) }
                              handleAddOverlays={ this.drawOverlayCoordsOnMap.bind(this) }/>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.initMap();

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
    google.maps.event.clearListeners(drawingManager, 'overlaycomplete')
  }

  initMap() {
    this.map = this.createMap();
    this.drawingManager = new google.maps.drawing.DrawingManager(this.state.drawingManagerProps);
    this.drawingManager.setMap(this.map);
  }

  retrieveOverlayCoordsFromMap(e) {
    let newOverlay = {overlayType: e.type, overlayRaw: e.overlay}
    this.props.handleOverlayAdd(newOverlay)
  }

  drawOverlayCoordsOnMap(overlayArr) {
    overlayArr.forEach((path) => {
      let overlay;
      let overlayCoords = path.overlayRaw.getPath().getArray().map((coordPair, i) => {
        return {lat: coordPair.lat(), lng: coordPair.lng()}
      });

      if (path.overlayType === 'polygon') {
        let polygonParams = this.state.polygonInputs(overlayCoords)

        overlay = new google.maps.Polygon(polygonParams);
      } else if (path.overlayType === 'polyline') {
        let polylineParams = this.state.polylineInputs(overlayCoords)

        overlay = new google.maps.Polyline(polylineParams);
      }
      overlay.setMap(this.map);
    })
  }

  clearMap() {
    this.props.overlayList.forEach( overlayObj => {
      overlayObj.overlayRaw.setMap(null)
    })
    // this.initMap()
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

  handleZoomChange() {
    this.setState({
      zoom: this.map.getZoom()
    })
  }

  // createMarker() {
  //   return new google.maps.Marker({
  //     position: this.mapCenter(),
  //     map: this.map
  //   })
	// }

  // createInfoWindow() {
  //   let contentString = "<div class='InfoWindow'>I'm a Window that contains Info Yay</div>"
  //   return new google.maps.InfoWindow({
  //     map: this.map,
  //     anchor: this.marker,
  //     content: contentString
  //   })
  // }

  // static propTypes() {
  //   initialCenter: React.PropTypes.objectOf(React.PropTypes.number).isRequired
  // }

}

export default MapTile;
