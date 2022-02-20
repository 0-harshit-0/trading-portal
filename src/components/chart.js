import React, { useState, useEffect } from 'react';
import useScript from '../hooks/useScript.js';


function scripts() {
  let st = `
    new TradingView.widget({
      "width": "100%",
      "height": "100%",
      "autosize": true,
      "symbol": "BINANCE:BTCUSDT",
      "interval": "1",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "1",
      "locale": "in",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "hide_side_toolbar": false,
      "allow_symbol_change": true,
      "container_id": "tradingview_b4a51"
    });
  `;
  const script = document.createElement('script');
  script.defer = "true";
  script.innerHTML = st;
  window.onload = () => {
    document.body.appendChild(script);
  }
}
function Chart(props) {
  useScript('https://s3.tradingview.com/tv.js');
  return (
    <div className="containers chartCont">
      <div class="tradingview-widget-container">
        <div id="tradingview_b4a51"></div>
        <div class="tradingview-widget-copyright">
          <a href="https://in.tradingview.com/symbols/BTCUSDT/?exchange=BINANCE" rel="noopener" target="_blank">
            <span class="blue-text">BTCUSDT Chart</span>
          </a>
          by TradingView
        </div>
        {scripts()}
      </div>
    </div>
  );
}

export {Chart};
