import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./image.css"
import { GatsbyImage } from "gatsby-plugin-image"

const Image = () => {
  return (
    <div className="image-container">
      <h1>View our masjid!</h1>
      <div className="image-grid">
        <StaticImage src="../images/masjidimage.jpg" className="image-item" />
        <StaticImage src="../images/quran.jpg" className="image-item"/>
        <StaticImage src="../images/masjid4.jpg" className="image-item"/>
        <StaticImage src="../images/masjid2.jpg" className="image-item"/>
        <StaticImage src="../images/masjid3.jpg" className="image-item"/>
        <StaticImage src="../images/quranimg.jpg" className="image-item"/>
      </div>
    </div>
  )
}

export default Image
