import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import App from "react-scripts/template-typescript/src/App";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
