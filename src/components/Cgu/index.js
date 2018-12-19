import React from 'react'
import { Box, Flex, Text } from 'rebass'
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
        <Text fontFamily="menu" fontSize={5} textAlign="center">
          Mentions Légales
        </Text>
        <Text mt={5} fontFamily="text" fontSize={3} textAlign="center">
          LE SITE EST HÉBERGÉ PAR NETLIFY <br />
          610 22nd Street Suite 315 San Francisco, <br /> CA 94107 United States
          <br />
          Téléphone: 844-899-7312
        </Text>
      </Box>
    </Flex>
  </>
)

export default Cgu
