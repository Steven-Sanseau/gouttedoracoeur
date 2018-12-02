import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../layouts/layout'

// Components
import Header from '../components/Header'
import Footer from '../components/Footer'
import VideoList from '../components/VideoList'
import Press from '../components/Press'
import Description from '../components/Description'

const IndexPage = () => (
  <>
    <Layout>
      <Helmet>
        <title>Goutte d'or à Coeur le film</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Documentaire Goutte d'or à Coeur" />
      </Helmet>
      <Header />
      <Description />
      <VideoList />
      <Press />
      <Footer />
    </Layout>
  </>
)

export default IndexPage
