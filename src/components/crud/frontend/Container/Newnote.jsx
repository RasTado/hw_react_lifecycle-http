import React, { useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import { grey } from "@material-ui/core/colors";

export default function NewNote(props) {
  const [newNote, setNewNote] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (newNote === "") {
      return;
    }
    props.onSubmitHandler(newNote);
    setNewNote("");
  };
  const onChangeHandler = (event) => {
    const { value } = event.target;
    setNewNote(value);
  };

  return (
    <form className="Note" onSubmit={onSubmitHandler}>
      <label htmlFor="NewNote" className="NewNote_label">
        <input
          className="textarea"
          id="NewNote"
          rows="3"
          name="NewNote"
          placeholder="Text new note"
          onChange={onChangeHandler}
          value={newNote}
        />
      </label>
      <button type="submit" className="btn PostBtn">
        <div className="btn">
          <SendIcon
            style={{ color: grey[900], paddingLeft: "3px", fontSize: 20 }}
          />
        </div>
      </button>
    </form>
  );
}
