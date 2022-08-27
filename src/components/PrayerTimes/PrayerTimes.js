import React from 'react'
import "../PrayerTimes/PrayerTimes.css"

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '24336d6acfmsh4a76f6be5740e4fp1c5c78jsne235e5f7cf6b',
		'X-RapidAPI-Host': 'aladhan.p.rapidapi.com'
	}
};

const PrayerTimes = () => {
  let [data, setData] = React.useState(null);
  
fetch('http://api.aladhan.com/v1/timingsByCity?city=Henderson&country=United States&method=8, options')
  .then((response) => {
      return response.json();
    })
  .then((data) => {
    setData(data['data']);
  })
	.catch(err => {
    console.error(err)
    data = null;
  });

  return ( data ?
    <div className="prayerBox">
      <h1>Prayer Times</h1>
      <div className="fajr">
      <p>Fajr: </p>
      <p>{data.timings.Fajr}</p>
      </div>
      <div className="dhuhr">
      <p>Dhuhr:</p>
      <p>{data.timings.Dhuhr}</p>
      </div>
      <div className="asr">
      <p>Asr:</p> 
      <p>{data.timings.Asr} </p>
      </div>
      <div className="maghrib">
      <p>Maghrib:</p> 
      <p>{data.timings.Maghrib}</p>
      </div>
      <div className="isha">
      <p>Isha: </p> 
      <p>{data.timings.Isha}</p>
      </div>
    </div> : <div>Waiting</div>
  )
}

export default PrayerTimes
