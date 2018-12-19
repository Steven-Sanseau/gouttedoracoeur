import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layouts/layout'

// Components
import Cgu from '../components/Cgu'

const CguPage = () => (
  <>
    <Layout>
      <Helmet>
        <title>Goutte d'or à Coeur le film</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Documentaire Goutte d'or à Coeur" />
      </Helmet>
      <Cgu />
    </Layout>
  </>
)

export default CguPage
