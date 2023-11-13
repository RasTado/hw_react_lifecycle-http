import React from "react";

export default function InputC(props) {
  const { item, onChangeHandler } = props;
  const { inputName, inputLabel, inputType, placeholder } = item;
  return (
    <div className="InputC">
      <label htmlFor={inputName} className="InputC__label">
        {inputLabel}
      </label>
      <input
        className="InputC__text"
        id={inputName}
        name={inputName}
        type={inputType}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
}
