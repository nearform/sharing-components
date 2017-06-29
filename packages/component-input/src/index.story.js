import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Input from '.'

storiesOf('Input', module)

  .add('with a type of text', () => (
    <Input onChange={action('changed')} />
  ))

  .add('with a type of password', () => (
    <Input type="password" onChange={action('changed')} />
  ))
