import React from 'react'
import { mount, render } from 'enzyme'

import nearFormTheme from '.'

describe('nearForm Theme', function() {

  it('exports the theme object', () => {
    const expected = expect.objectContaining({
      primary: expect.any(String),
      secondary: expect.any(String),
    })

    expect(nearFormTheme).toEqual(expected)
  })

})
