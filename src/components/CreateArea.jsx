import React, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import {useForm} from 'react-hook-form';

function CreateArea(props) {

  const [note, setNote] = useState({ title: "", content: "" });
  const [spreadState, setSpreadState] = useState(false);
  const {register, handleSubmit} = useForm();
  
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

  function addItemHandler(data, event) {
    event.preventDefault();
    const {title, content} = data;
    if(title==note.title && content==note.content){
      props.addItem(note);
    }
    setNote({ title: "", content: "" });
  }

  return (
    <div>
      <form class="create-note">
        {
          spreadState && <input
            {...register("title", {required: true})}
            name="title"
            placeholder="Title (MUST)"
            onChange={createNote}
            value={note.title}
          />
        }

        <textarea
          {...register("content",{required: true})}
          name="content"
          placeholder="Take a note..."
          value={note.content}
          onChange={createNote}
          onClick={spreadArea}
          rows={spreadState? 3 : 1}
        />
        <Zoom in={spreadState}>
          <Fab onClick={handleSubmit(addItemHandler)}>
            <AddCircleIcon fontSize="large"/>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
