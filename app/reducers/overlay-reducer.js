
export const overlays = (state = [], action) => {
  switch (action.type) {

    case 'ADD_OVERLAY':
      return [...state, action.overlay]

    case 'RESET_OVERLAYS':
      return [...action.overlayList]

    case 'CLEAR_OVERLAYS_FROM_STORE':
      return [];

    default:
      return state;
  }

}
