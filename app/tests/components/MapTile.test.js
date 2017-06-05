import React from 'react'
import { shallow, mount } from 'enzyme'
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import MapTile from '../../components/MapTile'
import { stash1, stash2, stash3, overlay, overlayList } from './stubbedData'

const stashList = [stash1, stash2, stash3]

const mockStore = configureMockStore()({
  overlays: [overlay],
  stashes: [stash1, stash2, stash3],
  status: ''
})

describe('MapTile component', () => {

  it.skip('should render a map div', () => {
    const mockFunk = jest.fn()
    const initialCenter = {lng: -105.7208812, lat: 40.3058035 }

    const wrapper = mount(
      <Provider store={mockStore}>
        <MapTile  initialCenter={ initialCenter }
                  handleOverlayAdd={ mockFunk }
                  overlayList={ overlayList }/>
      </Provider>
    )

    let container = wrapper.find('.GMap')
    expect(container).toHaveLength(1)
  })

})
