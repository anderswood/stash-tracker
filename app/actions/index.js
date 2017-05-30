

export const addOverlay = (overlay) => {
  return {
    type: 'ADD_OVERLAY',
    overlay
  }
}

export const clearOverlaysFromStore = () => {
  return {
    type: 'CLEAR_OVERLAYS_FROM_STORE'
  }
}

export const addStash = (overlayList, stashName, lastVisited, description) => {
  return {
    type: 'ADD_STASH',
    overlayList,
    stashName,
    lastVisited,
    description
  }
}

export const removeStash = (stash) => {
  return {
    type: 'REMOVE_STASH',
    stash
  }
}

export const addMap = (map) => {
  return {
    type: 'ADD_MAP',
    map
  }
}
