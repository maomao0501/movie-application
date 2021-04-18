import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HomeScreen from './components/layout/home-screen';
import Routes from './components/routing/Routes';
import { LOGOUT } from './actions/types';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';
import SearchScreen from "./components/content/search-screen";
import DetailsScreen from "./components/content/details-screen";
import WatchList from "./components/content/watch-list";
import FavoriteList from "./components/content/favorite-list";
import UserProfileManage from "./components/profile/user-profile-manage";
import UserProfile from "./components/community/profiles/user-profile";

const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path={["/search", "/search/:title", "/search/:title/page/:pageId"]} exact={true}>
              <SearchScreen/>
            </Route>
            <Route path="/details/:imdbID" exact={true}>
              <DetailsScreen/>
            </Route>
            <Route path="/watch" exact={true}>
              <WatchList/>
            </Route>
            <Route path="/favorite" exact={true}>
              <FavoriteList/>
            </Route>
            <Route path="/dashboard/:uid" exact={true}>
              {/*TODO*/}
              <UserProfile/>
            </Route>
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
