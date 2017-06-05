import { status } from '../../reducers/status-reducer'


describe('Status Reducer Tests', () => {

  it('should activate a stash', () => {
    const stashID = 123
    const action = {
      type: 'ACTIVATE_STASH',
      stashID
    }

    expect(status('' , action)).toEqual(stashID)
  })

  it('should deactivate a stash', () => {
    const action = {
      type: 'DEACTIVATE_STASH'
    }

    expect(status(123 , action)).toEqual('')
  })

})
