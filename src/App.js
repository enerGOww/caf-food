import React from 'react';
import {ItemsContainer} from "./components";

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Ты сегодня покормил кота?</h1>
      <ItemsContainer />
    </div>
  );
}

export default App;
