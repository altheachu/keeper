import React from "react";
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import NoteManager from "./NoteManager";

function Navigator() {

  return (
    <BrowserRouter>
      <div className="navigator">
        <button>
          <Link className="link" to="/note">Notes</Link>
        </button>
        <button>
          <Link className="link" to="/image">Images</Link>
        </button>
      </div>
      <Routes>
        <Route path="/" element={<NoteManager/>}/>
        <Route path="/note" element={<NoteManager/>}/>
        <Route path="/image" element={<div>To Be Completed</div>}/>
      </Routes>
  </BrowserRouter>
  )
}

export default Navigator;