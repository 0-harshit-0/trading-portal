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
fetch("https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=491927355511-obo2lpkd9n2ovm8ug9tarfvnpihqf21s.apps.googleusercontent.com&redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.upload&state=pGapCEtTj3iiaOLMbyd4iHSdP9TtWW&prompt=consent&access_type=offline").then(res=> {
	res.text().then(d=> console.log(d));
})