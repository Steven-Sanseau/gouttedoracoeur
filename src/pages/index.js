import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layouts/layout'

// Components
import Header from '../components/Header'
import Footer from '../components/Footer'
import VideoList from '../components/VideoList'
import Donators from '../components/Donators'
import Press from '../components/Press'
import Description from '../components/Description'

const IndexPage = ({ data }) => (
  <>
    <Layout>
      <Helmet>
        <title>Goutte d'or à Coeur le film</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Documentaire Goutte d'or à Coeur" />
      </Helmet>
      <Header />
      <Description />
      <VideoList videoList={data.videoList.edges[0].node.childDataJson} />
      <Donators donators={data.donators.edges[0].node.childrenDonatorsJson} />
      <Press presseFile={data.pressKitFile.edges[0].node.publicURL} />
      <Footer />
    </Layout>
  </>
)

export const query = graphql`
  query DonatorQuery {
    donators: allFile(
      filter: { name: { eq: "donators" }, sourceInstanceName: { eq: "data" } }
    ) {
      edges {
        node {
          childrenDonatorsJson {
            name
            firstName
          }
        }
      }
    }
    videoList: allFile(
      filter: { name: { eq: "videoList" }, sourceInstanceName: { eq: "data" } }
    ) {
      edges {
        node {
          childDataJson {
            sequences {
              title
              link
              img
              description
            }
            meeting {
              title
              link
              img
              description
            }
            talk {
              title
              link
              img
              description
            }
          }
        }
      }
    }
    pressKitFile: allFile(
      filter: { name: { eq: "presse" }, sourceInstanceName: { eq: "data" } }
    ) {
      edges {
        node {
          name
          publicURL
        }
      }
    }
  }
`

export default IndexPage
