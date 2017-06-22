import React from 'react'

const Button = ({ children, onClick }) => (
  <button onClick={onClick}>
    <p>{children}</p>
  </button>
)

export default Button
