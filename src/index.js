import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Chart} from './components/chart.js';
import {Ledger} from './components/ledger.js';
/*import {Controls} from './spot.js';*/

const contClasses = ['navCont', 'currentCoinCont', /*'tradeCont', 'footCont'*/];
function Containers(props) {
  return(
    <div className={'containers '+props.className}></div>
  );
}
function App(props) {
  return (
    <>
    <main>
      {
        contClasses.map(z=> <Containers key={z} className={z} />)
      }
      <Chart />
      <Ledger />
      {/*<Controls />*/}
    </main>
    </>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

