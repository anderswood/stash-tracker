import React from 'react'

import DeleteStashContainer from '../containers/DeleteStashContainer'

const StashCard =(props) => {
  const  { activeStash } = props //redux state props
  const { drawOverlays, resetMap, stashData } = props //react props
  const {
    handleClearOverlays,
    handleOverlayReset,
    handleActivateStash,
    handleDeactivateStash
  } = props //redux dispatch props

  const clickCard = () => {

    if (activeStash === stashData.id) {
      handleDeactivateStash()
      handleClearOverlays()
      resetMap()
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
