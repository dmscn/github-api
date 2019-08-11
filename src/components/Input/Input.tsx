import React, { ReactNode } from 'react'
import styled from 'styled-components'

const Input: React.FC<any> = styled.input`
  border: solid 1px silver;
  outline: none;
  border-radius: 3px;
  padding: 10px;
  color: dimgray;
  &:focus {
    border-color: dimgray;
  }
`

export default Input
