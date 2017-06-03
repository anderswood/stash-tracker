
export const status = (state = '', action) => {
  switch (action.type) {

    case 'ACTIVATE_STASH':
      return action.stashID

    case 'DEACTIVATE_STASH':
      return ''

    default:
      return state;
  }

}
