import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./image.css"

const Image = () => {
  return (
    <div className="image-container">
      <h1>View our masjid!</h1>
      <div className="image-grid">
        <StaticImage src="../images/masjidimage.jpg" className="image-item" alt=""/>
        <StaticImage src="../images/quran.jpg" className="image-item" alt=""/>
        <StaticImage src="../images/masjid4.jpg" className="image-item" alt=""/>
        <StaticImage src="../images/masjid2.jpg" className="image-item" alt=""/>
        <StaticImage src="../images/masjid3.jpg" className="image-item" alt=""/>
        <StaticImage src="../images/quranimg.jpg" className="image-item" alt="test"/>
      </div>
    </div>
  )
}

export default Image
