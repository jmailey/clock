var ReactDom = require('react-dom');
var React = require('react');
var Clock = require('./components/clock.js');
var Animation = require('./play');


ReactDom.render(<Clock />, document.getElementById('container'));
