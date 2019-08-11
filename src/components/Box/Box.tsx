import React from 'react'
import styled, { StyledComponentProps } from 'styled-components'

export interface BoxProps extends StyledComponentProps<'div', any, {}, never> {
  flex?: number | string
  column?: boolean
  center?: boolean
  justify?: string
  align?: string
  width?: string | number
  height?: string | number
  padding?: string | number
  paddingVertical?: string | number
  paddingHorizontal?: string | number
  margin?: string | number
  marginVertical?: string | number
  marginHorizontal?: string | number
}

const Box: React.FC<BoxProps> = styled.div<BoxProps>`
  display: flex;
  width: ${props => props.width};
  height: ${props => props.height};
  flex: ${props => props.flex};
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  justify-content: ${props =>
    (props.center && 'center') || props.justify || 'flex-start'};
  align-items: ${props =>
    (props.center && 'center') || props.align || 'flex-start'};
  margin-top: ${props => props.margin || props.marginVertical || 0}px;
  margin-bottom: ${props => props.margin || props.marginVertical || 0}px;
  margin-left: ${props => props.margin || props.marginHorizontal || 0}px;
  margin-right: ${props => props.margin || props.marginHorizontal || 0}px;
  padding-top: ${props => props.padding || props.paddingVertical || 0}px;
  padding-bottom: ${props => props.padding || props.paddingVertical || 0}px;
  padding-left: ${props => props.padding || props.paddingHorizontal || 0}px;
  padding-right: ${props => props.padding || props.paddingHorizontal || 0}px;
`

export default Box
