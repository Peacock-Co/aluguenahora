import React from 'react';
import ReactDOM from 'react-dom';
import AlugueApp from './AlugueApp';

const rootEl = document.getElementById('root');

// if module.hot is from react, redux, firebase course item 5, hot module replacement.
function render() {
  ReactDOM.render(<AlugueApp />, rootEl);
}

if (module.hot) {
  module.hot.accept('./AlugueApp', function () {
    setTimeout(render);
  });
}

render();
