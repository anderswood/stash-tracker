import * as actions from '../../actions/index'


describe('actions', ()=> {

  const overlay = {
    overlayID: 1496604102896,
    overlayType: "polygon",
    overlayCoords: [
      {lat: 40.29929779151697, lng: -105.73516845703125},
      {lat: 40.31487571985247, lng: -105.70890426635742}
    ]
  }
  const overlayList = [overlay, overlay, overlay]
  const stashName = 'Name'
  const lastVisited = '6/1/17'
  const agency = 'agency'
  const description = 'description'
  const status = Date.now()
  const stashID = 123

  it('should create an action to add an overlay', () => {
    const expectedAction = {
      type: 'ADD_OVERLAY',
      overlay
    }

    expect(actions.addOverlay(overlay)).toEqual(expectedAction)
  })

  it('should create an action to reset the overlays', () => {
    const expectedAction = {
      type: 'RESET_OVERLAYS',
      overlayList
    }

    expect(actions.resetOverlays(overlayList)).toEqual(expectedAction)
  })

  it('should create an action to clear the overlay from the store', () => {
    const expectedAction = {
      type: 'CLEAR_OVERLAYS_FROM_STORE',
    }

    expect(actions.clearOverlaysFromStore()).toEqual(expectedAction)
  })

  it('should create an action to add a stash', () => {
    const expectedAction = {
      type: 'ADD_STASH',
      overlayList,
      stashName,
      lastVisited,
      agency,
      description,
      status
    }

    expect(actions.addStash(
      overlayList,
      stashName,
      lastVisited,
      agency,
      description,
      status
    )).toEqual(expectedAction)

  })

  it('should create an action to remove a stash', () => {
    const expectedAction = {
      type: 'REMOVE_STASH',
      stashID
    }

    expect(actions.removeStash(stashID)).toEqual(expectedAction)
  })

  it('should create an action to activate a stash on the map', () => {
    const expectedAction = {
      type: 'ACTIVATE_STASH',
      stashID
    }

    expect(actions.activateStash(stashID)).toEqual(expectedAction)
  })

  it('should create an action to deactivate a stash on the map', () => {
    const expectedAction = {
      type: 'DEACTIVATE_STASH'
    }

    expect(actions.deactivateStash()).toEqual(expectedAction)
  })

})
