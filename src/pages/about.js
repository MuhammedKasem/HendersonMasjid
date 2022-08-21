import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <Seo title="About Us" />
    <h1>About Us</h1>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default About
