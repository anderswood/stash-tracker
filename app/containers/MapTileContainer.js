import { connect } from 'react-redux';

import { addOverlay } from '../actions/index';
import MapTile from '../components/MapTile';

const mapDispatchToProps = (dispatch) => {
  return {
    handleOverlayAdd: (overlay) => {
      dispatch(addOverlay(overlay))
    }
  }

}

export default connect(null, mapDispatchToProps)(MapTile)
