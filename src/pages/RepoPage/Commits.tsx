import React from 'react'
import List, { ListItem } from '../../components/List'
import Text from '../../components/Text'

export interface CommitsProps {
  commits: [any]
}

const Commits: React.FC<CommitsProps> = (props: CommitsProps) => {
  const { commits } = props

  return (
    <List>
      {commits &&
        commits.map(({ commit }: any) => (
          <ListItem key={commit.sha}>
            <Text small color="silver">
              {commit.author.name}
            </Text>
            <Text>{commit.message}</Text>
          </ListItem>
        ))}
    </List>
  )
}

export default Commits
