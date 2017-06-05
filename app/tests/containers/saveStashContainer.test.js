import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import SaveStashContainer from '../../containers/SaveStashContainer'
import SaveStash from '../../components/SaveStash'

const mockStore = configureMockStore ()({
  overlays: [],
  stashes: [],
  status: ''
})

const setup = () => {
  const Container = mount(
    <Provider store={mockStore}>
      <SaveStashContainer/>
    </Provider>)

  const Component = Container.find(SaveStash);

  return {
    Container,
    Component
  }
}

describe('SaveStashContainer', ()=>{
  const { Container, Component } = setup()

  it('should pass down the correct action creators', () => {
    expect(Object.keys(Component.props())).toContain('overlayList');
  })

  it('should pass down the correct action creators', () => {
    expect(Object.keys(Component.props())).toContain('status');
  })

  it('should pass down the correct action creators', () => {
    expect(Object.keys(Component.props())).toContain('handleDeactivateStash');
  })

})
