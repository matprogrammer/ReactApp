import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import history from './app/utils/history';

import Search from './app/view/search';
import SearchResult from './app/view/searchResult/SearchResult';
import Details from './app/view/details';

function App() {
  return (
    <Router forceRefresh={true} history={history}>
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
    </Router>
  );
}

export default App;
