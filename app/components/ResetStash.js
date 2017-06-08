import React from 'react'

const ResetStash = ({ resetMap, handleDeactivateStash, resetOverlays, resetState }) => {

  const handleReset = () => {
    resetMap()
    handleDeactivateStash()
    resetOverlays()
    resetState();
  }

  return (
    <div  id='reset-div'
          className='btn'
          onClick={ () => handleReset() }>
      <h3>Reset</h3>
    </div>
  )

}

export default ResetStash
