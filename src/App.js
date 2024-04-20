import React from "react";
import Toggle from "./components/Toggle";

function App() {
  const developer = {
    name: "Ayush Majumdar",
    github: "https://github.com/theayushmajumdar",
  };

  return (
    <div className="app-container">
      <Toggle developer={developer} />
    </div>
  );
}

export default App;
