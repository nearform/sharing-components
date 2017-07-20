import React from 'react'

import Button from 'component-button'
import Input from 'component-input'

import StyledLabel from './styles/styledLabel'

const LoginForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <StyledLabel>Username</StyledLabel>
    <Input name="username" />

    <StyledLabel>Password</StyledLabel>
    <Input name="password" type="password" />

    <Button type="submit">Login</Button>
  </form>
)

export default LoginForm
