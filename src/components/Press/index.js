import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'
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
              {/* <StaticQuery
                query={graphql`
                  query {
                    allFile(
                      filter: { sourceInstanceName: { eq: "presse.pdf" } }
                    ) {
                      edges {
                        node {
                          extension
                          dir
                          modifiedTime
                        }
                      }
                    }
                  }
                `}
                render={data => {
                  console.log(data)
                }}
              /> */}
            </Text>
          </Card>
        </Flex>
      </Box>
    </Flex>
  </>
)

export default Press
