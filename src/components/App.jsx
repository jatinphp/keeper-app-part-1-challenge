import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../Notes";

function createNote(notetxt) {
  return (
    <Note key={notetxt.id} title={notetxt.Title} content={notetxt.Content} />
  );
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
