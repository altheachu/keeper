import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
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
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
