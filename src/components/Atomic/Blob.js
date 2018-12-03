import styled from 'styled-components'
import { themeGet } from 'styled-system'

import BlobSvg from '-!svg-react-loader?name=BlobSvg!../../assets/Blob.svg'

const Blob = styled(BlobSvg)`
  .blob-color {
    fill: ${props => themeGet(`colors.${props.color}`)};
  }
  position: absolute;
  width: ${props => props.size}px;
  z-index: 800;
  opacity: 0.4;
  height: ${props => props.size}px;
  transform: rotate(${props => props.rotate}deg);
`

Blob.defaultProps = {
  size: '50',
  rotate: '0',
  color: 'gold',
}

export default Blob
