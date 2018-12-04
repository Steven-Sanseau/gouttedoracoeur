import React from 'react'
import { Flex, Box, Heading, Text, Card } from 'rebass'

const Press = props => (
  <>
    <Flex mx={-2} flexWrap="wrap">
      <Box bg={'background_blue'} width={1}>
        <Flex alignItems="center">
          <Card
            mx="auto"
            bg="white"
            width={6 / 9}
            mt={5}
            borderRadius={50}
            py={5}
            px={6}
          >
            <Heading
              textAlign="center"
              fontFamily="menu"
              fontWeight="900"
              fontSize={6}
              css={{ letterSpacing: -1.25 }}
              mb={4}
            >
              Communiqué de Presse
            </Heading>
            <Text
              textAlign="justify"
              fontFamily="text"
              fontWeight="500"
              fontSize={3}
            >
              loremipsum
            </Text>

            <a href={props.presseFile}>Télécharger le communiqué</a>
          </Card>
        </Flex>
      </Box>
    </Flex>
  </>
)

export default Press
