import React from 'react'
import styled from 'styled-components'

const Button: React.FC = styled.button`
  background-color: white;
  border: 1px solid dimgray;
  color: dimgray;
  padding: 10px;
  font-weight: 600;
  border-radius: 3px;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: dimgray;
    color: white;
  }
  &:active {
    transform: translate(2px, 2px);
  }
`

export default Button
