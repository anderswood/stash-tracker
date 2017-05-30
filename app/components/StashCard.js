import React from 'react'

const StashCard =({ stashData }) => {

  return (
    <div className='card'>
      <h3>{ stashData.name }</h3>
      <h4>{ stashData.lastVisited }</h4>
    </div>
  )

}

export default StashCard
