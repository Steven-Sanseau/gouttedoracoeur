import React from 'react'
import styled from 'styled-components'
import { Box } from 'rebass'
import { themeGet } from 'styled-system'

import BlobSvg from '-!svg-react-loader?name=BlobSvg!../../assets/Blob.svg'

const Blob = styled(BlobSvg)`
  #blob-color {
    fill: ${themeGet('colors.gold')};
  }
  width: ${props => props.size}px;
  z-index: 1000;
  display: block;
  height: ${props => props.size}px;
`

Blob.defaultProps = {
  size: '50',
}

export default Blob
