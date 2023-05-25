import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutPage from "../components/About/AboutPage";

const About = () => (
  <Layout>
    <Seo title="About Us" />
      <AboutPage></AboutPage>
  </Layout>
)

export const Head = () => <Seo title="About" />

export default About
