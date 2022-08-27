import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import  DonatePage  from "../components/Donate/DonatePage"
const Donate = () => (
  <Layout>
    <Seo title="Donate" />
    <DonatePage />
  </Layout>
)

export const Head = () => <Seo title="Page three" />

export default Donate
