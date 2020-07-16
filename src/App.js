import React from "react";
import { Meme } from "./components/Meme";
import { Switch, Route } from "react-router-dom";
import { MemeGenerated } from "./components/MemeGenerated";


function App() {
  return (
    <div>
      <h1>Meme Creator</h1>
      <Switch>
        <Route  path="/">
          <Meme />
        </Route>
        <Route path="/generated">
          <MemeGenerated />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
