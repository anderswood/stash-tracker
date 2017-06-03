export const stashes = (state=[], action) => {
  let updatedStashes = Object.assign([], state)
  let filteredStashes = updatedStashes.filter(stash => {
    return stash.id !== action.status || action.stashID
  })

  switch (action.type) {

    case 'ADD_STASH':
      let stashObj = {};
      let overlays = Object.assign([], action.overlayList)

      action.status === ''
        ? stashObj.id = Date.now()
        : stashObj.id = action.status

      stashObj.name = action.stashName;
      stashObj.overlays = overlays;
      stashObj.lastVisited = action.lastVisited;
      stashObj.agency = action.agency;
      stashObj.description = action.description;

      return [...filteredStashes, stashObj];

    case 'REMOVE_STASH':
      return [...filteredStashes]

    default:
      return state;
  }
}
