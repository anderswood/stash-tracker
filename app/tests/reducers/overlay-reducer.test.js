import { overlays } from '../../reducers/overlay-reducer'

const overlay = {
  overlayID: 1496604102896,
  overlayType: "polygon",
  overlayCoords: [
    {lat: 40.29929779151697, lng: -105.73516845703125},
    {lat: 40.31487571985247, lng: -105.70890426635742}
  ]
}

const overlayList = [overlay, overlay]

describe('Overlay Reducer tests', () => {

  it('default case should return state', () => {

    expect(overlays([], {})).toEqual([])
  })

  it('should add an overlay to state', () => {
    const action = {
      type: 'ADD_OVERLAY',
      overlay
    }

    expect(overlays([], action)).toHaveLength(1)
    expect(overlays([ action ], action)).toHaveLength(2)
  })

  it('should reset state to the overlayList', () => {
    const action = {
      type: 'RESET_OVERLAY',
      overlayList
    }

    expect(overlays([ action ], action)).toHaveLength(1)
  })

  it('should clear overlays from state', () => {
    const action = {
      type: 'CLEAR_OVERLAYS_FROM_STORE'
    }

    expect(overlays([ action ], action)).toHaveLength(0)
  })

})
