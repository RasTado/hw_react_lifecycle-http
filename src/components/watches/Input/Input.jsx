import React from "react";
import InputC from "./InputC";
import "./Input.css";

export default function Input(props) {
  const { onChangeHandler, onSubmitHandler, inputData, btnText } = props;
  return (
    <form className="InputField" onSubmit={onSubmitHandler}>
      {inputData.map((item) => (
        <InputC key={item.id} item={item} onChangeHandler={onChangeHandler} />
      ))}
      <div className="Button">
        <button type="submit" className="btnW">
          {btnText}
        </button>
      </div>
    </form>
  );
}
