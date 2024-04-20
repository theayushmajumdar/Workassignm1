import React from "react";
import Toggle from "./components/Toggle";

function App() {
  const developer = {
    name: "Ayush Majumdar",
    github: "https://theayushmajumdar.vercel.app/",
  };

  return (
    <div className="app-container">
      <Toggle developer={developer} />
    </div>
  );
}

export default App;
