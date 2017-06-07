import React from 'react'

const ShowAllButton = (props) => {

  const handleShowAll = () => {
    let overlaysConsolidatedArr = []

    props.stashList.forEach( stash => {
      stash.overlays.forEach( overlay => {
        overlaysConsolidatedArr.push(overlay)
      })
    })

    props.drawOverlays(overlaysConsolidatedArr)
  }

  return (
    <div  id='show-all-btn'
          className='btn'
          onClick={ () => handleShowAll() }>
      <h3>Show All</h3>
    </div>
  )
}

export default ShowAllButton
