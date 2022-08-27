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
      <p>Fajr: {data.timings.Fajr}</p>
      <p>Dhuhr: {data.timings.Dhuhr}</p>
      <p>Asr: {data.timings.Asr} </p>
      <p>Maghrib: {data.timings.Maghrib}</p>
      <p>Isha: {data.timings.Isha}</p>
    </div> : <div>Waiting</div>
  )
}

export default PrayerTimes
