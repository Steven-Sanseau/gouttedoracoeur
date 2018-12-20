import React from 'react'
import { Box, Text } from 'rebass'
import styled from 'styled-components'

import Image from '../Atomic/Image'

const PlayerWrapper = styled(Box)`
  cursor: pointer;
`

const Player = props => (
  <PlayerWrapper
    width={[0.95, 0.7]}
    onClick={props.selectVideo}
    my={3}
    mx={'auto'}
    id={props.id}
  >
    <Text fontSize={4} fontFamily="text" lineHeight={1} fontWeight="600" mb={3}>
      {props.title}
    </Text>
    <Image src={props.image} />

    <Text
      fontSize={3}
      fontFamily="text"
      fontWeight="400"
      textAlign="justify"
      lineHeight="20px"
      mt={2}
    >
      {props.description}
    </Text>
  </PlayerWrapper>
)

export default Player
