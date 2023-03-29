import * as React from "react"

import Layout from "../components/Layouts/Layout"
import SubHeader from "../components/Layouts/SubHeader"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SubHeader />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
