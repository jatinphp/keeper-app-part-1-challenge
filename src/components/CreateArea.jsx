import React, { useState } from "react";

function CreateArea(props) {
  const [noteContent, setNoteContent] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { value, name } = event.target;
    setNoteContent((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={noteContent.title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          value={noteContent.content}
        />
        <button
          type="button"
          onClick={() => {
            props.onClicked(noteContent);
            setNoteContent({
              title: "",
              content: "",
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
