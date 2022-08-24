import React from "react"
import "./HeroSection.css"
import { Button } from "../ButtonElements"

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Donate Today!</h1>
      <p>Help support your masjid!</p>
      <p className="goalTxt">Our Goal: $200,000</p>
      <p className="raisedTxt">Total Raised: $86,000</p>
      <div className="hero-btns">
        <Button fontBig big primary>Donate</Button>
      </div>
      <div className="quoteContainer">
        <p> مَنْ بَنَى مَسْجِدًا لِلَّهِ كَمَفْحَصِ قَطَاةٍ أَوْ أَصْغَرَ بَنَى اللَّهُ لَهُ بَيْتًا فِي الْجَنَّةِ</p>
        <p> "Whoever builds a masjid for the sake of Allah Almighty, like a sparrow's nest or even smaller, Allah Almighty will build for him a house in Paradise."</p>
      </div>
    </div>
  )
}

export default HeroSection
