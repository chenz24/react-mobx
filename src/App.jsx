import React from 'react';
import { browserHistory as history, Router } from 'react-router';
import { Provider } from 'mobx-react';
import routes from './routes';
import './scss/main.scss';

import RootStore from './stores/RootStore';

class App extends React.Component {
  render() {
    const store = new RootStore();

    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}

export default App;
