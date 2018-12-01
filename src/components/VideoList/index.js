import React from 'react'
import { Flex, Box } from 'rebass'

import Player from './Player'

const VideoList = () => (
  <Flex mx={-2} flexWrap="wrap">
    <Box bg={'background_blue'} width={1}>
      <Player title="tyest" video="" />
    </Box>
  </Flex>
)

export default VideoList
