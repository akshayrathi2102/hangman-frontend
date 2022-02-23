import React from "react";
import reactDom from "react-dom";
import Game from "./components/index"

const App = () => {
  return <div>
    <Game />
  </div>
}

reactDom.render(<App />, document.getElementById('app'));

