import React from 'react'
import { Box, Text } from 'rebass'
import { themeGet } from 'styled-system'
import styled from 'styled-components'

import PlaySvg from '-!svg-react-loader?name=PlaySvg!../../assets/Play.svg'

const PlayColored = styled(Box)`
  .play-fill {
    fill: ${props => themeGet(`colors.${props.color}`)};
  }
  .play-elem {
    display: flex;
    width: ${props => props.size}rem;
    height: ${props => props.size}rem;
    margin-left: auto;
    margin-right: auto;
  }
`

const PlayButtonWrapper = styled.div`
  cursor: pointer;
`

const PlayButton = props => (
  <PlayButtonWrapper
    onClick={props.playMovie}
    onMouseEnter={props.autoPlayMovie}
    onMouseLeave={props.stopMovie}
  >
    <Box textAlign="center" py={4}>
      <PlayColored
        size={props.size}
        color={props.color}
        ref={props.playButtonRef}
      >
        <PlaySvg />
      </PlayColored>
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
