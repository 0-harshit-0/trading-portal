const express = require("express");
const app = express();
const cors = require("cors");
const axios = require('axios')

app.use(cors());

app.get("/getData", async (req, res) => {
	let response = await axios.get("https://api-testnet.bybit.com/spot/quote/v1/depth?symbol=BTCUSDT&limit=7");
	let json = response.data.result;
	res.end(JSON.stringify(json));
});
app.get("/getBestData", async (req, res) => {
	let response = await axios.get("https://api-testnet.bybit.com/spot/quote/v1/ticker/price?symbol=BTCUSDT");
	let json = response.data.result;
	res.end(JSON.stringify(json));
});

app.listen(8080, ()=> {
	console.log("started")
});