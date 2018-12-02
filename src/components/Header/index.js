import React from 'react'
import { Text, Heading, Card, Flex, Box } from 'rebass'

import Blob from '../Atomic/Blob'
import PlayButton from '../Atomic/PlayButton'

const Header = () => (
  <>
    <Card
      pb={8}
      pt={7}
      m={-2}
      backgroundImage="url(https://source.unsplash.com/random/1024x768)"
      backgroundSize="cover"
      color="white"
      bg="darkgray"
    >
      <Blob size="300" color="white" />
      <Heading textAlign="center" fontSize={[8, 9]} css={{ zIndex: 1100 }}>
        Goutte d'or à Coeur
      </Heading>
      <Text textAlign="center" fontSize={4} py={3}>
        Un documentaire de Nathalie Perrin, Christine Ledésert et Daniel Bouy
      </Text>
      <Text textAlign="center" fontSize={3} py={2}>
        Sur une idée originale de Daniel Bouy
      </Text>
      <Text textAlign="center" fontSize={3} py={2}>
        2018
      </Text>
      <Flex>
        <Box mx="auto">
          <PlayButton text="Voir le film" color="white" />
        </Box>
      </Flex>
    </Card>
  </>
)

export default Header
