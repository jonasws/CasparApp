var osc = require('osc-min');
var udp = require('dgram');
var _ = require('lodash');

var PORT =  8690;
var THRESHOLD = 100;
var messages = [];

udp.createSocket('udp4', function (buf) {
    var msg = osc.fromBuffer(buf);
    messages.push(msg);
    if (messages.length == THRESHOLD){
        this.close();
        console.log(JSON.stringify(messages, null, 4));
    }
}).bind(PORT);
