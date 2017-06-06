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

  // componentWillUnmount() {
  //   google.maps.event.clearListeners(map, 'zoom_changed')
  //   google.maps.event.clearListeners(drawingManager, 'overlaycomplete')
  // }

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

    google.maps.event.addListener(this.drawingManager, 'overlaycomplete', (completeEvent) => {
      if (completeEvent.type === 'polygon' || completeEvent.type === 'polyline') {
        this.drawingManager.setDrawingMode(null)

        let newShape = completeEvent.overlay
        newShape.type = completeEvent.type
        newShape.id = Date.now()

        google.maps.event.addListener(newShape, 'click', ()=> {
          this.setSelectedShape(newShape)

          google.maps.event.addListener(newShape.getPath(), 'insert_at', (e) => {
            // this.setSelectedShape(newShape)
            this.retrieveOverlayCoordsFromMap(newShape);
          })

          google.maps.event.addListener(newShape.getPath(), 'set_at', (e) => {
            // this.setSelectedShape(newShape)
            this.retrieveOverlayCoordsFromMap(newShape);
          })

        })

        google.maps.event.addListener(this.drawingManager, 'drawingmode_changed', () => {
          if (this.state.selectedOverlay) {
            this.state.selectedOverlay.setEditable(false)
          }
          this.setState({selectedOverlay: ''})
        })

        this.setSelectedShape(newShape)
        console.log('end of overlay complete');
        this.retrieveOverlayCoordsFromMap(newShape);
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

    // let overlayCoords = newShape.getPath().getArray().map((coordPair, i) => {
    //   return {lat: coordPair.lat(), lng: coordPair.lng(), id: i}
    // });
    //
    // let newOverlay = {
    //   overlayID: Date.now(),
    //   overlayType: newShape.type,
    //   overlayCoords: overlayCoords
    // }

    // this.props.handleOverlayAdd(newOverlay)
    // console.log('overlayCoords', newShape);
  }

  saveOverlayList () {
    let activeOverlays = this.state.activeOverlays

    this.setState({
      selectedOverlay: '',
      activeOverlays: [],
    })

    return activeOverlays
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
