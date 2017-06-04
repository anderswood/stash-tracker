import React from 'react'

const SaveStash = (props) => {

  const handleSave = () => {
    let { overlayList, status } = props
    let { handleClearOverlays, handleDeactivateStash, handleStashAdd } = props
    let { resetMap, newStashInfo, resetState } = props;

    let { name, lastVisited, agency, description } = newStashInfo

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
