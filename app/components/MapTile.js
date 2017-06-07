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
      selectedOverlay: '',
      activeOverlays: [],
    }
  }

  componentDidMount() {
    this.initMap();
  }

  render() {
    return (
      <div id='content-div'>
        <div className='GMap'>
          <div className='GMap-canvas' ref="mapCanvas"></div>
          <NewStashContainer  sendOverlayList={ this.saveOverlayList.bind(this) }
                              handleResetMap={ this.initMap.bind(this) } />
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

    google.maps.event.addListener(this.drawingManager, 'drawingmode_changed', () => {
      if (this.state.selectedOverlay) {
        this.state.selectedOverlay.setEditable(false)
      }
      this.setState({selectedOverlay: ''})
    })

    google.maps.event.addListener(this.drawingManager, 'overlaycomplete', (completeEvent) => {
      if (completeEvent.type === 'polygon' || completeEvent.type === 'polyline') {
        this.drawingManager.setDrawingMode(null)

        let newShape = completeEvent.overlay
        newShape.type = completeEvent.type
        newShape.id = Date.now()

        this.addClickListener(newShape)
        this.retrieveOverlayCoordsFromMap(newShape);
        this.setSelectedShape(newShape)
      }
    });
  }

  setSelectedShape(selectedShape) {
    if (this.state.selectedOverlay) {
      this.state.selectedOverlay.setEditable(false)
    }

    selectedShape.setEditable(true);
    this.setState({selectedOverlay: selectedShape});
  }

  retrieveOverlayCoordsFromMap(newShape) {
    let updatedOverlays = Object.assign([], this.state.activeOverlays)
    let filteredOverlays = updatedOverlays.filter( overlay => {
      return newShape.id !== overlay.id
    })

    filteredOverlays.push(newShape)
    this.setState({
      activeOverlays: filteredOverlays
    })

  }

  saveOverlayList () {
    let activeOverlays = this.state.activeOverlays

    this.setState({
      selectedOverlay: '',
      activeOverlays: [],
    })

    return activeOverlays
  }

  addClickListener(newShape) {
    google.maps.event.addListener(newShape, 'click', ()=> {
      this.setSelectedShape(newShape)

      google.maps.event.addListener(newShape.getPath(), 'insert_at', (e) => {
        this.retrieveOverlayCoordsFromMap(newShape);
      })

      google.maps.event.addListener(newShape.getPath(), 'set_at', (e) => {
        this.retrieveOverlayCoordsFromMap(newShape);
      })

    })
  }

  drawOverlayCoordsOnMap(overlayArr) {
    this.initMap()

    overlayArr.forEach( path => {
      let overlay;

      if (path.overlayType === 'polygon') {
        let polygonParams = this.state.polygonInputs(path.overlayCoords)
        overlay = new google.maps.Polygon(polygonParams);
      } else if (path.overlayType === 'polyline') {
        let polylineParams = this.state.polylineInputs(path.overlayCoords)
        overlay = new google.maps.Polyline(polylineParams);
      }
      console.log(overlay);
      this.addClickListener(overlay)
      this.retrieveOverlayCoordsFromMap(overlay)
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
