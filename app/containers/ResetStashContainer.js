import { connect } from 'react-redux'

import * as actions from '../actions/index'
import ResetStash from '../components/ResetStash'

const mapDispatchToProps = (dispatch) => {
  return {
    handleDeactivateStash: () => {
      dispatch(actions.deactivateStash())
    }
  }
}

export default connect(null, mapDispatchToProps)(ResetStash)
