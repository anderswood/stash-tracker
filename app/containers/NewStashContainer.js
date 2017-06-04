import { connect } from 'react-redux';

import * as actions from '../actions/index';
import NewStash from '../components/NewStash';

const mapStateToProps = (state) => {
  return {
    overlayList: state.overlays,
    status: state.status,
    stashArr: state.stashes
  }
}

export default connect(mapStateToProps, null)(NewStash)
