import React, { useEffect } from "react"
import "./DonatePage.css"
import { Script } from 'gatsby'
import DonateButton from '../PaypalButton'

const DonatePage = () => {
  return (
    <div className="donateContainer">
      <h1 className="heroTitle">Donations</h1>
      <h2>Help support your community!</h2>
      <div className="infoBox">
        <p>This is the opportunity of a lifetime to help create a center of worship for not only your generation, but for the generations to come InshAllah.</p>
        <p className="hadith">The Messenger of Allah (saw) said, "When a person dies, his deeds come to an end except for three: Sadaqah Jariyah (a continuous charity), or knowledge from which benefit is gained, or a righteous child who prays for him". [Muslim]</p>
        <p>The Muslim community in the Kerr Lake area has, alhamdulillah, grown exponentially in the past few years. The current prayer unit is located in a back alley behind a furniture store in downtown Henderson. The occupant capacity and parking of the current prayer area is unfortunately way below the required number to accommodate our fast-growing community.</p>
        <p>
          To jump-start this project, several members of the community have generously purchased approximately 18 acres of land and designated it as Waqf for the benefit of the Muslim community. The land will house a 6,000 sqft masjid, a library, a school, a cemetery, a family park, and a soccer field. The land will provide a safe and private area for the community and is designed for future expansion as the community grows.
          The community center is conveniently located near Highway 85, Highway 39, and US 1. It will serve as a center for Muslims in both North Carolina and Virginia.
        </p>
      <DonateButton></DonateButton>
      </div>

    </div>
  )
}

export default DonatePage
