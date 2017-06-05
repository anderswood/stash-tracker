import React from 'react'
import { shallow } from 'enzyme'

import ResetStash from '../../components/ResetStash'

describe('ResetStash component', () => {

  it('should render reset button', () => {
    const mockFunk = jest.fn()
    const wrapper = shallow(<ResetStash resetMap={ mockFunk }
                                        resetState={ mockFunk }/>)

    expect(wrapper.find('#reset-div')).toHaveLength(1)
  })

})
