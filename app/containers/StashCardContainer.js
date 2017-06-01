import { connect } from 'react-redux';

import * as actions from '../actions/index';
import StashCard from '../components/StashCard';

const mapStateToProps = (state) => {
  return {
    activeStash: state.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleOverlayReset: (overlays) => {
      dispatch(actions.resetOverlays(overlays))
    },
    handleClearOverlays: () => {
      dispatch(actions.clearOverlaysFromStore())
    },
    handleRemoveStash: (stashID) => {
      dispatch(actions.removeStash(stashID))
    },
    handleActivateStash: (stashID) => {
      dispatch(actions.activateStash(stashID))
    },
    handleDeactivateStash: () => {
      dispatch(actions.deactivateStash())
    }
  }

}

export default connect(mapStateToProps , mapDispatchToProps)(StashCard)
