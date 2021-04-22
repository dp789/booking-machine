import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import * as serviceWorker from './serviceWorker';
import {RoomProvider} from './context'
ReactDOM.render(
  <React.StrictMode>
  <RoomProvider>
     <App />
  </RoomProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();