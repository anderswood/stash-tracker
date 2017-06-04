import { connect } from 'react-redux';

import * as actions from '../actions/index';
import DeleteStash from '../components/DeleteStash';

// const mapStateToProps = (state) => {
//   return {
//     activeStash: state.status
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    handleClearOverlays: () => {
      dispatch(actions.clearOverlaysFromStore())
    },
    handleRemoveStash: (stashID) => {
      dispatch(actions.removeStash(stashID))
    },
  }
}

export default connect(null , mapDispatchToProps)(DeleteStash)
