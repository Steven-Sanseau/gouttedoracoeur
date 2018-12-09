import React, { Component } from 'react'
import styled from 'styled-components'
import { Flex, Box, Heading, Text } from 'rebass'
import Hide from 'hidden-styled'

import Player from './Player'
import Blob from '../Atomic/Blob'
import Position from '../Atomic/Position'
import VideoFull from './VideoFull'

const ReturnBtn = styled(Text)`
  cursor: pointer;
`

export default class VideoList extends Component {
  constructor(props) {
    super(props)
    this.state = { videoSelected: null, videoFull: false }
  }

  selectVideo = elem => {
    console.log(elem)
    // this.setState({ videoSelected: id, videoFull: true })
  }

  closeFull = () => {
    this.setState({ videoSelected: null, videoFull: false })
  }

  render() {
    const { videoFull, videoSelected } = this.state
    const { videoList } = this.props
    console.log(videoList)
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
                  lineHeight={[1]}
                  my={[5, 1]}
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
                    <Heading
                      fontSize={[4, 5]}
                      lineHeight={[1, 3]}
                      fontFamily="menu"
                    >
                      Des séquences du documentaire dans leur intégralité
                    </Heading>
                  </Box>
                  {videoList.sequences.map(video => (
                    <Box width={[1, 1 / 2]}>
                      <Player
                        title={video.title}
                        video={video.link}
                        description={video.description}
                        selectVideo={() => this.selectVideo(video)}
                      />
                    </Box>
                  ))}
                </Flex>
                <Flex alignItems="center" flexWrap="wrap">
                  <Box width={1} mt={6} mb={3}>
                    <Heading fontSize={5} fontFamily="menu">
                      Les moments...
                    </Heading>
                  </Box>
                </Flex>
              </>
            )}
            {videoFull && (
              <Flex>
                <Box width={1}>
                  <ReturnBtn
                    onClick={this.closeFull}
                    fontFamily="text"
                    fontSize={3}
                  >
                    {'<'} Retour aux bonus
                  </ReturnBtn>
                  <Flex>
                    <VideoFull onClose={this.closeFull} videoId={videoSelected}>
                      Video
                    </VideoFull>
                  </Flex>
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
