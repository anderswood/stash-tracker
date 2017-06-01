export const stashes = (state=[], action) => {
  switch (action.type) {

    case 'ADD_STASH':

      let stashObj = {};
      let overlays = Object.assign([], action.overlayList)

      stashObj.id = Date.now();
      stashObj.name = action.stashName;
      stashObj.overlays = overlays;
      stashObj.lastVisited = action.lastVisited;
      stashObj.description = action.description;

      return [...state, stashObj];

    case 'REMOVE_STASH':
      let updatedStashes = Object.assign([], state)
      let filteredStashes = updatedStashes.filter(stash => {
        return stash.id != action.stashID
      })

      return [...filteredStashes]

    default:
      return state;
  }
}
