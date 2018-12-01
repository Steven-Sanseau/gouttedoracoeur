import React from 'react'
import { Box, Text } from 'rebass'
const PlayButton = props => (
  <>
    <Box>
      Pay
      {props.text && <Text>{props.text}</Text>}
    </Box>
  </>
)

export default PlayButton
