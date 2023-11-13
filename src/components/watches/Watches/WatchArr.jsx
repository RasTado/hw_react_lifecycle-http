import React, { useState, useEffect } from "react";
import WatchInit from "./WatchInit";
import WatchArrB from "./WatchArrB";

export default function WatchArr({ onClickHandler, item }) {
  const [time, setTime] = useState(WatchInit(item.timeZone));

  useEffect(() => {
    const timerID = setTimeout(() => {
      setTime(WatchInit(item.timeZone));
    }, 1000);
    return () => {
      clearTimeout(timerID);
    };
  });

  return (
    <li className="clock">
      <span className="Watch_name">
        {item.name}
        {` (UTC ${item.timeZone > 0 ? "+" : ""}${item.timeZone / 60})`}
        <span className="Watch_delete">
          <a
            className="material-icons"
            data-id={item.id}
            onClick={onClickHandler}
          >
            cancel
          </a>
        </span>
      </span>
      <WatchArrB />
      <div className="hours-container">
        <div
          className="hours"
          style={{
            transform: `rotateZ(${time.hours}deg)`,
            WebkitTransform: `rotateZ(${time.hours}deg)`,
          }}
        ></div>
      </div>
      <div className="minutes-container">
        <div
          className="minutes"
          style={{
            transform: `rotateZ(${time.minutes}deg)`,
            WebkitTransform: `rotateZ(${time.minutes}deg)`,
          }}
        ></div>
      </div>
      <div className="seconds-container">
        <div
          className="seconds"
          style={{
            transform: `rotateZ(${time.seconds}deg)`,
            WebkitTransform: `rotateZ(${time.seconds}deg)`,
          }}
        ></div>
      </div>
    </li>
  );
}
