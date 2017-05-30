import React from 'react'

const StashCard =({ stashData }) => {

  return (
    <div className='card'>
      <label>
        <svg  id='delete-new-stash'
              onClick={() => {console.log('delete clicked!')}}
              // call action to delete pass stashData.id in argument
              fill="#FFF" width="45" height="45" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
          <path d="M52.8,50l21.6,21.6l-2.8,2.8L50,52.8L28.4,74.4l-2.8-2.8L47.2,50L25.6,28.4l2.8-2.8L50,47.2l21.6-21.6l2.8,2.8L52.8,50z"></path>
        </svg>
      </label>
      <h3>{ stashData.name }</h3>
      <h4>{ stashData.lastVisited }</h4>
    </div>
  )

}

export default StashCard
