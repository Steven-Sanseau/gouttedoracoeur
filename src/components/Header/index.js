import React from 'react'
import { Text, Heading, Card, Flex } from 'rebass'

import PlayButton from '../Atomic/PlayButton'

const Header = () => (
  <>
    <Card
      py={7}
      backgroundImage="url(https://source.unsplash.com/random/1024x768)"
      backgroundSize="cover"
      borderRadius={8}
      color="white"
      bg="darkgray"
    >
      <Heading textAlign="center" fontSize={[5, 6]}>
        Un documentaire de Nathalie Perrin, Christine Ledésert et Daniel Bouy
      </Heading>
      <Text textAlign="center">Goutte d'or à Coeur</Text>
      <Text textAlign="center">Sur une idée originale de Daniel Bouy</Text>
      <Text textAlign="center">2018</Text>
      <Flex alignItems="center">
        <PlayButton text="Voir le film" />
      </Flex>
    </Card>
  </>
)

export default Header
