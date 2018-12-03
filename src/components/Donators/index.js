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
            <Heading fontFamily="menu" fontSize={5} textAlign="center" pb={4}>
              Merci a nos donateurs
            </Heading>
            <Flex flexWrap="wrap">
              {props.donators.map(donator => (
                <Box width={[1, 1 / 5]} key={donator.name + donator.firstName}>
                  <DonatorText fontFamily="text" fontWeight="400" fontSize={1}>
                    {donator.firstName} {donator.name}
                  </DonatorText>
                </Box>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  </>
)

export default Donators
