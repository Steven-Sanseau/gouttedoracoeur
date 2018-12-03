import React from 'react'
import { Box, Flex, Heading, Text } from 'rebass'

import Blob from '../Atomic/Blob'
import Position from '../Atomic/Position'

const Description = () => (
  <>
    <Flex flexWrap="wrap" mx={-2} py={6}>
      <Box width={[1, '80%']} mx="auto">
        <Flex flexWrap="wrap" alignItems="center" mx={-2}>
          <Box mx="auto" width={[1, 1 / 4]}>
            <Position>
              <Blob color="green" size="68" />
            </Position>
            <Heading fontSize={6} fontFamily="menu">
              Un Decor
            </Heading>
            <Text fontFamily="text" fontWeight="400">
              Le quartier de la goutte d'or dans le 18ème arrondissement de
              Paris, son centre social associatif Accueil Goutte d'or.
            </Text>
          </Box>
          <Box mx="auto" width={[1, 1 / 4]}>
            <Heading fontSize={6} fontFamily="menu">
              Un
              <Position>
                <Blob color="red" size="76" />
              </Position>
              <br />
              Personnage
            </Heading>
            <Text fontFamily="text" fontWeight="400">
              Christine Ledésert, directrice d'Accueil Goutte d'Or pendant 26
              ans.
            </Text>
          </Box>
          <Box mx="auto" width={[1, 1 / 4]}>
            <Position>
              <Blob color="blue" size="60" />
              <Blob color="blue" size="30" />
            </Position>

            <Heading fontSize={6} fontFamily="menu">
              Une Histoire
            </Heading>
            <Text fontFamily="text" fontWeight="400">
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
