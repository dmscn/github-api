import React from 'react'
import { Link } from '@reach/router'
import ListAtom from '../../components/List'

export interface ListProps {
  children?: React.ReactNode
}

export const List: React.FC<ListProps> = (props: ListProps) => {
  const { children } = props
  return <ListAtom>{children}</ListAtom>
}

export interface ItemProps {
  repo: any
}

export const Item: React.FC<ItemProps> = (props: ItemProps) => {
  const { repo } = props
  return (
    <li>
      <Link to={`/repo/${repo.id}`}>{repo.name}</Link>
    </li>
  )
}
