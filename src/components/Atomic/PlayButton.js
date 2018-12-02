import React from 'react'
import { Box, Text } from 'rebass'
import styled from 'styled-components'

import Play from '-!svg-react-loader?name=Play!../../assets/Play.svg'

const PlayColored = styled(Play)`
  #play-button {
    fill: ${props => props.color};
  }
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: 5rem;
`

const PlayButton = props => (
  <>
    <Box textAlign="center" py={4}>
      <PlayColored color={props.color} />
      {props.text && (
        <Text textAlign="center" fontSize={4}>
          {props.text}
        </Text>
      )}
    </Box>
  </>
)

export default PlayButton
