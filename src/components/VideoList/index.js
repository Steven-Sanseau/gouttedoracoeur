import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate, Link } from 'gatsby'
import { themeGet } from 'styled-system'
import { Flex, Box, Heading, Text, Card } from 'rebass'
import Hide from 'hidden-styled'

import FlexOver from '../Atomic/FlexOver'
import Player from './Player'
import Blob from '../Atomic/Blob'
import Position from '../Atomic/Position'
import VideoFull from './VideoFull'

import FbSvg from '-!svg-react-loader?name=FbSvg!../../assets/Fb.svg'
import TwitterSvg from '-!svg-react-loader?name=TwitterSvg!../../assets/Twitter.svg'

const FbColored = styled(FbSvg)`
  :hover {
    color: ${themeGet('colors.red_darken')};
  }
  color: ${themeGet('colors.red')};
  width: 3rem;
  margin: 0 2rem;
  cursor: pointer;
`

const LinkStyled = styled.a`
  color: ${themeGet('colors.blue')};
  font-family: ${themeGet('fonts.text')};
  font-weight: 600;
  text-decoration: none;
`

const TwitterColored = styled(TwitterSvg)`
  :hover {
    color: ${themeGet('colors.red_darken')};
  }
  color: ${themeGet('colors.red')};
  margin: 0 2rem;
  width: 3rem;
  cursor: pointer;
`

const ReturnBtn = styled(Text)`
  cursor: pointer;
`

export default class VideoList extends Component {
  constructor(props) {
    super(props)
    this.state = { videoSelected: {}, videoFull: false }
  }

  selectVideo = elem => {
    this.setState({ videoSelected: elem, videoFull: true })
    navigate('/#bonus')
  }

  closeFull = () => {
    const { videoSelected } = this.state
    this.setState({ videoSelected: {}, videoFull: false })
    navigate(`/#${videoSelected.link}`)
  }

