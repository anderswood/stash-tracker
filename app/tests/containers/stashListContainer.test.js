import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import StashListContainer from '../../containers/StashListContainer'
import StashList from '../../components/StashList'

const mockStore = configureMockStore ()({
  overlays: [],
  stashes: [],
  status: ''
})

const setup = () => {
  const Container = mount(
    <Provider store={mockStore}>
      <StashListContainer/>
    </Provider>)

  const Component = Container.find(StashList);

  return { Container, Component }
}

describe('StashListContainer', ()=>{
  const { Container, Component } = setup()

  it('should pass down the correct action creators', () => {
    expect(Object.keys(Component.props())).toContain('stashList');
  })

})
