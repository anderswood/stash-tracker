import { connect } from 'react-redux';

import * as actions from '../actions/index';
import MapTile from '../components/MapTile';

const mapStateToProps = (state) => {
  return {
    overlayList: state.overlays
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleOverlayAdd: (overlay) => {
      dispatch(actions.addOverlay(overlay))
    },
    handleOverlaysAdd: (overlayList) => {
      dispatch(actions.addOverlays(overlayList))
    },
    handleEditOverlay: (overlay) => {
      dispatch(actions.editOverlay(overlay))
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MapTile)
