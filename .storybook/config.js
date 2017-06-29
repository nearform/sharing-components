import React from 'react'
import styled from 'styled-components'
import { configure, addDecorator } from '@storybook/react'

function loadStories () {
  require('glob-loader!./stories.pattern')
}

const StyledContainer = styled.div`
  font-family: sans-serif;
`

addDecorator(story => (
  <StyledContainer>
    {story()}
  </StyledContainer>
));

configure(loadStories, module)
