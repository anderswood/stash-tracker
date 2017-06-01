import { connect } from 'react-redux';

import * as actions from '../actions/index';
import NewStash from '../components/NewStash';

const mapStateToProps = (state) => {
  return {
    overlayList: state.overlays
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleStashAdd: (overlayList, stashName, lastVisited, description) => {
      dispatch(actions.addStash(overlayList, stashName, lastVisited, description))
    },
    handleStashRemove: (stash) => {
      dispatch(actions.removeStash(stash))
    },
    handleClearOverlays: () => {
      dispatch(actions.clearOverlaysFromStore())
    },
    handleDeactivateStash: () => {
      dispatch(actions.deactivateStash())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewStash)
