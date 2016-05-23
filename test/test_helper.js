// Virtual DOM
var jsdom = require("jsdom").jsdom;
global.document = jsdom("<html><body></body></html>");
global.window = document.defaultView;
global.navigator = { userAgent: "node.js" };

var TestUtils = require('react-addons-test-utils');




// Test helpers
global.requireSubject = function(fileName) {
  var filePath = "../app/javascripts/components" + fileName;
  return require(filePath);
}
