/**
 * Created by huhai on 17/4/10.
 */
var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use('/api', proxy({target: 'http://www.cnbeta.com', changeOrigin: true}));
app.listen(3000);
