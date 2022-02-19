import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Controls} from './spot.js';

const contClasses = ['navCont', 'currentCoinCont', 'chartCont', 'ledgerCont', 'tradeCont', 'footCont'];
function Containers(props) {
  return(
    <div className={'containers '+props.className}></div>
  );
}
function App(props) {
  return (
    <main>
      {
        contClasses.map(z=> <Containers key={z} className={z} />)
      }
      <Controls />
    </main>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

