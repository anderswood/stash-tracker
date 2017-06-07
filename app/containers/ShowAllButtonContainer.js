import { connect } from 'react-redux';

import ShowAllButton from '../components/ShowAllButton';

const mapStateToProps = (state) => {
  return {
    stashList: state.stashes
  }
}

export default connect(mapStateToProps, null)(ShowAllButton)
