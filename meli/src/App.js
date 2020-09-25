import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import Search from './app/view/search';
import SearchResult from './app/view/searchResult';
import Details from './app/view/details';

function App() {
  return (
    <Router forceRefresh={true}>
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
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
