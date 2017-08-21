var express = require('express');
var path = require('path');
var config = require('../webpack.config.js');
var app = express();
var webpack = require('webpack');
var webpackDevMiddleWare = require('webpack-dev-middleware');
var webpackHotMiddleWare = require('webpack-hot-middleware');

var compiler = webpack(config);
app.use(webpackDevMiddleWare(compiler, { noinfo: true,publicPath: config.output.publicPath}))


app.use(express.static('./dist'));

app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

var port = 3000;

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});
