import React, { Component } from 'react'

import {polygonParams, polylineParams, drawmingMgrProps} from './mapSettings'
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

  componentDidMount() {
    this.initMap();
  }

  componentDidUnMount() {
    google.maps.event.clearListeners(map, 'zoom_changed')
    google.maps.event.clearListeners(drawingManager, 'overlaycomplete')
  }

  render() {
    return (
      <div id='content-div'>
        <div className='GMap'>
          <div className='GMap-canvas' ref="mapCanvas"></div>
          <NewStashContainer handleResetMap={ this.initMap.bind(this) } />
        </div>
        <StashListContainer handleResetMap={ this.initMap.bind(this) }
                            handleAddOverlays={ this.drawOverlayCoordsOnMap.bind(this) }/>
      </div>
    )
  }

  initMap() {
    this.map = this.createMap();
    this.drawingManager = new google.maps.drawing.DrawingManager(this.state.drawingManagerProps);
    this.drawingManager.setMap(this.map);

    google.maps.event.addListener(this.map, 'zoom_changed', ()=> this.handleZoomChange())

    google.maps.event.addListener(this.drawingManager, 'overlaycomplete', (event) => {
      if (event.type === 'polygon' || event.type === 'polyline') {
        this.retrieveOverlayCoordsFromMap(event)
      }
    });
  }

  retrieveOverlayCoordsFromMap(e) {
    let overlayCoords = e.overlay.getPath().getArray().map((coordPair, i) => {
      return {lat: coordPair.lat(), lng: coordPair.lng()}
    });

    let newOverlay = {
      overlayID: Date.now(),
      overlayType: e.type,
      overlayCoords: overlayCoords
    }

    this.props.handleOverlayAdd(newOverlay)
  }

  drawOverlayCoordsOnMap(overlayArr) {
    overlayArr.forEach(path => {
      let overlay;

      if (path.overlayType === 'polygon') {
        let polygonParams = this.state.polygonInputs(path.overlayCoords)
        overlay = new google.maps.Polygon(polygonParams);
      } else if (path.overlayType === 'polyline') {
        let polylineParams = this.state.polylineInputs(path.overlayCoords)
        overlay = new google.maps.Polyline(polylineParams);
      }

      overlay.setMap(this.map);
    })
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

}

export default MapTile;
