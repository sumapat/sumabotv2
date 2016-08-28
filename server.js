// Initialize server

const express = require('express'),
      config = require('./config'),
      FbBot = require('./fb_bot')

var app = express();

app.set('port', process.env.PORT || 5000);

var fbBot = new FbBot(app, config)

fbBot.setUpWebhooks()

console.log(config)

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
