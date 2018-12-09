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
            width={[0.9, 6 / 9]}
            mt={5}
            borderRadius={[30, 50]}
            py={[3, 5]}
            px={[3, 6]}
          >
            <Heading
              textAlign="center"
              fontFamily="menu"
              fontWeight="900"
              fontSize={[5, 6]}
              css={{ letterSpacing: -1.25 }}
              mb={[2, 4]}
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

            <Text
              textAlign="justify"
              fontFamily="text"
              fontWeight="500"
              fontSize={3}
            >
              <a href={props.presseFile}>Télécharger le communiqué</a>
            </Text>
          </Card>
        </Flex>
      </Box>
    </Flex>
  </>
)

export default Press
