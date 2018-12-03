import React from 'react'
import { Flex, Box, Heading } from 'rebass'
import Hide from 'hidden-styled'

import Player from './Player'
import Blob from '../Atomic/Blob'
import Position from '../Atomic/Position'

const VideoList = () => (
  <>
    <Flex mx={-2} flexWrap="wrap">
      <Box bg={'background_blue'} width={1} px={[1, 7]} py={[1, 5]}>
        <Flex>
          <Box width={[1]} mx="auto" pb={[1, 5]}>
            <Heading
              textAlign="center"
              fontSize={6}
              fontFamily="menu"
              fontWeight="900"
              css={{ letterSpacing: -1.25 }}
            >
              Les bonus Vidéos
            </Heading>
          </Box>
        </Flex>
        <Flex alignItems="center" flexWrap="wrap">
          <Box width={1} my={2}>
            <Heading fontSize={5} fontFamily="menu">
              Les rencontres avec...
            </Heading>
          </Box>
          <Box width={[1, 1, 1, 1, 1 / 2]}>
            <Player title="...Fatoumata, habitante du quartier" video="" />
          </Box>
          <Box width={[1, 1, 1, 1, 1 / 2]} pt={[0, 5]}>
            <Player title="tyest" video="" />
          </Box>
          <Box width={[1, 1 / 2]}>
            <Player title="...Fatoumata, habitante du quartier" video="" />
          </Box>
          <Box width={[1, 1 / 2]} pt={[0, 5]}>
            <Player title="tyest" video="" />
          </Box>
        </Flex>
        <Flex alignItems="center" flexWrap="wrap">
          <Box width={1} mt={6} mb={3}>
            <Heading fontSize={5} fontFamily="menu">
              Les moments...
            </Heading>
          </Box>
          <Box width={[1, 1, 1, 1, 1 / 2]}>
            <Player title="...Fatoumata, habitante du quartier" video="" />
          </Box>
          <Box width={[1, 1, 1, 1, 1 / 2]} pt={[0, 5]}>
            <Player title="tyest" video="" />
          </Box>
          <Box width={[1, 1 / 2]}>
            <Player title="...Fatoumata, habitante du quartier" video="" />
          </Box>
          <Box width={[1, 1 / 2]} pt={[0, 5]}>
            <Player title="tyest" video="" />
          </Box>
        </Flex>
      </Box>
      <Hide xs sm md>
        coucou
        <Position top="0" left="-20rem">
          <Blob size="500" color="blue" rotate="-45" />
        </Position>
      </Hide>
    </Flex>
  </>
)

export default VideoList
