import React from "react"
import "./HeroSection.css"
import { Button } from "../ButtonElements"
import PrayerTimes from "../PrayerTimes/PrayerTimes"
import { Link } from "gatsby"

function HeroSection() {
  return (
    <>
      <div className="hero-container">
        <div className="main-container">
          <h1>Donate Today!</h1>
          <p>Help support your masjid!</p>
          <p id="raisedTxt">Total Raised: $220,000</p>
          <p id="goalTxt">Our Goal: $800,000</p>
          <div className="hero-btns">
            <Link to="/donate">
              <button className="donateBtn">Donate Now</button>
              </Link>

          </div>
          <div className="quoteContainer">
            <p id="arabicTxt"> مَنْ بَنَى مَسْجِدًا لِلَّهِ كَمَفْحَصِ قَطَاةٍ أَوْ أَصْغَرَ بَنَى اللَّهُ لَهُ بَيْتًا فِي الْجَنَّةِ</p>
            <p> "Whoever builds a masjid for the sake of Allah Almighty, like a sparrow's nest or even smaller, Allah Almighty will build for him a house in Paradise."</p>
          </div>
          <PrayerTimes />
        </div>
      </div>

    </>
  )
}

export default HeroSection
