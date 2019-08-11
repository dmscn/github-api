import React from 'react'
import styled, { StyledComponentProps } from 'styled-components'

export type LabelProps = StyledComponentProps<'label', any, {}, never>

const Label: React.FC<LabelProps> = styled.label`
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  line-height: 2;
  color: dimgray;
`

export default Label
