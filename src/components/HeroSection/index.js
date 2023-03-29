import "./HeroSection.css"
import * as React from "react"
import PrayerTimes from "../PrayerTimes/PrayerTimes"
import { Link } from "gatsby"
import QuickEvents from "../QuickEvents/QuickEvents";
import QuranVerse from "../QuranVerse/QuranVerse";

const events = [
  {
    id: 1,
    title: "Friday Prayer",
    description: "Join us for Friday prayer at the mosque",
    date: "Friday, March 25th at 1:00pm",
    link: "/events/friday-prayer"
  },
  {
    id: 2,
    title: "Community Iftar",
    description: "Join us for a community iftar during Ramadan",
    date: "Wednesday, May 11th at 7:30pm",
    link: "/events/community-iftar"
  },
  {
    id: 3,
    title: "Community Iftar",
    description: "Join us for a community iftar during Ramadan",
    date: "Wednesday, May 11th at 7:30pm",
    link: "/events/community-iftar"
  },
  {
    id: 4,
    title: "Community Iftar",
    description: "Join us for a community iftar during Ramadan",
    date: "Wednesday, May 11th at 7:30pm",
    link: "/events/community-iftar"
  },


];

function HeroSection() {
  return (
    <>
      <div className="hero-container">
        <div className="main-container">
          <div className="sub-container">
        <h1>Donate Today!</h1>
          <p>Help support your masjid!</p>
          <p id="raisedTxt">Total Raised: $98,926.62 </p>
          <p id="goalTxt">Phase #1 Goal: $800,000</p>
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
          <QuickEvents events={events}/>
          <QuranVerse/>
        </div>
      </div>

    </>
  )
}

export default HeroSection
