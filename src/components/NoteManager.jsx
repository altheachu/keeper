import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";

function NoteManager() {

  const [notes, setNotes] = useState([]);

  function getCompleteNote(note) {
    setNotes((prev) => {
      return [...prev, note];
    });
  }

  function removeNote(id) {
    setNotes((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <CreateArea addItem={getCompleteNote} />
      {notes.map((item, index) => (
        <Note
          key={index}
          title={item.title}
          content={item.content}
          id={index}
          deleteItem={removeNote}
        />
      ))}
    </div>
  );
}

export default NoteManager;