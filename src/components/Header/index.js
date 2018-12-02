import React from 'react'
import { Text, Heading, Card, Flex, Box } from 'rebass'

import Blob from '../Atomic/Blob'
import PlayButton from '../Atomic/PlayButton'

const Header = () => (
  <>
    <Card
      py={7}
      m={-2}
      backgroundImage="url(https://source.unsplash.com/random/1024x768)"
      backgroundSize="cover"
      color="white"
      bg="darkgray"
    >
      <Blob size="120" color="white" />
      <Heading textAlign="center" fontSize={[5, 6]}>
        Goutte d'or à Coeur
      </Heading>
      <Text textAlign="center">
        Un documentaire de Nathalie Perrin, Christine Ledésert et Daniel Bouy
      </Text>
      <Text textAlign="center">Sur une idée originale de Daniel Bouy</Text>
      <Text textAlign="center">2018</Text>
      <Flex>
        <Box mx="auto">
          <PlayButton text="Voir le film" color="white" />
        </Box>
      </Flex>
    </Card>
  </>
)

export default Header
