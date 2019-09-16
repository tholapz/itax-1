import React from "react";
import "./App.css";
import { Plan } from "./Plan";
import { Toolbar } from "./Toolbar";
import { Main } from "./Main";

function App() {
  const [path, setPath] = React.useState("1");
  return (
    <div className="App">
      <Toolbar setPath={setPath} />
      {path === "1" && <Main />}
      {path === "2" && <div />}
      {path === "3" && <div />}
      {path === "4" && <Plan />}
      {path === "5" && <div />}
    </div>
  );
}

export default App;
