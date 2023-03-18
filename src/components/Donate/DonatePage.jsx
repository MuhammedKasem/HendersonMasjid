import React from "react"
import "./DonatePage.css"
import PrayerTimes from '../PrayerTimes/PrayerTimes.js'
import DonateButton from '../DonateButton/DonateButton.jsx'
import { StaticImage } from "gatsby-plugin-image"
import MasjidVideo from "../../images/masjidvideo.mp4"
const DonatePage = () => {
  const [width, setWidth] = React.useState(0);
  const breakpoint = 620;

  React.useEffect(() => {
      setWidth(window.innerWidth);
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <>
      <div className="donate">
        {width < breakpoint ? <div></div> : <PrayerTimes />}
        <div className="donateContainer">
          <h1 className="heroTitle">Donations</h1>
          <h2>Help support your community!</h2>
          <div className="infoBox">
            <video muted loop controls={true}>
            <source src={MasjidVideo} type="video/mp4"/>
          </video>
            <p>This is the opportunity of a lifetime to help create a center of worship for not only your generation, but for the generations to come InshAllah.</p>
            <div className="hadith">
            <blockquote>The Messenger of Allah (saw) said, "When a person dies, his deeds come to an end except for three: Sadaqah Jariyah (a continuous charity), or knowledge from which benefit is gained, or a righteous child who prays for him". [Muslim]</blockquote>
            <br/>
            <blockquote dir='auto'> عَنْ أَبِي هُرَيْرَةَ رضي الله تعالى عنه: أَنَّ رَسُولَ اللَّهِ ﷺ قَالَ: إِذَا مَاتَ ابنُ آدم انْقَطَعَ عَنْهُ عَمَلُهُ إِلَّا مِنْ ثَلَاثٍ: صَدَقَةٍ جَارِيَةٍ، أو عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ. رَوَاهُ مُسْلِمٌ. </blockquote>
            </div>
            <p>The Muslim community in the Kerr Lake area has, alhamdulillah, grown exponentially in the past few years. The current prayer unit is located in a back alley behind a furniture store in downtown Henderson. The occupant capacity and parking of the current prayer area is unfortunately way below the required number to accommodate our fast-growing community.</p>
            <p>
              To jump-start this project, several members of the community have generously purchased approximately 18 acres of land and designated it as Waqf for the benefit of the Muslim community. The land will house a 6,000 sqft masjid, a library, a school, a cemetery, a family park, and a soccer field. The land will provide a safe and private area for the community and is designed for future expansion as the community grows.
              The community center is conveniently located near Highway 85, Highway 39, and US 1. It will serve as a center for Muslims in both North Carolina and Virginia.
            </p>
            <a href="https://www.paypal.com/donate/?hosted_button_id=H7UGK2DWE28X8">
              <button className="donationBtn">Donate</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default DonatePage
