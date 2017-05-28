import { connect } from 'react-redux';

import StashList from '../components/StashList';

const mapStateToProps = (state) => {
  return {
    stashList: state.stashes
  }
}


export default connect(mapStateToProps, null)(StashList)
