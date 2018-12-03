import styled from 'styled-components'
import { themeGet } from 'styled-system'

import BlobSvg from '-!svg-react-loader?name=BlobSvg!../../assets/Blob.svg'

const Blob = styled(BlobSvg)`
  #blob-color {
    fill: ${props => themeGet(`colors.${props.color}`)};
  }
  width: ${props => props.size}px;
  z-index: 800;
  opacity: 0.4;
  height: ${props => props.size}px;
`

Blob.defaultProps = {
  size: '50',
}

export default Blob
