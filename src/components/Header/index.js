import React from 'react'
import { Text, Heading, Flex, Box } from 'rebass'

import Blob from '../Atomic/Blob'
import PlayButton from '../Atomic/PlayButton'
import HeaderBackground from './HeaderBackground'

const Header = () => (
  <>
    <HeaderBackground pb={8} pt={7} m={-2} color="white">
      <Blob size="300" color="white" />
      <Heading
        fontFamily="menu"
        textAlign="center"
        fontWeight="900"
        fontSize={7}
        css={{ zindex: 1000, letterSpacing: -2.5 }}
      >
        Goutte d'or à Coeur
      </Heading>
      <Text
        fontFamily="text"
        fontWeight="700"
        textAlign="center"
        fontSize={3}
        css={{ letterSpacing: -0.45 }}
        py={3}
      >
        Un documentaire de Nathalie Perrin, Christine Ledésert et Daniel Bouy
      </Text>
      <Text
        fontFamily="text"
        fontWeight="700"
        textAlign="center"
        fontSize={3}
        css={{ letterSpacing: -0.45 }}
        py={2}
      >
        Sur une idée originale de Daniel Bouy
      </Text>
      <Text
        fontFamily="text"
        fontWeight="700"
        textAlign="center"
        fontSize={3}
        css={{ letterSpacing: -0.45 }}
        py={2}
      >
        2018
      </Text>
      <Flex>
        <Box mx="auto">
          <PlayButton ontFamily="submenu" text="Voir le film" color="white" />
        </Box>
      </Flex>
    </HeaderBackground>
  </>
)

export default Header
