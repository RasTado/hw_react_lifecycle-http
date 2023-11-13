import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { red } from "@material-ui/core/colors";

export default function Note({ note, onDeleteHandler }) {
  return (
    <li className="Note">
      {note.content}
      <div className="btn DeleteBtn" onClick={() => onDeleteHandler(note.id)}>
        <CloseIcon style={{ color: red[500], fontSize: 20 }} />
      </div>
    </li>
  );
}
