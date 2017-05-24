import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import DrawingManager from 'react-google-maps/lib/drawing/DrawingManager'
import SearchBox from "react-google-maps/lib/places/SearchBox";

const MyMap = withGoogleMap(props => {

  google.maps.event.addListener(DrawingManager, 'circlecomplete', function(circle) {
    var radius = circle.getRadius();
    console.log(radius);
  });

  // google.maps.event.addListener(drawingManager, 'overlaycomplete', function(event) {
  //   if (event.type == 'circle') {
  //     var radius = event.overlay.getRadius();
  //   }
  // });

  // drawingManager.setMap(GoogleMap);

  const drawManagerDefaults = {
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: [
        google.maps.drawing.OverlayType.MARKER,
        google.maps.drawing.OverlayType.CIRCLE,
        google.maps.drawing.OverlayType.POLYGON,
        google.maps.drawing.OverlayType.POLYLINE,
        google.maps.drawing.OverlayType.RECTANGLE,
      ],
    },
    circleOptions: {
      fillColor: `#ffff00`,
      fillOpacity: 1,
      strokeWeight: 5,
      clickable: true,
      editable: true,
      zIndex: 1,
    },
    polygonOptions: {
      fillColor: `#ffff00`,
      fillOpacity: 1,
      strokeWeight: 5,
      clickable: true,
      editable: true,
      zIndex: 1,
    }
  }

  return (
    <div>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat:39.73915 , lng: -104.9847 }}
        defaultMapTypeId={'terrain'}>

        <DrawingManager
          defaultDrawingMode={google.maps.drawing.OverlayType.CIRCLE}
          defaultOptions={drawManagerDefaults}
        />

      </GoogleMap>
  </div>
  )

})

export default MyMap




// let drawingManager = new google.maps.drawing.DrawingManager({
//   drawingMode: google.maps.drawing.OverlayType.MARKER,
//   drawingControl: true,
//   drawingControlOptions: {
//     position: google.maps.ControlPosition.TOP_CENTER,
//     drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
//   },
//   markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
//   circleOptions: {
//     fillColor: '#ffff00',
//     fillOpacity: 1,
//     strokeWeight: 5,
//     clickable: false,
//     editable: true,
//     zIndex: 1
//   }
// });
