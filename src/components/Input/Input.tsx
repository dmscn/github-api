import React, { ReactNode } from 'react'
import styled from 'styled-components'

const Input: React.FC<any> = styled.input`
  border: solid 1px silver;
  outline: none;
  border-radius: 1px;
  padding: 10px;
  &:focus {
    border-color: dimgray;
  }
`

export default Input
