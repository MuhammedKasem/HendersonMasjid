import React from "react";
import "./AboutPage.css";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
    return (
        <div className="aboutContainer">
            <h1 className="aboutTitle">About Us</h1>
            <div className="aboutBox">
                <StaticImage
                    src='../../images/quran.jpg'
                    alt="About Us"
                    layout="fullWidth"
                    aspectRatio={3/1}
                    style={{borderRadius: '10px'}}
                />
                <p>Welcome to the Muslim Community of Henderson, North Carolina. We are a vibrant, diverse, and growing community striving to serve the needs of our members and contribute positively to the broader society around us.</p>
                <p>We are pleased to have recently inaugurated a new mosque, or masjid, here in Henderson. This project has been an incredible journey and is a testament to the strength and dedication of our community members. The new masjid is not just a place of worship, but a community center and a symbol of unity and growth for all Muslims in the region.</p>
                <p>Our community is based on mutual respect, inclusivity, and a commitment to sharing the teachings of Islam. We welcome people from all walks of life to join us in our activities and learn more about our faith.</p>
                <p>The new masjid is located at 2142 Satterwhite Point Rd, Henderson, NC 27537. This beautiful location allows us to better serve our community with regular prayer services, educational programs, community events, and more. We look forward to growing together as a community and continuing to contribute positively to the broader Henderson area.</p>
                <p>For any inquiries, please don't hesitate to reach out to us at <a href="mailto:mijmasjid@gmail.com">mijmasjid@gmail.com</a>.</p>
            </div>
        </div>
    )
}

export default AboutPage;
