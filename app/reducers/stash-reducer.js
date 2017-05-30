export const stashes = (state=[], action) => {
  switch (action.type) {

    case 'ADD_STASH':

      let stashObj = {};
      stashObj.name = action.stashName;
      stashObj.overlays = action.overlayList;
      stashObj.lastVisited = action.lastVisited;
      stashObj.description = action.description;

      return [...state, stashObj];

    // case 'REMOVE_STASH':
    //   return []

    default:
      return state;
  }
}
