import React from 'react';

import './App.scss';
import Dashboard from "../Dashboard";


function App({history}) {
    console.log("here")
  return (
    <div className="App">
      <Dashboard history={history} />
    </div>
  );
}

export default App;
