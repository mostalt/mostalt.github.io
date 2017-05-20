import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css'

const rootEl = document.getElementById('root')

ReactDOM.render(
  <Root />,
  rootEl
)

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NextApp = require('./components/Root').default
    ReactDOM.render(
      <NextApp />,
      rootEl
    )
  })
}

registerServiceWorker();