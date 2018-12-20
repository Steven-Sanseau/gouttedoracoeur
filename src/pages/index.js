import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layouts/layout'

// Components
import Header from '../components/Header'
import Footer from '../components/Footer'
import VideoList from '../components/VideoList'
import Donators from '../components/Donators'
import Description from '../components/Description'

const IndexPage = ({ data }) => (
  <>
    <Layout>
      <Helmet>
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://www.gouttedoracoeur.fr/" />
        <meta property="og:title" content="Goutte d'Or à Coeur - Le Film" />
        <meta
          property="og:description"
          content="Un documentaire de 2018 réalisé par Christine Ledésert, directrice du centre social Accueil Goutte d'Or pendant 26 ans, Daniel Bouy, réalisateur, et Nathalie Perrin."
        />
        <meta
          property="og:image"
          content={data.images.edges[0].node.publicUrl}
        />
        <title>Goutte d'or à Coeur le film</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Un documentaire de 2018 réalisé par Christine Ledésert, directrice du centre social Accueil Goutte d'Or pendant 26 ans, Daniel Bouy, réalisateur, et Nathalie Perrin."
        />
      </Helmet>
      <Header />
      <Description />
      <VideoList videoList={data.videoList.edges[0].node.childDataJson} />
      <Donators donators={data.donators.edges[0].node.childrenDonatorsJson} />
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
    images: allFile(filter: { name: { eq: "facebook" } }) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }
`

export default IndexPage
