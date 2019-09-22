import React from 'react';

import './App.scss';
import Dashboard from "../Dashboard";

function App({history}) {
  return (

      <div className="App">
      <Dashboard history={history} />
    </div>
  );
}

export default App;
