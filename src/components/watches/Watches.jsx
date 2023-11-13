import React, { useState } from "react";
import moment from "moment";
import Input from "./Input/Input";
import WatchesB from "./Watches/WatchesB";

import "./Watches.css";

export default function Watches() {
  const [watch, setWatch] = useState([
    {
      name: "LocalTime",
      timeZone: moment().utcOffset(),
      id: "0",
    },
  ]);
  const inputData = [
    {
      inputName: "name",
      inputLabel: "Name",
      inputType: "text",
      placeholder: "Name",
      id: `${Date.now()}-${Math.random()}`,
    },
    {
      inputName: "timeZone",
      inputLabel: "Time Zone",
      inputType: "number",
      placeholder: "UTC",
      id: `${Date.now()}-${Math.random()}`,
    },
  ];
  const btnText = "Add";

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const { name, timeZone } = event.target;
    setWatch((prevWatch) => [
      ...prevWatch,
      {
        name: name.value,
        timeZone: timeZone.value * 60,
        id: `${Date.now()}-${Math.random()}`,
      },
    ]);
  };

  const onClickHandler = (event) => {
    const removeId = event.target.dataset.id;
    const newWatch = watch.filter((el) => el.id !== removeId);
    setWatch(newWatch);
  };

  return (
    <div className="Watches-app">
      <Input
        inputData={inputData}
        btnText={btnText}
        onSubmitHandler={onSubmitHandler}
      />
      <WatchesB watch={watch} onClickHandler={onClickHandler} />
    </div>
  );
}
