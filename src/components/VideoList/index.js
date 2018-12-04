import React, { Component } from 'react'
import { Flex, Box, Heading, Text } from 'rebass'
import Hide from 'hidden-styled'

import Player from './Player'
import Blob from '../Atomic/Blob'
import Position from '../Atomic/Position'

export default class VideoList extends Component {
  constructor(props) {
    super(props)
    this.state = { videoSelected: null, videoFull: false }
  }

  selectVideo = id => {
    this.setState({ videoSelected: id, videoFull: true })
  }

  closeFull = () => {
    this.setState({ videoSelected: null, videoFull: false })
  }

  render() {
    const { videoFull } = this.state
    return (
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
                  Les bonus vidéos
                </Heading>
              </Box>
            </Flex>
            {!videoFull && (
              <>
                <Flex alignItems="center" flexWrap="wrap">
                  <Box width={1} my={2}>
                    <Heading fontSize={5} fontFamily="menu">
                      Les rencontres avec...
                    </Heading>
                  </Box>
                  <Box width={[1, 1, 1, 1, 1 / 2]}>
                    <Player
                      title="...Fatoumata, habitante du quartier"
                      video=""
                      selectVideo={this.selectVideo}
                    />
                  </Box>
                  <Box width={[1, 1, 1, 1, 1 / 2]} pt={[0, 5]}>
                    <Player title="tyest" video="" />
                  </Box>
                  <Box width={[1, 1 / 2]}>
                    <Player
                      title="...Fatoumata, habitante du quartier"
                      video=""
                    />
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
                    <Player
                      title="...Fatoumata, habitante du quartier"
                      video=""
                    />
                  </Box>
                  <Box width={[1, 1, 1, 1, 1 / 2]} pt={[0, 5]}>
                    <Player title="tyest" video="" />
                  </Box>
                  <Box width={[1, 1 / 2]}>
                    <Player
                      title="...Fatoumata, habitante du quartier"
                      video=""
                    />
                  </Box>
                  <Box width={[1, 1 / 2]} pt={[0, 5]}>
                    <Player title="tyest" video="" />
                  </Box>
                </Flex>
              </>
            )}
            {videoFull && (
              <Flex>
                <Box>
                  <Text onClick={this.closeFull} fontFamily="text" fontSize={3}>
                    {'<'} Retour aux bonus
                  </Text>
                  <Text>Video</Text>
                </Box>
              </Flex>
            )}
          </Box>
          <Hide xs sm md>
            <Position top="20rem" left="-10rem">
              <Blob size="500" color="blue" rotate="45" />
            </Position>
          </Hide>
        </Flex>
      </>
    )
  }
}
