import React from 'react'
import { mount, render } from 'enzyme'

import LoginForm from '.'

describe('Login Form Component', function() {

  it('renders without props', function() {
    const wrapper = mount((<LoginForm />))
    const loginForm = wrapper.find('form')

    expect(loginForm.length).toBe(1)
  })

  it('handles onSubmit events', () => {
    const onSubmit = jest.fn()
    const wrapper = mount((
      <LoginForm onSubmit={onSubmit} />
    ))

    wrapper.find('form').simulate('submit')
    expect(onSubmit.mock.calls.length).toBe(1)
  })

  it('renders a username field', () => {
    const wrapper = mount((
      <LoginForm />
    ))

    const usernameField = wrapper.find('[name="username"]')
    expect(usernameField.length).toBe(1)
  })

  it('renders a password field', () => {
    const wrapper = mount((
      <LoginForm />
    ))

    const passwordField = wrapper.find('[name="password"]')
    expect(passwordField.length).toBe(1)
  })

  it('renders a login button', () => {
    const wrapper = mount((
      <LoginForm />
    ))

    const button = wrapper.find('button')
    expect(button.length).toBe(1)
  })

  it('login button triggers a submit', () => {
    const onSubmit = jest.fn()
    const wrapper = mount((
      <LoginForm onSubmit={onSubmit} />
    ))

    wrapper.find('form').simulate('submit')
    expect(onSubmit.mock.calls.length).toBe(1)
  })

})
