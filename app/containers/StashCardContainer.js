import { connect } from 'react-redux';

import { resetOverlays } from '../actions/index';
import StashCard from '../components/StashCard';

// const mapStateToProps = (state) => {
//   return {
//     overlayList: state.overlays
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    handleOverlayReset: (overlays) => {
      dispatch(resetOverlays(overlays))
    }
  }

}

export default connect(null , mapDispatchToProps)(StashCard)
