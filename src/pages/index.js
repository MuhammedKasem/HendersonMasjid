import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import HeroSection from "../components/HeroSection/"
import Image from "../components/image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <Image />
 </Layout>
)


export default IndexPage
