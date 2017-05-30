
export const overlays = (state = [], action) => {
  switch (action.type) {

    case 'ADD_OVERLAY':
      return [...state, action.overlay]

    case 'CLEAR_OVERLAYS_FROM_STORE':
      return [];

    default:
      return state;
  }

}
