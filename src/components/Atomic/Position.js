import styled from 'styled-components'

const Position = styled.div`
  position: relative;
  top: ${props => props.top};
  left: ${props => props.left};
`

Position.defaultProps = {
  top: '0px',
  left: '0px',
}
export default Position
