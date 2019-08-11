import React from 'react'
import styled, { StyledComponentProps } from 'styled-components'

export type ListProps = StyledComponentProps<'ul', any, {}, never>

const List: React.FC<ListProps> = styled.ul`
  list-style-type: none;
`

export default List
