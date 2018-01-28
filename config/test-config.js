var jsdom = require('jsdom');

const {JSDOM} = jsdom;
const {document} = (new JSDOM('<!doctype html><html><body></body></html>')).window;

global.document = document;
global.window = document.defaultView;
global.navigator = window.navigator;

global.requestAnimationFrame = (callback) => {
    setTimeout(callback, 0);
};

var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

require('isomorphic-fetch');