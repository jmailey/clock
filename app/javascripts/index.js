var ReactDom = require('react-dom');
var React = require('react');
var Clock = require('./components/clock.js');

ReactDom.render(<Clock />, document.getElementById('container'));
