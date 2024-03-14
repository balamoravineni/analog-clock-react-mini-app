import { React, useState, useEffect } from "react";
import classes from "./clock.module.css";

function Clock() {
  const [time, setTime] = useState();
  const [shortHandDegree, setShortHandDegree] = useState(0);
  const [longHandDegree, setLongHandDegree] = useState(0);
  const [secondsHandDegree, setSecondsHandDegree] = useState(0);

  useEffect(() => {
    setInterval(() => {
      const timeNow = new Date();
      setTime(timeNow.toLocaleTimeString());
      const hours = timeNow.getHours() % 12;
      setShortHandDegree((hours / 12) * 360);
      const minutes = timeNow.getMinutes();
      setLongHandDegree((minutes / 60) * 360);
      const seconds = timeNow.getSeconds();
      setSecondsHandDegree((seconds / 60) * 360);
      //   console.log(hours, minutes, seconds);
      //   console.log(shortHandDegree, longHandDegree, secondsHandDegree);
    }, 1000);
  }, []);

  //   return <h1>{time}</h1>;
  //small hand: '360 degree -> 12 parts'
  //3.00 pm -> 3/12 * 360 -> 90 degrees
  return (
    <div className={classes.clock}>
      {time}
      <div
        className={classes["short-hand"]}
        style={{
          transformOrigin: "bottom center",
          transform: `rotate(${shortHandDegree}deg)`,
        }}
      ></div>
      <div
        className={classes["long-hand"]}
        style={{
          transformOrigin: "bottom center",
          transform: `rotate(${longHandDegree}deg)`,
        }}
      ></div>
      <div
        className={classes["seconds-hand"]}
        style={{
          transformOrigin: "bottom center",
          transform: `rotate(${secondsHandDegree}deg)`,
        }}
      ></div>
    </div>
  );
}

export default Clock;
