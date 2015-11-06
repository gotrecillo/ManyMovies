import React from 'react';
import { Route, Redirect } from 'react-router';
import MyFilms from './MyFilms.jsx';
import FavList from './FavList.jsx';
import WishList from './WishList.jsx';
import WatchedList from './WatchedList.jsx';

  <Route path="/" component={App}>
  	<Route path="MyFilms" component={MyFilms} />
    <Route path="FavList" component={FavList} />
    <Route path="WishList" component={WishList} />
    <Route path="WatchedList" component={WatchedList} />
    <Redirect path="*" to="/" />
  </Route>
);

