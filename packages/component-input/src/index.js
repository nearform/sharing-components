import React from 'react'

import StyledInput from './styles/styledInput'

const Input = ({ type = 'text', name, onChange }) => (
  <StyledInput type={type} className="input" name={name} onChange={onChange} />
)

export default Input
