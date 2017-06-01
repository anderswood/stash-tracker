
export const status = (state = null, action) => {
  switch (action.type) {

    case 'ACTIVATE_STASH':
      return action.stashID

    case 'DEACTIVATE_STASH':
      return null

    default:
      return state;
  }

}
