import styled from 'styled-components'
import { Card } from 'rebass'
import background from '../../images/background.png'

const HeaderBackground = styled(Card)`
  background: url(${background}), rgba(32, 17, 6, 0.31);
  background-size: cover;
  background-blend-mode: overlay;
`

export default HeaderBackground
