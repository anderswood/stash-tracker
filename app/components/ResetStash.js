import React from 'react'

const ResetStash = ({ resetMap, handleDeactivateStash, resetState }) => {

  const handleReset = () => {
    resetMap()
    handleDeactivateStash()
    resetState();
  }

  return (
    <div  id='reset-div'
          onClick={ () => handleReset() }>
      <h3>Reset</h3>
    </div>
  )

}

export default ResetStash