  render() {
    const { videoFull, videoSelected } = this.state
    const { videoList } = this.props
    return (
      <>
        <FlexOver mx={-2} flexWrap="wrap">
          <Box bg={'background_blue'} width={1} px={[1, 5, 6]} py={[1, 5]}>
            <Flex>
              <Box width={[1]} mx="auto" pb={[1, 5]} id="bonus">
                {!videoFull && (
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
                )}
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
                      textAlign="center"
                    >
                      Des séquences du documentaire dans leur intégralité
                    </Heading>
                  </Box>
                  {videoList.sequences.map(video => (
                    <Box key={video.link + video.title} width={[1, 1 / 2]}>
                      <Player
                        id={video.link}
                        title={video.title}
                        image={video.img}
                        video={video.link}
                        description={video.description}
                        selectVideo={() => this.selectVideo(video)}
                      />
                    </Box>
                  ))}
                  <Card
                    mx="auto"
                    bg="white"
                    width={[0.9, 8 / 9]}
                    my={5}
                    borderRadius={[30, 50]}
                    py={[4, 5]}
                    px={[4, 5, 6]}
                  >
                    <Heading
                      textAlign="center"
                      fontFamily="menu"
                      fontWeight="900"
                      fontSize={[5, 6]}
                      css={{ letterSpacing: -1.25 }}
                      mb={4}
                      lineHeight={1}
                    >
                      Au coeur de la Goutte d’Or…
                    </Heading>
                    <Text
                      textAlign="justify"
                      fontFamily="text"
                      fontWeight="400"
                      fontSize={3}
                      lineHeight="20px"
                    >
                      Mai 2017 : Daniel Bouy, réalisateur de documentaires, fait
                      la connaissance de Christine Ledésert. <br />
                      <br />
                      Christine est alors directrice depuis 26 ans du Centre
                      social associatif Accueil Goutte d’Or (AGO) situé au cœur
                      du quartier de la Goutte d’Or dans le 18ème arrondissement
                      de Paris. <br />
                      <br />
                      Elle est une figure du quartier. Certains la surnomment
                      même la «maman du quartier» tant elle a aidé, accompagné,
                      soutenu des milliers de personnes dans leurs vies souvent
                      chaotiques… <br />
                      <br />
                      Mais Christine doit partir à la retraite 6 mois plus tard…
                      <br />
                      <br />
                      Daniel décide de filmer les derniers mois de sa carrière
                      professionnelle, de filmer le quotidien du centre social,
                      de filmer des évènements du quartier de la Goutte d’Or…
                      <br />
                      <br />
                      Nathalie, monteuse de documentaires et de reportages, fera
                      dialoguer les images de Daniel avec des textes écrits par
                      Christine inspirés par sa pratique professionnelle et
                      l’expérience humaine exceptionnelle qu’elle vient de
                      vivre. <br />
                      <br />
                    </Text>

                    <Text
                      textAlign="justify"
                      fontFamily="text"
                      fontWeight="700"
                      fontSize={3}
                    >
                      En 59 minutes, ce documentaire nous fait partager les
                      inquiétudes et les espoirs, les rires et les pleurs, les
                      épreuves et les fêtes des salariés, bénévoles et usagers
                      d’Accueil Goutte d’Or.
                    </Text>
                  </Card>
                  <Box width={1} my={2}>
                    <Heading
                      fontSize={[4, 5]}
                      lineHeight={[1, 1.5]}
                      fontFamily="menu"
                      textAlign="center"
                    >
                      Les rencontres de Christine avec des habitants, des
                      bénévoles et des professionnels du quartier
                    </Heading>
                  </Box>
                  {videoList.meeting.map(video => (
                    <Box key={video.link + video.title} width={[1, 1 / 2]}>
                      <Player
                        id={video.link}
                        title={video.title}
                        image={video.img}
                        video={video.link}
                        description={video.description}
                        selectVideo={() => this.selectVideo(video)}
                      />
                    </Box>
                  ))}
                  <Card
                    mx="auto"
                    bg="white"
                    width={[0.9, 8 / 9]}
                    my={5}
                    borderRadius={[30, 50]}
                    pt={[2, 4]}
                    pb={[2, 3]}
                    px={[3, 5, 6]}
                  >
                    <Text
                      textAlign="center"
                      fontFamily="text"
                      fontWeight="700"
                      fontSize={5}
                      lineHeight={1.5}
                    >
                      Partagez le film sur les réseaux sociaux !
                      <Text
                        textAlign="center"
                        fontFamily="text"
                        fontWeight="500"
                        fontSize={4}
                        my={3}
                      >
                        Cliquez ici :
                      </Text>
                      <a
                        href="https://www.facebook.com/sharer/sharer.php?u=http%3A//gouttedoracoeur.fr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="Oui"
                      >
                        <FbColored />
                      </a>
                      <a
                        href="https://twitter.com/home?status=En%20ligne%20et%20gratuit,%20super%20documentaire%20sur%20l'action%20sociale%20au%20coeur%20du%20quartier%20de%20la%20Goutte%20d'Or%20%C3%A0%20Paris%0Ahttps%3A//www.gouttedoracoeur.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="Oui"
                      >
                        <TwitterColored />
                      </a>
                    </Text>
                  </Card>
                  <Box width={1} my={2}>
                    <Heading
                      fontSize={[4, 5]}
                      lineHeight={[1, 3]}
                      fontFamily="menu"
                      textAlign="center"
                    >
                      Ils parlent de Christine…
                    </Heading>
                  </Box>
                  {videoList.talk.map(video => (
                    <Box key={video.link + video.title} width={[1, 1 / 2]}>
                      <Player
                        id={video.link}
                        title={video.title}
                        image={video.img}
                        video={video.link}
                        description={video.description}
                        selectVideo={() => this.selectVideo(video)}
                      />
                    </Box>
                  ))}
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
                    <VideoFull onClose={this.closeFull} video={videoSelected}>
                      Video
                    </VideoFull>
                  </Flex>
                </Box>
              </Flex>
            )}
            <Card
              mx="auto"
              bg="white"
              width={[0.9, 8 / 9]}
              my={5}
              borderRadius={[30, 50]}
              pt={[2, 4]}
              pb={[2, 3]}
              px={[3, 5, 6]}
            >
              <Heading
                textAlign="center"
                fontFamily="menu"
                fontWeight="900"
                fontSize={[5]}
                css={{ letterSpacing: -1.25 }}
                mb={4}
                lineHeight={1}
              >
                En bonus, le documentaire «Je veux apprendre la France»
              </Heading>
              <Text
                textAlign="justify"
                fontFamily="text"
                fontWeight="400"
                fontSize={3}
                lineHeight="25px"
                mb={2}
              >
                En 2005, Daniel Bouy filme pendant 6 mois les premiers cours de
                français dispensés par une enseignante, Marion Aguilar, auprès
                de jeunes «primo-arrivants» au centre social Espace Torcy dans
                le 18 ème arrondissement de Paris. Ce documentaire (56 minutes),
                monté par Nathalie Perrin, a reçu en 2009 le prix du jury Jeune
                du Festival du film d’éducation et a été sélectionné la même
                année au FIGRA (Festival international du grand reportage
                d’actualité).
                <br />
              </Text>
              <LinkStyled
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=42sjtq6D5M0"
              >
                >> Voir le documentaire
              </LinkStyled>
            </Card>
          </Box>
          <Hide xs sm md>
            <Position top="20rem" left="-10rem">
              <Blob size="500" color="blue" rotate="45" />
            </Position>
            <Position top="40rem" left="1rem">
              <Blob size="500" color="gold" rotate="-45" />
            </Position>
          </Hide>
        </FlexOver>
      </>
    )
  }
}
