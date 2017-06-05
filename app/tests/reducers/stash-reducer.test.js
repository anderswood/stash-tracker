import { stashes } from '../../reducers/stash-reducer'

const overlay = {
  overlayID: 1,
  overlayType: "polygon",
  overlayCoords: [
    {lat: 40.29929779151697, lng: -105.73516845703125},
    {lat: 40.31487571985247, lng: -105.70890426635742}
  ]
}

let overlayList = [overlay, overlay]

const stash1 = {
  id: 1,
  name: 'name',
  overlays: overlayList,
  lastVisited: '3',
  agency: 'agency',
  description: 'descriptiong'
}

const stash2 = {
  id: 12,
  name: 'name',
  overlays: overlayList,
  lastVisited: '3',
  agency: 'agency',
  description: 'descriptiong'
}

const stashList = [stash1, stash2]
const stashName = 'Name'
const lastVisited = '6/1/17'
const agency = 'agency'
const description = 'description'
let status = Date.now()
let stashID = 123

describe('StashReducer Test', () => {

  it('default case should return state', () => {
    expect(stashes([], {})).toEqual([])
  })

  it('should add a stash to state if that stash ID does not currently exist', () => {
    const action = {
      type: 'ADD_STASH',
      overlayList,
      stashName,
      lastVisited,
      agency,
      description,
      status
    }

    expect(stashes(stashList, action)).toHaveLength(3)
  })

  it('should add a stash to state, filtering out duplicate stash IDs', () => {
    status = 12
    const action = {
      type: 'ADD_STASH',
      overlayList,
      stashName,
      lastVisited,
      agency,
      description,
      status
    }

    expect(stashes(stashList, action)).toHaveLength(2)
  })

  it('should remove a stash', () => {
    stashID = 12
    const action = {
      type: 'REMOVE_STASH',
      stashID
    }

    expect(stashes(stashList, action)).toHaveLength(1)
  })

})
