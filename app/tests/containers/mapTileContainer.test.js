import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import MapTileContainer from '../../containers/MapTileContainer'
import MapTile from '../../components/MapTile'

const mockStore = configureMockStore ()({
  overlays: [],
  stashes: [],
  status: ''
})

const setup = () => {
  const Container = mount(
    <Provider store={mockStore}>
      <MapTileContainer/>
    </Provider>)

  const Component = Container.find(MapTile);

  return {
    Container,
    Component
  }
}

describe.skip('MapTileContainer', ()=>{
  const { Container, Component } = setup()

  it('should pass down the correct action creators', () => {
    expect(Object.keys(Component.props())).toContain('overlayList');
  })

  it('should pass down the correct action creators', () => {
    expect(Object.keys(Component.props())).toContain('handleOverlayAdd');
  })

})
