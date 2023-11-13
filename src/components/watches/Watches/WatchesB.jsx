import React from "react";
import WatchArr from "./WatchArr";

export default function WatchesB(props) {
  const { watch, onClickHandler } = props;
  return (
    <div>
      <ul className="WatchField">
        {watch.map((item) => (
          <WatchArr key={item.id} item={item} onClickHandler={onClickHandler} />
        ))}
      </ul>
    </div>
  );
}
