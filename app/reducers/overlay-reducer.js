
export const overlays = (state = [], action) => {
  switch (action.type) {

    case 'ADD_OVERLAY':
      return [...state, action.overlay]

    case 'ADD_OVERLAYS':
      return [...action.overlayList]

    case 'EDIT_OVERLAY':
      let updatedState = Object.assign([], state)
      let filteredState = updatedState.filter( overlayObj => {
        console.log('overlayObj', overlayObj);
        console.log('over', action.overlay);

        return overlayObj.id != action.overlay.id
      })

      return [...filteredState, action.overlay]

    case 'RESET_OVERLAYS':
      return [...action.overlayList]

    case 'CLEAR_OVERLAYS_FROM_STORE':
      return [];

    default:
      return state;
  }

}
