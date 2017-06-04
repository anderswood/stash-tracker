import React from 'react'

import DeleteStashContainer from '../containers/DeleteStashContainer'

const StashCard =(props) => {
  let  {
    activeStash,
    drawOverlays,
    handleOverlayReset,
    handleActivateStash,
    handleDeactivateStash,
    resetMap,
    stashData,
  } = props

  const clickCard = () => {
    resetMap()

    if (activeStash === stashData.id) {
      handleDeactivateStash()
    } else {
      handleActivateStash(stashData.id)
      drawOverlays(stashData.overlays)
      handleOverlayReset(stashData.overlays)
    }

  }

  const getClass = () => {
    return activeStash === stashData.id ? 'card active-card' : 'card';
  }

  return (
    <div  className={ getClass() }
          onClick={ () => clickCard() }>
      <DeleteStashContainer stashID={ stashData.id }/>
      <h3>{ stashData.name }</h3>
      <h4>{ stashData.lastVisited }</h4>
    </div>
  )

}

export default StashCard
