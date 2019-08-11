import React from 'react'
import styled, { StyledComponentProps } from 'styled-components'

export type TextProps = StyledComponentProps<'span', any, {}, never>

const Text: React.FC<TextProps> = styled.span`
  color: dimgray;
  text-decoration: none;
  line-height: 2em;
`

export default Text
