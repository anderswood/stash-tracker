import React from 'react'
import StashCard from './StashCard'

const StashList = (props) => {

  const stashListArr = props.stashList.map( (stash, i) => {
    return <StashCard stashData={ stash } 
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
