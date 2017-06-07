import React from 'react'

const ShowAllButton = (props) => {

  const handleShowAll = () => {
    console.log(props.stashList);
    props.stashList.forEach(stash => {
      props.drawOverlays(stash.overlays)
    })
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
