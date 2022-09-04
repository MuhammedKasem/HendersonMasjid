import * as React from "react"
import HeroSection from "../components/HeroSection/"
import Image from "../components/image"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <Image />
 </Layout>
)


export const Head = () => <Seo title="Home" />

export default IndexPage
