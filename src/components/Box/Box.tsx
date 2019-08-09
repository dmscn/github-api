import React from 'react'
import styled, { StyledComponentProps } from 'styled-components'

export interface BoxProps extends StyledComponentProps<'div', any, {}, never> {
  flex?: number | string
  direction?: 'column' | 'row'
  justify?: string
  align?: string
  padding?: string | number
  paddingVertical?: string | number
  paddingHorizontal?: string | number
  margin?: string | number
  marginVertical?: string | number
  marginHorizontal?: string | number
}

const Box: React.FC<BoxProps> = styled.div<BoxProps>`
  display: flex;
  flex: ${props => props.flex};
  direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};
`

export default Box
