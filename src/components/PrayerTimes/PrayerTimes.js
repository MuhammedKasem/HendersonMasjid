import React, { useEffect } from 'react'
import "../PrayerTimes/PrayerTimes.css"


const PrayerTimes = () => {
  let [data, setData] = React.useState(null);

  useEffect(() => {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=Henderson&country=United%20States&method=2s', { method: 'GET', mode: 'cors' })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data['data']);
        console.log(data);
      })
      .catch(err => {
        console.error(err)
        data = null;
      });
  }, [])

  function tConvert(time) {
    // Check correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
      time = time.slice(1);  // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  }

  return (data ?
    <div className="prayerBox">
      <h1>Prayer Times</h1>
      <h2><u>{data.date.gregorian.weekday.en}</u></h2>
      <div className="fajr">
        <p>Fajr:</p>
        <p className="time">{tConvert(data.timings.Fajr)}</p>
      </div>
      <div className="dhuhr">
        <p>Dhuhr:</p>
        <p className="time">{tConvert(data.timings.Dhuhr)}</p>
      </div>
      <div className="asr">
        <p>Asr:</p>
        <p className="time">{tConvert(data.timings.Asr)} </p>
      </div>
      <div className="maghrib">
        <p>Maghrib:</p>
        <p className="time">{tConvert(data.timings.Maghrib)}</p>
      </div>
      <div className="isha">
        <p>Isha:</p>
        <p className="time">{tConvert(data.timings.Isha)}</p>
      </div>
    </div> : <div>Waiting for Prayer Times</div>
  )
}

export default PrayerTimes
