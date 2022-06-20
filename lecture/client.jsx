const React = require('react');
const ReactDom = require('react-dom');

// const ResponseCheck = require('./ResponseCheck');
const ResponseCheckHooks = require('./ResponseCheckHooks');

ReactDom.render(<ResponseCheckHooks />, document.querySelector('#root'));