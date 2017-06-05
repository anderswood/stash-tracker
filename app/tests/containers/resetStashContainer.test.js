import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import ResetStashContainer from '../../containers/ResetStashContainer'
import ResetStash from '../../components/ResetStash'

const mockStore = configureMockStore ()({
  overlays: [],
  stashes: [],
  status: ''
})

const setup = () => {
  const Container = mount(<Provider store={mockStore}>
    <ResetStashContainer/>
  </Provider>)

  const Component = Container.find(ResetStash);

  return {
    Container,
    Component
  }
}

describe('ResetStashContainer', ()=>{
  const { Container, Component } = setup()

  it('should pass down the correct action creators', () => {
    expect(Object.keys(Component.props())).toContain('handleDeactivateStash');
  })

})
