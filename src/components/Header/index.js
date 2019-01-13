import React, { Component } from 'react'
import { Text, Heading, Flex, Box } from 'rebass'
import styled from 'styled-components'
import { navigate, Link } from 'gatsby'
import Hide from 'hidden-styled'

import DownSvg from '-!svg-react-loader?name=DownSvg!../../assets/Down.svg'

import FlexOver from '../Atomic/FlexOver'
import Blob from '../Atomic/Blob'
import Position from '../Atomic/Position'
import PlayButton from '../Atomic/PlayButton'
import HeaderBackground from './HeaderBackground'
import FullScreen from './FullScreen'

const Down = styled(DownSvg)`
  width: 1.5rem;
  height: 1.5rem;
`

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
    navigate('/#fullscreenmode')
    this.setState({ autoPlayMovie: false, fullscreenMode: true })
  }

  stopMovie = () => {
    this.setState({ autoPlayMovie: false })
  }

  closeFullscreenMode = () => {
    this.setState({ fullscreenMode: false })
  }

  render() {
    const { fullscreenMode } = this.state
    return (
      <div>
        {fullscreenMode && (
          <FullScreen
            fullScreenRef={this.fullScreenRef}
            onClose={this.closeFullscreenMode}
          />
        )}
        <HeaderBackground pb={[6]} pt={[3, 7]} m={-2} color="white">
          <Hide xs sm md>
            <FlexOver>
              <Position left="1rem" top="-7rem">
                <Blob size="300" color="gold" />
              </Position>
            </FlexOver>
          </Hide>
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
            fontSize={5}
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
          <Link to="#bonus" css={{ textDecoration: 'none' }}>
            <Text
              fontFamily="text"
              fontWeight="700"
              textAlign={['center', 'right']}
              fontSize={5}
              mt={[4, 1]}
              pr={[2, 4]}
              color="white"
              lineHeight={1}
            >
              <Down /> Voir les bonus
            </Text>
          </Link>
        </HeaderBackground>
      </div>
    )
  }
}
