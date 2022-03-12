import React, { useState, useEffect } from 'react';


async function getData() {
  let res = await fetch("http://localhost:8080/getData");
  let json = await res.json();
  return json;
}
async function getBestData() {
  let res = await fetch("http://localhost:8080/getBestData");
  let json = await res.json();
  return json;
}
/* -------utility fun--------*/

function Data(props) {
  return (
    <section className={"tr "+props.cn}>
      <span className="td">{props.price}</span>
      <span className="td">{props.quant}</span>
      <span className="td">{props.total}</span>
    </section>
  );
}
function Table(props) {
  return(
    <div className="table">
      <div className="thead">
        <Data price="Price(USDT)" quant="Quantity(BTC)" total="Total(BTC)" cn="" />
      </div>
      <div className="tbody">
        {props.askList}
        <section className="tr">
          <span className={"bestPrice "+props.best.class}>{parseFloat(props.best.p).toFixed(2)} USD</span>
        </section>
        {props.bidList}
      </div>
    </div>
  );
}
function Ledger(props) {
  const [ledgerData, setdata] = useState({asks:[], bids:[]});
  const [best, setbest] = useState({class:"", p:0});
  let inter, tempBest = 39663.3, t=0;
  useEffect(() => {
    inter = setInterval(async ()=> {
      let data = await getData();
      setdata(data);

      data = await getBestData();
      if(tempBest > parseFloat(best.p)) {
        setbest({class:"askList", p:data.price});
      }else if(tempBest < parseFloat(best.p)) {
        setbest({class:"bidList", p:data.price});
      }
      tempBest = parseFloat(best.p);
    }, 10000000*5);
    // Specify how to clean up after this effect:
    return function cleanup() {
      clearInterval(inter);
    };
  });

  let askList = ledgerData.asks.map((z, i)=> {
    if(i !== 0) {
      t+=parseFloat(z[1])
    }else {
      t= parseFloat(z[1]);
    }
    return <Data key={i} price={parseFloat(z[0]).toFixed(2)} quant={parseFloat(z[1]).toFixed(2)} total={t.toFixed(2)} cn="askList" />
  });
  let bidList = ledgerData.bids.map((z, i)=> {
    if(i !== 0) {
      t+=parseFloat(z[1])
    }else {
      t= parseFloat(z[1]);
    }
    return <Data key={i} price={parseFloat(z[0]).toFixed(2)} quant={parseFloat(z[1]).toFixed(2)} total={t.toFixed(2)} cn="bidList" />
  });

  return (
    <div className="containers ledgerCont">
      <section className="containerHsec">
        <span className="containerH">Order Book</span>
      </section>
      <hr />
      <Table askList={askList.reverse()} bidList={bidList} best={best} />
    </div>
  );
}

export {Ledger};
