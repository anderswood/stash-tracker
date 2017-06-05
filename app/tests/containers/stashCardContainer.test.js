import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import StashCardContainer from '../../containers/StashCardContainer'
import StashCard from '../../components/StashCard'

const mockStore = configureMockStore ()({
  overlays: [],
  stashes: [],
  status: ''
})

console.log(mockStore);
const setup = () => {
  const Container = mount(
    <Provider store={mockStore}>
      <StashCardContainer/>
    </Provider>
  )

  const Component = Container.find(StashCard);


  return { Container, Component }
}

describe.skip('StashCardContainer', ()=>{
  const { Container, Component } = setup()

  it('should pass down the correct action creators', () => {
    expect(Object.keys(Component.props())).toContain('activeStash');
  })

  it('should pass down the correct action creators', () => {
    expect(Object.keys(Component.props())).toContain('status');
  })

  it('should pass down the correct action creators', () => {
    expect(Object.keys(Component.props())).toContain('handleDeactivateStash');
  })

})
