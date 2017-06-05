import React from 'react'
import { shallow, mount } from 'enzyme'
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import StashList from '../../components/StashList'
import { stash1, stash2, stash3, overlay } from './stubbedData'

const stashList = [stash1, stash2, stash3]

const mockStore = configureMockStore()({
  overlays: [overlay],
  stashes: [stash1, stash2, stash3],
  status: ''
})

describe('StashList component', () => {

  it('should render some cards', () => {
    const mockFunk = jest.fn()
    const wrapper = mount(
      <Provider store={mockStore}>
        <StashList  handleResetMap={ mockFunk }
                    handleAddOverlays={ mockFunk }
                    stashList={ stashList }/>
      </Provider>
    )

    let container = wrapper.find('.card')
    expect(container).toHaveLength(3)
  })

})
