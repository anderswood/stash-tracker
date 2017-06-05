import React from 'react'
import { shallow } from 'enzyme'

import DeleteStash from '../../components/DeleteStash'

describe('DeleteStash component', () => {

  it('should render reset button', () => {
    const mockFunk = jest.fn()
    const wrapper = shallow(<DeleteStash stashID={ 123 }/>)

    expect(wrapper.find('.delete-stash')).toHaveLength(1)
  })

  it.skip('can be clicked to delete the stash', () => {
    const mockClick = jest.fn()
    const removeCard = () => { }
    const wrapper = shallow(<DeleteStash stashID={ 123 }/>)
    const deleteDiv = wrapper.find('.delete-stash')
    let container = deleteDiv.simulate('click', { stopPropagation: ()=> undefined })

    expect(container.length).toEqual(1)
    expect(mockClick).toHaveBeenCalledTimes(1)
  })

})
