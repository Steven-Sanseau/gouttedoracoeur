import React from 'react'
import { Box, Text } from 'rebass'
import { themeGet } from 'styled-system'
import styled from 'styled-components'

import Play from '-!svg-react-loader?name=Play!../../assets/Play.svg'

const PlayColored = styled(Play)`
  .play-button {
    fill: ${props => themeGet(`colors.${props.color}`)};
  }
  margin-left: auto;
  margin-right: auto;
  display: flex;

  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
`

const PlayButtonWrapper = styled.div`
  cursor: pointer;
`

const PlayButton = props => (
  <PlayButtonWrapper
    onClick={e => props.playMovie(e)}
    onMouseEnter={props.autoPlayMovie}
    onMouseLeave={props.stopMovie}
  >
    <Box textAlign="center" py={4}>
      <PlayColored
        size={props.size}
        color={props.color}
        ref={props.playButtonRef}
      />
      {props.text && (
        <Text
          textAlign="center"
          fontFamily="text"
          fontWeight="900"
          fontSize={3}
        >
          {props.text}
        </Text>
      )}
    </Box>
  </PlayButtonWrapper>
)

PlayButton.defaultProps = {
  size: '5',
}

export default PlayButton
