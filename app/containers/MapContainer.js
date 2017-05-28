import { connect } from 'react-redux';

import { addOverlay } from '../actions/index';
import MapTile from '../components/MapTile';

const mapDispatchToProps = (dispatch) => {
  return {
    handleOverlayAdd: (overlay) => {
      console.log('in mapp container');
      dispatch(addOverlay(overlay))
    }
  }

}

export default connect(null, mapDispatchToProps)(MapTile)
