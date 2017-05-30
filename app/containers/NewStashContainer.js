import { connect } from 'react-redux';

import { addStash, removeStash, clearOverlaysFromStore } from '../actions/index';
import NewStash from '../components/NewStash';

const mapStateToProps = (state) => {
  return {
    overlayList: state.overlays
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleStashAdd: (overlayList, stashName, lastVisited, description) => {
      dispatch(addStash(overlayList, stashName, lastVisited, description))
    },
    handleStashRemove: (stash) => {
      dispatch(removeStash(stash))
    },
    handleClearOverlays: () => {
      dispatch(clearOverlaysFromStore())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewStash)
