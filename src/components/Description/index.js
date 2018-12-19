import React from 'react'
import { Box, Flex, Heading, Text } from 'rebass'

import Blob from '../Atomic/Blob'
import Position from '../Atomic/Position'

const Description = () => (
  <>
    <Flex flexWrap="wrap" mx={-2} py={6}>
      <Box width={[0.8, '80%']} mx="auto">
        <Flex flexWrap="wrap" alignItems="center" mx={-2}>
          <Box mx="auto" width={[1, 1 / 4]}>
            <Position top="-5rem" left="8rem">
              <Blob color="green" size="68" />
            </Position>
            <Heading fontSize={6} fontFamily="menu">
              Un décor
            </Heading>
            <Text fontFamily="text" fontWeight="400">
              Le quartier de la Goutte d'Or dans le 18ème arrondissement de
              Paris, son centre social associatif Accueil Goutte d'Or.
            </Text>
          </Box>
          <Box mx="auto" mt={[4, 0]} width={[1, 1 / 4]}>
            <Heading fontSize={6} lineHeight={1.7} fontFamily="menu">
              Un
              <Position top="-5rem" marginBottom="-7rem" left="8rem">
                <Blob color="red" size="76" />
              </Position>
              <br />
              personnage
            </Heading>
            <Text fontFamily="text" fontWeight="400">
              Christine Ledésert, directrice d'Accueil Goutte d'Or pendant 26
              ans.
            </Text>
          </Box>
          <Box mx="auto" mt={[5, 0]} width={[1, 1 / 4]}>
            <Position top="-5rem" left="4rem">
              <Blob color="blue" size="60" />
            </Position>
            <Position top="-3.5rem" left="7rem">
              <Blob color="blue" size="30" />
            </Position>

            <Heading fontSize={6} lineHeight={1.3} fontFamily="menu">
              Une histoire
            </Heading>
            <Text fontFamily="text" fontWeight="400">
              À quelques jours de sa retraite professionnelle, Christine partage
              avec nous sa vision de la Goutte d'Or...
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  </>
)

export default Description
