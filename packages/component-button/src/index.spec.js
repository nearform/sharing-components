import React from 'react'
import { shallow, mount, render } from 'enzyme'

import Button from '.'

describe('Button Component', function() {

  it('renders without props', function() {
    const wrapper = shallow((<Button />))
    const button = wrapper.find('button')

    expect(button.length).toBe(1)
  })

  it('renders children when passed in', () => {
    const wrapper = shallow((
      <Button>
        <p className="child">Some Child</p>
      </Button>
    ))

    const child = wrapper.find('.child')
    expect(child.length).toBe(1)
  })

  it('handles onClick events', () => {
    const onClick = jest.fn()
    const wrapper = shallow((
      <Button onClick={onClick} />
    ))

    wrapper.find('button').simulate('click')
    expect(onClick.mock.calls.length).toBe(1)
  })

})
