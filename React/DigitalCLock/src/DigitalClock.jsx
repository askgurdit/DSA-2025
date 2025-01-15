import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    // Convert 24-hour time to 12-hour time
    hours = hours % 12 || 12;

    // Pad with leading zeros
    //const paddedMinutes = String(minutes).padStart(2, "0");
    //const paddedSeconds = String(seconds).padStart(2, "0");

   

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
  }

  function padZero(number) {
        return (number < 10 ? "0" : "") + number
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span> {/* Call formatTime function here */}
      </div>
    </div>
  );
}

export default DigitalClock;
