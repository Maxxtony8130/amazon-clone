import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";


ReactDOM.render(
  <div>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </div>,
  document.getElementById('root')
);

