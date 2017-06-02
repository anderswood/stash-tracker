import React from 'react'

const StashCard =(props) => {
  let  {
    activeStash,
    drawOverlays,
    handleOverlayReset,
    handleClearOverlays,
    handleRemoveStash,
    handleActivateStash,
    handleDeactivateStash,
    resetMap,
    stashData,
  } = props

  const removeCard = () => {
    handleRemoveStash(stashData.id)
    handleClearOverlays();
  }

  const clickCard = () => {
    resetMap()
    if (activeStash === stashData.id) {
      handleDeactivateStash()
    } else {
      handleActivateStash(stashData.id)
      // updateInputFields()
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
      <label>
        <svg  className='delete-stash'
              onClick={(e) => {
                e.stopPropagation()
                removeCard()
              }}
              fill="#FFF" width="25" height="25" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
          <path d="M52.8,50l21.6,21.6l-2.8,2.8L50,52.8L28.4,74.4l-2.8-2.8L47.2,50L25.6,28.4l2.8-2.8L50,47.2l21.6-21.6l2.8,2.8L52.8,50z"></path>
        </svg>
      </label>
      <h3>{ stashData.name }</h3>
      <h4>{ stashData.lastVisited }</h4>
    </div>
  )

}

export default StashCard
