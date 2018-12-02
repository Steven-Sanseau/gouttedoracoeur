import React from 'react'
import { Box, Flex, Heading, Text } from 'rebass'

const Description = () => (
  <>
    <Flex flexWrap="wrap" mx={-2} py={6}>
      <Box width={[1, '80%']} mx="auto">
        <Flex flexWrap="wrap" alignItems="center" mx={-2}>
          <Box mx="auto" width={[1, 1 / 4]}>
            <Heading fontSize={6}>Un Decor</Heading>
            <Text>
              Le quartier de la goutte d'or dans le 18ème arrondissement de
              Paris, son centre social associatif Accueil Goutte d'or.
            </Text>
          </Box>
          <Box mx="auto" width={[1, 1 / 4]}>
            <Heading fontSize={6}>Un Personnage</Heading>
            <Text>
              Christine Ledésert, directrice d'Accueil Goutte d'Or pendant 26
              ans.
            </Text>
          </Box>
          <Box mx="auto" width={[1, 1 / 4]}>
            <Heading fontSize={6}>Une Histoire</Heading>
            <Text>
              A quelques jours de sa retraite profesionelle, Christine partage
              avec nous sa vision de la Goutte d'Or ...
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  </>
)

export default Description
