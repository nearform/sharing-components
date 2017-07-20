import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import styled, { ThemeProvider } from 'styled-components'
import theme from 'helper-nearformTheme'

import Button from '.'

const StyledContainer = styled.div`
  width: 200px;
`

storiesOf('Button', module)

  .add('with text', () => (
    <StyledContainer>
      <Button onClick={action('clicked')}>Button</Button>
    </StyledContainer>
  ))

  .add('with some emoji', () => (
    <StyledContainer>
      <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
    </StyledContainer>
  ))

  .add('with a theme provider', () => (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <Button onClick={action('clicked')}>Button</Button>
      </StyledContainer>
    </ThemeProvider>
  ))
