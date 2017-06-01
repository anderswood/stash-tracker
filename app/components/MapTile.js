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
    // this.marker = this.createMarker()
    // this.infoWindow = this.createInfoWindow()

  }

  componentDidUnMount() {
    console.log('unmount');
    google.maps.event.clearListeners(map, 'zoom_changed')
    google.maps.event.clearListeners(drawingManager, 'overlaycomplete')
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

    //add event listener to 'e' for on click, which will trigger editOverlay

    let newOverlay = {
      overlayID: Date.now(),
      overlayType: e.type,
      overlayCoords: overlayCoords
    }

    this.props.handleOverlayAdd(newOverlay)
  }

  drawOverlayCoordsOnMap(overlayArr) {
    this.props.handleOverlaysAdd(overlayArr)
    overlayArr.forEach(path => {
      let overlay;

      if (path.overlayType === 'polygon') {
        let polygonParams = this.state.polygonInputs(path.overlayCoords)

        overlay = new google.maps.Polygon(polygonParams);
      } else if (path.overlayType === 'polyline') {
        let polylineParams = this.state.polylineInputs(path.overlayCoords)

        overlay = new google.maps.Polyline(polylineParams);
      }
      //add event listener on click, trigger editOverlay function
      google.maps.event.addListener(overlay.getPath(), 'insert_at', (e) => {
        console.log('set/insert');
        this.editOverlay(path)
      })

        // google.maps.event.addListener(overlay.getPath(), 'insert_at', (e) => {
        //   console.log('insert_at');
        // })

      overlay.setMap(this.map);
    })
  }

  editOverlay(path) {
    console.log(path.overlayID);
    // this.props.handleEditOverlay(path);

  }

  clearMap() {
    // this.props.overlayList.forEach( overlayObj => {
    //   overlayObj.overlayRaw.setMap(null)
    // })
    this.initMap()
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
