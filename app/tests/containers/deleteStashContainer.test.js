import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import DeleteStashContainer from '../../containers/DeleteStashContainer'
import DeleteStash from '../../components/DeleteStash'

const mockStore = configureMockStore ()({
  overlays: [],
  stashes: [],
  status: ''
})

const setup = () => {
  const Container = mount(<Provider store={mockStore}>
    <DeleteStashContainer/>
  </Provider>)

  const Component = Container.find(DeleteStash);

  return {
    Container,
    Component
  }
}

describe('DeleteStashContainer', ()=>{
  const { Container, Component } = setup()

  it('should pass down the correct action creators', () => {
    expect(Object.keys(Component.props())).toContain('handleClearOverlays');
  })

  it('should pass down the correct action creators', () => {
    expect(Object.keys(Component.props())).toContain('handleRemoveStash');
  })

})
