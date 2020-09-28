import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import history from './app/utils/history';

import Search from './app/view/search';
import SearchResult from './app/view/searchResult/SearchResult';
import Details from './app/view/details/Details';
import Error from './app/view/error/Error';


import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router forceRefresh={true} history={history}>
      <Provider store={store}>
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/items">
            <SearchResult />
          </Route>
          <Route exact path="/items/:id">
            <Details />
          </Route>
          <Route exact path="/error">
            <Error />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
