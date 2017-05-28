

export const addOverlay = (overlay) => {
  return {
    type: 'ADD_OVERLAY',
    overlay
  }
}

export const addStash = (stash) => {
  return {
    type: 'ADD_STASH',
    stash
  }
}

export const removeStash = (stash) => {
  return {
    type: 'REMOVE_STASH',
    stash
  }
}
