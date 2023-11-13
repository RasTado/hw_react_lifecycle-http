import React from "react";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import { green } from "@material-ui/core/colors";

export default function UpdateBtn({ onUpdateHandler }) {
  return (
    <div className="btn UpdateBtn" onClick={onUpdateHandler}>
      <AutorenewIcon style={{ color: green[500], fontSize: 20 }} />
    </div>
  );
}
