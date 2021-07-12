const http = require('http');
const express = require('express');
const app = express();
var server = http.createServer(app);
const keepAlive = require('./index.js');
const fs = require('node-fetch')

app.get('/chatbot', function(request, response){
  let user = request.query.user 
  let name = request.query.name 
  let gender = request.query.gender 
    fs(`http://api.brainshop.ai/get?bid=178&key=sX5A2PcYZbsN5EY6&uid=${user}&msg=${encodeURIComponent(request.query.msg)}`)
    .then(response => response.json())
    .then(data => {
        response.status(500).json({
        msg: data.cnt.replace('Moezilla', `${name} bot`).replace('Acobot Team', ' Team').replace('Female chatbot', `${gender} chatbot`)
    });
    });
});

app.get("/", (request, response) => {
  console.log(`😂Enjoy`);
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end("Moezilla Is Best")
});

const listener = server.listen(process.env.PORT, function keepAlive() {
  console.log(`Chatbot Api on port ` + listener.address().port);
});

module.exports = keepAlive;

keepAlive();
 
