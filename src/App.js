import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';

import Home from './pages/Home';
import Empty from './pages/Empty';

import GlobalStyles from './config/global-styles';
import store from './store';

function App() {
  return (
    <>
      <GlobalStyles />
      <StoreProvider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/past-trials" component={Empty} />
            <Route exact path="/how-it-works" component={Empty} />
            <Route exact path="/login" component={Empty} />
          </Switch>
        </BrowserRouter>
      </StoreProvider>
    </>
  );
}

export default App;
