import React from 'react'
import Box from '../../components/Box'
import Text from '../../components/Text'
import LoadingIcon from '../../components/LoadingIcon'

const Loading: React.FC = () => (
  <Box width="100vw" height="100vh" center column>
    <Text>Loading...</Text>
    <Box marginVertical={10}>
      <LoadingIcon />
    </Box>
  </Box>
)

export default Loading
