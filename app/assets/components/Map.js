import React, { Component } from 'react'

// import MapContainer from './MapContainer'

export default class Map extends Component {
  constructor (props) {
    super(props)
    this.state = {
      zoom: 13,
      paths: []
    }
  }

  static propTypes() {
   	initialCenter: React.PropTypes.objectOf(React.PropTypes.number).isRequired
  }

  render() {
    return (
      <div className='GMap'>
        <div>Hello World</div>
          <div  className='GMap-canvas'
                ref="mapCanvas"
                style={{ height: "400px"}}>
          </div>
        <div>after the map</div>
        <button onClick={ () => this.storeCoordsToLocalStorage() }>SET COORDS</button>
        <button onClick={ () => this.retrieveCoordsFromLocalStorage() }>RETRIEVE COORDS</button>
        <button onClick={ () => this.drawOverlayCoordsOnMap() }>DRAW COORDS</button>
      </div>
    )
  }

  componentDidMount() {

    this.map = this.createMap()

    this.drawingManager = new google.maps.drawing.DrawingManager(this.drawingManagerProps());
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

  storeCoordsToLocalStorage() {
    localStorage.setItem('paths', JSON.stringify(this.state.paths))
  }

  retrieveCoordsFromLocalStorage() {
    this.setState({paths: JSON.parse(localStorage.getItem('paths'))})
  }

  retrieveOverlayCoordsFromMap(e) {
    let updateState = Object.assign([], this.state.paths)
    let overlayPath = e.overlay.getPath().getArray().map((coordPair, i) => {
      return {lat: coordPair.lat(), lng: coordPair.lng()}
    });

    updateState.push({type: e.type, coords: overlayPath})
    this.setState({paths: updateState});
  }

  drawOverlayCoordsOnMap() {
    
  }

  drawingManagerProps() {
    return {
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
      },
      markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
      polygonOptions: {
        fillColor: '#ffff00',
        fillOpacity: 1,
        strokeWeight: 5,
        clickable: true,
        editable: true,
        zIndex: 1
      }
    }
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
