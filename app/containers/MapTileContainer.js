import { connect } from 'react-redux';

import { addOverlay } from '../actions/index';
import MapTile from '../components/MapTile';

const mapStateToProps = (state) => {
  return {
    overlayList: state.overlays
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleOverlayAdd: (overlay) => {
      dispatch(addOverlay(overlay))
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MapTile)
