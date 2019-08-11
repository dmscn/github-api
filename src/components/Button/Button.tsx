import React from 'react'
import styled, { StyledComponentProps } from 'styled-components'

export type ButtonProps = StyledComponentProps<'button', any, {}, never>

const Button: React.FC<ButtonProps> = styled.button`
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
    cursor: pointer;
  }
  &:active {
    transform: translate(2px, 2px);
  }
`

export default Button
