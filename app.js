
var express = require("express");
var cors = require("cors");
var app = express();

app.use( express.static("memorygame v2 11.12")  );
app.use( express.json() );
app.use( express.urlencoded( {extended: true}) );
app.use(cors());

var fs = require("fs");



app.listen(3000);
console.log("Web伺服器就緒，開始接受用戶端連線.");
console.log("「Ctrl + C」可結束伺服器程式.");

var dataFileName = "./memorygame v2 11.12/json/leaderboard.json";
var dataFileNameHard = "./memorygame v2 11.12/json/leaderboardhard.json"


app.get("/leaderboard", function (req, res) {
	var data = fs.readFileSync(dataFileName);
	var leaderboard = JSON.parse(data);
    res.set('Content-type', 'application/json');
	res.send( JSON.stringify(leaderboard) );
})


app.post("/leaderboard/new", function (req, res) {
    
	var data = fs.readFileSync(dataFileName);
	var leaderboard = JSON.parse(data);
	var item = {
		"name": req.body.name,
		"score": req.body.score,
		
	};
	leaderboard.push(item);
	fs.writeFileSync(dataFileName, JSON.stringify(leaderboard, null, "\t"));
	console.log('success')
    res.send("row inserted.");
})


app.get("/leaderboardhard", function (req, res) {
	var data = fs.readFileSync(dataFileNameHard);
	var leaderboard = JSON.parse(data);
    res.set('Content-type', 'application/json');
	res.send( JSON.stringify(leaderboard) );
})


app.post("/leaderboardhard/new", function (req, res) {
    
	var data = fs.readFileSync(dataFileNameHard);
	var leaderboard = JSON.parse(data);
	var item = {
		"name": req.body.name,
		"score": req.body.score,
		
	};
	leaderboard.push(item);
	fs.writeFileSync(dataFileNameHard, JSON.stringify(leaderboard, null, "\t"));
	console.log('success')
    res.send("row inserted.");
})