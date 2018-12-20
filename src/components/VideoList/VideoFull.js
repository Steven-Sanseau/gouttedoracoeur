import React, { Component } from 'react'
import { Box, Heading, Text } from 'rebass'
import YouTube from 'react-youtube'

export default class VideoFull extends Component {
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

  render() {
    const optionsYoutubePlayer = {
      width: '100%',
      playerVars: {
        autoplay: 1,
        controls: 1,
        cc_load_policy: 0,
        fs: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
      },
    }
    const { video } = this.props
    return (
      <Box mx="auto" width={[1, 7 / 9]}>
        <Heading
          textAlign="center"
          fontSize={5}
          fontFamily="menu"
          fontWeight="900"
          lineHeight={1}
          mb={4}
          css={{ letterSpacing: -1.25 }}
        >
          {video.title}
        </Heading>
        <YouTube
          videoId={video.link}
          opts={optionsYoutubePlayer}
          onReady={this.play}
          onEnd={this.props.onClose}
        />
        <Text
          mt={3}
          fontFamily="text"
          textAlign="justify"
          fontSize={3}
          lineHeight="20px"
        >
          {video.description}
        </Text>
      </Box>
    )
  }
}
