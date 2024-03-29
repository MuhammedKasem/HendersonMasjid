import "./HeroSection.css"
import * as React from "react"
import PrayerTimes from "../PrayerTimes/PrayerTimes"
import {graphql, Link, useStaticQuery} from "gatsby"
import QuickEvents from "../QuickEvents/QuickEvents";
import QuranVerse from "../QuranVerse/QuranVerse";

function HeroSection() {

  const data = useStaticQuery(graphql`
    query {
      allContentfulFundraiser {
    nodes {
      amountRaised
      project
      goal
    }
  }
}
    
  `);

  const fundraiser = data.allContentfulFundraiser.nodes[0];

  // format the numbers as money
  const amountRaised = parseFloat(fundraiser.amountRaised).toLocaleString('en-US');
  const goal = parseFloat(fundraiser.goal).toLocaleString('en-US');

  return (
      <>
        <div className="hero-container">
          <div className="main-container">
            <div className="sub-container">
              <h1>Donate Today!</h1>
              <p>Help support your masjid!</p>
              <p id="raisedTxt">Total Raised: ${amountRaised} </p>
              <p id="goalTxt">Phase #1 Goal: ${goal}</p>
              <div className="hero-btns">
                <Link to="/donate">
                  <button className="donateBtn">Donate Now</button>
                </Link>
              </div>
            </div>

            <div className="quoteContainer">
              <p id="arabicTxt">مَنْ بَنَى لِلَّهِ مَسْجِدًا بَنَى اللَّهُ لَهُ مِثْلَهُ فِي الْجَنَّةِ</p>
              <p> "Whoever builds a masjid for the sake of Allah Almighty, like a sparrow's nest or even smaller, Allah Almighty will build for him a house in Paradise."</p>
            </div>
            <PrayerTimes />
            <QuickEvents/>
            <QuranVerse/>
          </div>
        </div>

      </>
  )
}

export default HeroSection
