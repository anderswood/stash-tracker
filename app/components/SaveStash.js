import React from 'react'

const SaveStash = (props) => {

  const handleSave = () => {
    const { overlayList, status } = props
    const { handleClearOverlays, handleDeactivateStash, handleStashAdd } = props
    const { resetMap, newStashInfo, resetState } = props;

    const { name, lastVisited, agency, description } = newStashInfo

    handleStashAdd(overlayList, name, lastVisited, agency, description, status);
    handleClearOverlays();
    resetMap()
    handleDeactivateStash()
    resetState();
  }

  return (
    <div  id='save-div'
          onClick={() => handleSave() }>
      <h3>Save</h3>
    </div>
  )

}

export default SaveStash
