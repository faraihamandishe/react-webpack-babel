import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>Hello React, Webpack 4 &amp; Babel 7!</div>
);

console.log('process', process.env.REACT_APP_API_ENDPOINT);

ReactDOM.render(<App />, document.querySelector('#root'));