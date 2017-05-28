export const stashes = (state=[], action) => {
  switch (action.type) {

    case 'ADD_STASH':
      return [...state, action.stash];

    // case 'REMOVE_STASH':
    //   return []

    default:
      return state;
  }
}
