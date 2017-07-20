import React from 'react'
import { mount } from 'enzyme'

import Input from '.'

describe('Input Component', function() {

  it('renders without props', function() {
    const wrapper = mount((<Input />))
    const input = wrapper.find('input')

    expect(input.length).toBe(1)
  })

  it('handles onChange events', () => {
    const onChange = jest.fn()
    const wrapper = mount((
      <Input onChange={onChange} />
    ))

    wrapper.find('input').simulate('change')
    expect(onChange.mock.calls.length).toBe(1)
  })

})
