import React from 'react'
import { Box, Text } from 'rebass'
import styled from 'styled-components'

import Play from '-!svg-react-loader?name=Play!../../assets/Play.svg'

const PlayColored = styled(Play)`
  #play-button {
    fill: ${props => props.color};
  }
  width: 5rem;
`

const PlayButton = props => (
  <>
    <Box>
      <PlayColored color={props.color} />
      {props.text && <Text textAlign="center">{props.text}</Text>}
    </Box>
  </>
)

export default PlayButton
