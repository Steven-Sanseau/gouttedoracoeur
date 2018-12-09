import React from 'react'
import { Box, Flex, Heading, Text } from 'rebass'
import { Link } from 'gatsby'

const Cgu = () => (
  <>
    <Flex flexWrap="wrap" mx={-2} py={6}>
      <Box width={[0.8, '80%']} mx="auto">
        <Link to="/">
          <Text fontFamily="text" fontSize={4}>
            {'<'} Retour au Site
          </Text>
        </Link>
        <Text fontFamily="text" fontSize={4}>
          Mentions Légales
        </Text>
      </Box>
    </Flex>
  </>
)

export default Cgu
