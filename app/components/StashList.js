import React from 'react'
import StashCardContainer from '../containers/StashCardContainer.js'

const StashList = (props) => {

  // console.log(props);

  const stashListArr = props.stashList.map( (stash, i) => {
    return <StashCardContainer stashData={ stash }
                      resetMap={ props.handleClearMap }
                      drawOverlays={ props.handleAddOverlays }
                      key={ i }/>
  })

  return (
    <div id='stash-list'>
      <h2>Stashes</h2>
      <div>{ stashListArr }</div>
    </div>

  )

}

export default StashList
