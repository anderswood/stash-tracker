import { connect } from 'react-redux';

import { addStash, removeStash } from '../actions/index';
import NewStash from '../components/NewStash';

const mapDispatchToProps = (dispatch) => {
  return {
    handleStashAdd: (stash) => {
      dispatch(addStash(stash))
    },
    handleStashRemove: (stash) => {
      dispatch(removeStash(stash))
    }
  }
}

export default connect(null, mapDispatchToProps)(NewStash)
