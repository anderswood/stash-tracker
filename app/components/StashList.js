import React from 'react'

import StashCardContainer from '../containers/StashCardContainer.js'
import ShowAllButtonContainer from '../containers/ShowAllButtonContainer'

const StashList = (props) => {

  const stashListArr = props.stashList.map( (stash, i) => {
    return <StashCardContainer  stashData={ stash }
                                resetMap={ props.handleResetMap }
                                drawOverlays={ props.handleAddOverlays }
                                key={ i }/>
  })

  return (
    <div id='stash-div'>
      <ShowAllButtonContainer drawOverlays={ props.handleAddOverlays } />
      <h2>Stashes</h2>
      <div id='stash-list'>{ stashListArr }</div>
    </div>

  )

}

export default StashList
