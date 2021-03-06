

export const addOverlay = (overlay) => {
  return {
    type: 'ADD_OVERLAY',
    overlay
  }
}

export const resetOverlays = (overlayList) => {
  return {
    type: 'RESET_OVERLAYS',
    overlayList
  }
}

export const clearOverlaysFromStore = () => {
  return {
    type: 'CLEAR_OVERLAYS_FROM_STORE'
  }
}

export const addStash = (overlayList, stashName, lastVisited, agency, description, status) => {
  return {
    type: 'ADD_STASH',
    overlayList,
    stashName,
    lastVisited,
    agency,
    description,
    status
  }
}

export const removeStash = (stashID) => {
  return {
    type: 'REMOVE_STASH',
    stashID
  }
}

export const activateStash = (stashID) => {
  return {
    type: 'ACTIVATE_STASH',
    stashID
  }
}

export const deactivateStash = () => {
  return {
    type: 'DEACTIVATE_STASH'
  }
}
