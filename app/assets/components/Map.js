import React, { Component } from 'react'

// import MapContainer from './MapContainer'

export default class Map extends Component {
  constructor (props) {
    super(props)
    this.state = { zoom: 13}
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
      </div>
    )
  }

  componentDidMount() {
    // create the map, marker and infoWindow after the component has
    // been rendered because we need to manipulate the DOM for Google =(
    this.map = this.createMap()

    this.drawingManager = new google.maps.drawing.DrawingManager(this.drawingManagerProps());
    this.drawingManager.setMap(this.map);

    this.marker = this.createMarker()
    this.infoWindow = this.createInfoWindow()

    // have to define google maps event listeners here too
    // because we can't add listeners on the map until its created
    google.maps.event.addListener(this.map, 'zoom_changed', ()=> this.handleZoomChange())

    google.maps.event.addListener(this.drawingManager, 'overlaycomplete', function(event) {
      // if (event.type == 'circle') {
      //   var radius = event.overlay.getRadius();
      // }
      console.log(event.overlay.latLngs);
    });

  }

  // clean up event listeners when component unmounts
  componentDidUnMount() {
    google.maps.event.clearListeners(map, 'zoom_changed')
  }

  drawingManagerProps() {
    return {
      drawingMode: google.maps.drawing.OverlayType.MARKER,
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
