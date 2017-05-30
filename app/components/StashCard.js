import React from 'react'

const StashCard =({ stashData }) => {

  console.log(stashData.name);
  console.log(stashData);

return (
  <div className='card'>
    <h3>{ stashData.name }</h3>
    <h4>{ stashData.lastVisited }</h4>
  </div>
)

}

export default StashCard
