import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />
      <Note title="Title Props 1" content="This is first block content" />
      <Note title="Title Props 2" content="This is second block content" />
      <Note title="Title Props 3" content="This is third block content" />
      <Footer />
    </div>
  );
}

export default App;
