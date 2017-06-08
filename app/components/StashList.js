import React from 'react'

import StashCardContainer from '../containers/StashCardContainer.js'
import ShowAllButtonContainer from '../containers/ShowAllButtonContainer'

const StashList = (props) => {

  const stashListArr = props.stashList.map( (stash, i) => {
    return <StashCardContainer  stashData={ stash }
                                resetMap={ props.handleResetMap }
                                resetOverlays={ props.handleResetOverlays }
                                drawOverlays={ props.handleAddOverlays }
                                key={ i }/>
  })

  return (
    <div id='stash-div'>
      <h2>Stashes</h2>
      <div id='stash-list'>{ stashListArr }</div>
      <ShowAllButtonContainer drawOverlays={ props.handleAddOverlays } />
    </div>

  )

}

export default StashList
