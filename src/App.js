import React from "react";
import "./App.css";
import { Plan } from "./Plan";
import { Toolbar } from "./Toolbar";
import { Main } from "./Main";
import { Income } from "./Income";
import { Deduction } from "./Deduction";

function App() {
  const [path, setPath] = React.useState("2");
  return (
    <div className="App">
      <Toolbar setPath={setPath} />
      {path === "1" && <Main />}
      {path === "2" && <Income />}
      {path === "3" && <Deduction />}
      {path === "4" && <Plan />}
      {path === "5" && <div />}
    </div>
  );
}

export default App;
