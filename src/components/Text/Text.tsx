import React from 'react'
import styled, { StyledComponentProps } from 'styled-components'

export interface TextProps
  extends StyledComponentProps<'span', any, {}, never> {
  large?: boolean
  bold?: boolean
}

const Text: React.FC<TextProps> = styled.span<TextProps>`
  color: dimgray;
  text-decoration: none;
  line-height: 2em;
  font-size: ${props => props.large && '52px'};
  font-weight: ${props => props.bold && 'bold'};
`

export default Text
