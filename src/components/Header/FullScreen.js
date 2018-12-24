import React, { Component } from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube'
import { themeGet } from 'styled-system'
import { Flex, Box, Text } from 'rebass'

const FullScreenWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: ${themeGet('colors.grey')};
`

const CloseBtn = styled(Text)`
  cursor: pointer;
`

export default class FullScreen extends Component {
  constructor(props) {
    super(props)

    this.escFunction = this.escFunction.bind(this)
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      this.props.onClose()
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false)
  }

  play = event => {
    // var embedCode = event.target.getVideoEmbedCode()
    // event.target.playVideo()
    // if (document.getElementById('embed-code')) {
    //   document.getElementById('embed-code').innerHTML = embedCode
    // }
  }

  render() {
    const optionsYoutubePlayer = {
      height: window.innerHeight - 100,
      width: window.innerWidth - 30,
      playerVars: {
        autoplay: 1,
        cc_load_policy: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
      },
    }
    return (
      <FullScreenWrapper ref={this.props.fullScreenRef}>
        <Flex>
          <Box p={3} id="fullscreenmode">
            <CloseBtn
              fontFamily="text"
              fontSize={4}
              color="white"
              onClick={this.props.onClose}
              mb={3}
            >
              Fermer
            </CloseBtn>
            <Flex>
              <Box mx="auto">
                <YouTube
                  videoId={'Nv6dJyANgsI'}
                  opts={optionsYoutubePlayer}
                  onReady={this.play}
                  onEnd={this.props.onClose}
                />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </FullScreenWrapper>
    )
  }
}
