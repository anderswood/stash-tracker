import React, { Component } from 'react'

export default class Map extends Component {
  constructor (props) {
    super(props)
    this.state = {
      zoom: 13,
      paths: []
    }
  }

  render() {
    return (
      <div className='GMap'>
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

  static propTypes() {
    initialCenter: React.PropTypes.objectOf(React.PropTypes.number).isRequired
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
    let updatePaths = Object.assign([], this.state.paths)
    let overlayPath = e.overlay.getPath().getArray().map((coordPair, i) => {
      return {lat: coordPair.lat(), lng: coordPair.lng()}
    });

    updatePaths.push({type: e.type, coords: overlayPath})
    this.setState({paths: updatePaths});
  }

  drawOverlayCoordsOnMap() {
    let paths = Object.assign([], this.state.paths)
    // let firstPath = this.state.paths[0]
    let overlayCoordsArr = [{}]

    paths.forEach((path) => {

      console.log('pathObj: ', path);

      let overlay;
      let overlayCoordsArr = path.coords;

      let polygonParams = {
        paths: overlayCoordsArr,
        editable: true,
        draggable: true,
        strokeColor: '#E4801C',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#E4801C',
        fillOpacity: 0.2
      }

      let polylineParams = {
        path: overlayCoordsArr,
        editable: true,
        draggable: true,
        geodesic: true,
        strokeColor: '#E4801C',
        strokeOpacity: 0.8,
        strokeWeight: 2
      }

      if (path.type === 'polygon') {
        overlay = new google.maps.Polygon(polygonParams);
      } else if (path.type === 'polyline') {
        overlay = new google.maps.Polyline(polylineParams);
      }
      overlay.setMap(this.map);

    })

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
