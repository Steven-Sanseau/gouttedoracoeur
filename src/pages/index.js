import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../layouts/layout'

// Components
import Header from '../components/Header'
import Footer from '../components/Footer'
import VideoList from '../components/VideoList'

const IndexPage = () => (
  <>
    <Layout>
      <Helmet>
        <title>Goutte d'or à Coeur le film</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Documentaire Goutte d'or à Coeur" />
      </Helmet>
      <Header />
      <VideoList />
      <Footer />
    </Layout>
  </>
)

export default IndexPage
