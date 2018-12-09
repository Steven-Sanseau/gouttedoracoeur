import React, { Component } from 'react'
import { Text, Heading, Flex, Box } from 'rebass'
import anime from 'animejs'

import Blob from '../Atomic/Blob'
import Position from '../Atomic/Position'
import PlayButton from '../Atomic/PlayButton'
import HeaderBackground from './HeaderBackground'
import FullScreen from './FullScreen'

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      autoPlayMovie: false,
      fullscreenMode: false,
    }
    this.fullScreenRef = React.createRef()
    this.playButtonRef = React.createRef()
  }

  autoPlayMovie = () => {
    this.setState({ autoPlayMovie: true })
  }

  playMovie = e => {
    anime({
      targets: e.currentTarget,
      width: '20rem',
      height: '20rem',
    })
    this.setState({ autoPlayMovie: false, fullscreenMode: true })
  }

  stopMovie = () => {
    this.setState({ autoPlayMovie: false })
  }

  closeFullscreenMode = () => {
    this.setState({ fullscreenMode: false })
  }

  render() {
    const { fullscreenMode, autoPlayMovie } = this.state
    return (
      <div>
        {fullscreenMode && (
          <FullScreen
            fullScreenRef={this.fullScreenRef}
            onClose={this.closeFullscreenMode}
          />
        )}
        <HeaderBackground pb={7} pt={7} m={-2} color="white">
          <Position left="27rem" top="-7rem">
            <Blob size="300" color="gold" />
          </Position>
          <Heading
            fontFamily="menu"
            textAlign="center"
            fontWeight="900"
            fontSize={7}
            css={{ zindex: 1000, letterSpacing: -2.5 }}
          >
            Goutte d'or à Coeur
          </Heading>
          <Text
            fontFamily="text"
            fontWeight="700"
            textAlign="center"
            fontSize={3}
            css={{ letterSpacing: -0.45 }}
            py={3}
          >
            Un documentaire de Christine Ledésert, Nathalie Perrin et Daniel
            Bouy
          </Text>
          <Text
            fontFamily="text"
            fontWeight="700"
            textAlign="center"
            fontSize={3}
            css={{ letterSpacing: -0.45 }}
            py={2}
          >
            Sur une idée originale de Daniel Bouy
          </Text>
          <Text
            fontFamily="text"
            fontWeight="700"
            textAlign="center"
            fontSize={3}
            css={{ letterSpacing: -0.45 }}
            py={2}
          >
            2018
          </Text>
          {/* {!fullscreenMode && ( */}
          <Flex>
            <Box mx="auto">
              <PlayButton
                fontFamily="submenu"
                text="Voir le film"
                color="white"
                size={5}
                playButtonRef={this.playButtonRef}
                autoPlayMovie={this.autoPlayMovie}
                playMovie={this.playMovie}
                stopMovie={this.stopMovie}
              />
            </Box>
          </Flex>
          {/* )} */}
        </HeaderBackground>
      </div>
    )
  }
}
