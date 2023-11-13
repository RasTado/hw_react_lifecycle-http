import React, { useState, useEffect } from "react";
import "./CRUD.css";

import Container from "./Container/Container";
import createReq from "./Req";

export default function CRUD() {
  const [notes, setNotes] = useState([]);

  const updateReq = async () => {
    const response = await createReq({
      method: "GET",
      query: "notes",
    });
    setNotes([...response]);
  };

  const onSubmitHandler = async (content) => {
    await createReq({
      content,
      method: "POST",
      query: "notes",
    });
    updateReq();
  };

  const onUpdateHandler = async () => {
    updateReq();
  };

  const onDeleteHandler = async (removeId) => {
    const id = "notes/" + removeId;
    await createReq({ id, method: "DELETE" });
    updateReq();
  };

  useEffect(() => {
    const fetchData = async () => {
      updateReq();
    };
    fetchData();
  }, []);

  return (
    <div className="CRUD">
      {notes && (
        <Container
          notes={notes}
          onDeleteHandler={onDeleteHandler}
          onUpdateHandler={onUpdateHandler}
          onSubmitHandler={onSubmitHandler}
        />
      )}
    </div>
  );
}
