import React from "react";
import NewNote from "./Newnote";
import Note from "./Note";
import UpdateBtn from "./UpdateBtn";

export default function Container({
  notes,
  onDeleteHandler,
  onUpdateHandler,
  onSubmitHandler,
}) {
  return (
    <div className="Container">
      <header className="Container_Header">
        <h2 className="Container_title">Notes</h2>
        <UpdateBtn onUpdateHandler={onUpdateHandler} />
      </header>
      <ul className="notes_container">
        {notes.map((note) => (
          <Note key={note.id} note={note} onDeleteHandler={onDeleteHandler} />
        ))}
      </ul>
      <NewNote onSubmitHandler={onSubmitHandler} />
    </div>
  );
}
