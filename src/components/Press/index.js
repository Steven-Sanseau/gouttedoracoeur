import React from 'react'
import { Flex, Box, Heading, Text, Card } from 'rebass'

const Press = () => (
  <>
    <Flex mx={-2} flexWrap="wrap">
      <Box bg={'background_blue'} width={1}>
        <Flex alignItems="center">
          <Card
            mx="auto"
            bg="white"
            width={6 / 9}
            borderRadius={50}
            py={5}
            px={6}
          >
            <Heading textAlign="center" fontSize={7} mb={4}>
              Communiqué de Presse
            </Heading>
            <Text textAlign="justify" fontSize={3}>
              loremipsum
            </Text>
          </Card>
        </Flex>
      </Box>
    </Flex>
  </>
)

export default Press
