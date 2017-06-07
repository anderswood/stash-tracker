import React from 'react'

const SaveStash = (props) => {

  const handleSave = () => {
    const { status } = props //redux state props
    const { handleClearOverlays, handleDeactivateStash, handleStashAdd } = props //redux dispatch props
    const { getOverlayList, resetMap, newStashInfo, resetState } = props; //react props

    const { name, lastVisited, agency, description } = newStashInfo

    const overlayList = getOverlayList()
    const overlayListMin = processOverlays(overlayList)

    handleStashAdd(overlayListMin, name, lastVisited, agency, description, status);
    handleClearOverlays();
    resetMap()
    handleDeactivateStash()
    resetState();
  }

  const processOverlays = (overlaysBig) => {
    let overlaysSmall = overlaysBig.map(overlay => {
      let overlayCoords = overlay.getPath().getArray().map((coordPair, i) => {
        return {lat: coordPair.lat(), lng: coordPair.lng(), id: i}
      });

      return {
        overlayID: Date.now(),
        overlayType: overlay.type,
        overlayCoords: overlayCoords
      }
    })

    return overlaysSmall
  }

  return (
    <div  id='save-div'
          onClick={ () => handleSave() }>
      <h3>Save</h3>
    </div>
  )

}

export default SaveStash
