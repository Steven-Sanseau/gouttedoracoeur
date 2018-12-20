import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { Flex, Box, Button } from 'rebass'

import Layout from '../layouts/layout'

const LinkRocket = styled(Link)`
  font-family: ${themeGet('fonts.menu')};
  font-size: 3rem;
  color: white;
  width: 30rem;
  text-decoration: none;
  line-height: 6rem;
`

const ButtonRocket = styled(Button)``

class RocketPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <Layout>
          <Flex>
            <Box pt={7} mx="auto">
              <Flex>
                <ButtonRocket px={4} py={3} borderRadius={3} bg="blue">
                  <LinkRocket to="/">🚀 Lancer le site 🚀</LinkRocket>
                </ButtonRocket>
              </Flex>
            </Box>
          </Flex>
        </Layout>
      </>
    )
  }
}

export default RocketPage
