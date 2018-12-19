import React from 'react'
import { Box, Text } from 'rebass'
import styled from 'styled-components'

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const PlayerWrapper = styled(Box)`
  cursor: pointer;
`

const Player = props => (
  <PlayerWrapper
    width={[0.95, 0.7]}
    onClick={props.selectVideo}
    my={3}
    mx={'auto'}
  >
    <Text fontSize={4} fontFamily="text" fontWeight="600" mb={3}>
      {props.title}
    </Text>
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "vid.png" }) {
            childImageSharp {
              fluid(maxWidth: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      )}
    />
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
