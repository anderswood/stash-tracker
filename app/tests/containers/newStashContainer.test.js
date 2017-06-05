import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import NewStashContainer from '../../containers/NewStashContainer'
import NewStash from '../../components/NewStash'

const mockStore = configureMockStore ()({
  overlays: [],
  stashes: [],
  status: ''
})

const setup = () => {
  const Container = mount(<Provider store={mockStore}>
    <NewStashContainer/>
  </Provider>)

  const Component = Container.find(NewStash);

  return {
    Container,
    Component
  }
}

describe('NewStashContainer', ()=>{
  const { Container, Component } = setup()

  it('should pass down the correct action creators', () => {
    expect(Object.keys(Component.props())).toContain('overlayList');
  })

  it('should pass down the correct action creators', () => {
    expect(Object.keys(Component.props())).toContain('status');
  })

})
