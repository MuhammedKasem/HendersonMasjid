import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./image.css"

const Image = () => {
  return (
    <div className="image-container">
      <h1>View our masjid!</h1>
      <div className="image-grid">
          <StaticImage src="../images/masjidfoundation.jpeg" className="image-item" alt="test"/>
          <StaticImage src="../images/Construction#1.jpg" className="image-item" alt="test"/>
          <StaticImage src="../images/Const2.jpg" className="image-item" alt="test"/>
          <StaticImage src="../images/Construction3.jpg" className="image-item" alt="test"/>
          <StaticImage src="../images/Construction4.jpg" className="image-item" alt="test"/>
          <StaticImage src="../images/Construction5.jpg" className="image-item" alt="test"/>
          <StaticImage src="../images/Construction6.jpg" className="image-item" alt="test"/>
          <StaticImage src="../images/masjidfoundation2.jpeg" className="image-item" alt="test"/>
          <StaticImage src="../images/masjidfoundation3.jpeg" className="image-item" alt="test"/>
      </div>
    </div>
  )
}

export default Image
