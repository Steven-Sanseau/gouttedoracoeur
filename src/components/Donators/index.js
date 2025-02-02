import React from 'react'
import styled from 'styled-components'
import Hide from 'hidden-styled'
import { Flex, Box, Text, Heading } from 'rebass'

import Position from '../Atomic/Position'
import Blob from '../Atomic/Blob'

const DonatorText = styled(Text)`
  text-transform: capitalize;
`

const Donators = props => (
  <>
    <Flex mx={-2}>
      <Box width={1} bg="white">
        <Hide xs sm md>
          <Position top="-6rem" left="-20rem">
            <Blob size="500" color="red" rotate="-45" />
          </Position>
        </Hide>
        <Flex>
          <Box width={6 / 9} mx="auto" p={3}>
            <Heading fontFamily="menu" fontSize={5} textAlign="center" py={4}>
              Remerciements
            </Heading>
            <Text
              fontFamily="text"
              fontSize={3}
              textAlign="justify"
              fontWeight="500"
              mb={4}
            >
              La production du documentaire «Goutte d’Or à coeur» et la
              réalisation de ce site n’auraient pas été possibles sans la
              contribution financière de :
            </Text>
            <Flex flexWrap="wrap">
              {props.donators.map(donator => (
                <Box
                  width={[1, 1 / 5]}
                  p={2}
                  key={donator.name + donator.firstName}
                >
                  <DonatorText
                    fontFamily="text"
                    fontWeight="400"
                    lineHeight={1.7}
                    fontSize={1}
                  >
                    {donator.firstName} {donator.name}
                  </DonatorText>
                </Box>
              ))}
            </Flex>
            <Text
              fontFamily="text"
              fontSize={3}
              fontWeight="500"
              textAlign="center"
              my={4}
            >
              Un grand merci à nos donateurs !
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  </>
)

export default Donators
