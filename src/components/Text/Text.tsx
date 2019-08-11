import React from 'react'
import styled, { StyledComponentProps } from 'styled-components'

export interface TextProps
  extends StyledComponentProps<'span', any, {}, never> {
  large?: boolean
  bold?: boolean
  small?: boolean
  color?: string
}

const Text: React.FC<TextProps> = styled.div<TextProps>`
  color: ${props => props.color || 'dimgray'};
  text-decoration: none;
  line-height: 2em;
  font-size: ${props => (props.large && '52px') || (props.small && '10px')};
  font-weight: ${props => props.bold && 'bold'};
`

export default Text
