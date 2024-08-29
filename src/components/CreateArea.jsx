import React, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [note, setNote] = useState({ title: "", content: "" });
  const [spreadState, setSpreadState] = useState(false);
  
  function createNote(event) {
    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function spreadArea(event){
    setSpreadState(true);
  }

  function addItemHandler(event) {
    event.preventDefault();
    props.addItem(note);
    setNote({ title: "", content: "" });
  }

  return (
    <div>
      <form class="create-note">
        {
          spreadState && <input
            name="title"
            placeholder="Title"
            onChange={createNote}
            value={note.title}
          />
        }

        <textarea
          name="content"
          placeholder="Take a note..."
          value={note.content}
          onChange={createNote}
          onClick={spreadArea}
          rows={spreadState? 3 : 1}
        />
        <Zoom in={spreadState}>
          <Fab onClick={addItemHandler}>
            <AddCircleIcon fontSize="large"/>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
