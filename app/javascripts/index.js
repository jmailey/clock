var ReactDom = require('react-dom');
var React = require('react');
var Clock = require('./components/clock.js');
require("!style!css!../css/style.css");

ReactDom.render(<Clock />, document.getElementById('container'));
