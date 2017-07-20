import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ThemeProvider } from 'styled-components'
import theme from 'helper-nearformTheme'

import LoginForm from '.'

const submitFunc = (e) => {
  action('form submitted')(e)
  return e.preventDefault()
}

storiesOf('Login Form', module)

  .add('default view', () => (
    <LoginForm onSubmit={submitFunc} />
  ))

  .add('with a theme provider', () => (
    <ThemeProvider theme={theme}>
      <LoginForm onSubmit={submitFunc} />
    </ThemeProvider>
  ))
