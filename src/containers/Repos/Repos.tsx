import React from 'react'
import { Link } from '@reach/router'
import ListComponent, { ListItem } from '../../components/List'
import Text from '../../components/Text'

export interface ListProps {
  children?: React.ReactNode
}

export const List: React.FC<ListProps> = (props: ListProps) => {
  const { children } = props
  return <ListComponent>{children}</ListComponent>
}

export interface ItemProps {
  repo: any
  onItemClicked: (event: React.MouseEvent) => void
}

export const Item: React.FC<ItemProps> = (props: ItemProps) => {
  const { repo } = props
  return (
    <ListItem onClick={props.onItemClicked}>
      <Text>{repo.name}</Text>
    </ListItem>
  )
}
