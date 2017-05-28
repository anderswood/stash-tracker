
export const overlays = (state = [], action) => {
  switch (action.type) {

    case 'ADD_OVERLAY':
      return [...state, action.overlay]

    default:
      return state;
  }

}
