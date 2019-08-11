import React from 'react'
import styled, { StyledComponentProps } from 'styled-components'

export type ListProps = StyledComponentProps<'ul', any, {}, never>

const List: React.FC<ListProps> = styled.ul`
  list-style-type: none;
  border-radius: 3px;
  background-color: whitesmoke;
  width: 350px;
  max-height: 65vh;
  overflow-y: auto;
  margin: 16px 0;
  padding: 0;
`

export const ListItem: React.FC<ListProps> = styled.li`
  padding: 16px;
  color: dimgray;
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 0.5px;
  line-height: 1.5em;

  &:hover {
    background-color: gainsboro;
    font-weight: 600;
  }

  &:visited {
    color: silver;
  }

  &:not(:last-child) {
    border-bottom: 0.5px solid gainsboro;
  }
`

export default List
