import React from 'react'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h2> :) 👁 😈 beep beep who got keys to tha jeep VROOM VROOM 🚙 🚨 
      this should be at feature.test-envvars3.pages.dev
      This site shows multiple ways of using ENV variables as shown in the{' '}
      <a href="https://www.gatsbyjs.org/docs/environment-variables">
        documentation
      </a>
    </h2>
    <p>
      Command line env vars :{' '}
      {`${process.env.GATSBY_SOME_ENV_VAR}`}
    </p>
  </Layout>
)

export default IndexPage
