import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Box, Text } from 'rebass'

const Player = props => (
  <Box width={500}>
    <Text fontSize={3} fontFamily="text" fontWeight="600" mb={3}>
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
  </Box>
)

export default Player
