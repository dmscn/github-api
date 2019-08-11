import React from 'react'
import { RouteComponentProps } from '@reach/router'
import Box from '../../components/Box'
import Text from '../../components/Text'

const NotFound: React.FC<RouteComponentProps> = () => (
  <Box center width="100vw" height="100vh">
    <Text large bold>
      404 Not found...
    </Text>
  </Box>
)

export default NotFound
