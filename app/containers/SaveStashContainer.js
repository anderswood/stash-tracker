import { connect } from 'react-redux'

import * as actions from '../actions/index'
import SaveStash from '../components/SaveStash'

const mapStateToProps = (state) => {
  return {
    overlayList: state.overlays,
    status: state.status,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClearOverlays: () => {
      dispatch(actions.clearOverlaysFromStore())
    },
    handleDeactivateStash: () => {
      dispatch(actions.deactivateStash())
    },
    handleStashAdd: (overlayList, stashName, lastVisited, agency, description, status) => {
      dispatch(actions.addStash(overlayList, stashName, lastVisited, agency, description, status))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SaveStash)
