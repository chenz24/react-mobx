import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line

import App from './App';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component key={module.hot ? new Date() : undefined} />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => render(App));
}
