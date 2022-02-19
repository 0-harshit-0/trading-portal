import React, { useState } from 'react';

function Controls(props) {
  return (
    <div className="containers spotCont">
      <section className="containerHsec">
        <span className="containerH">Spot</span>
      </section>
      <hr />
      <section className="bsSec">
        <button className="bs buybs">Buy</button>
        <button className="bs">Sell</button>
      </section>
    </div>
  );
}

export {Controls};
