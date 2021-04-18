import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../profile/profile';
import ProfileForm from '../community/profile-forms/ProfileForm';
import Profiles from '../community/profiles/Profiles';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';
import UserProfile from "../community/profiles/user-profile";

const Routes = props => {
  return (
    <section className="container pb-5 mb-5">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
          <Route exact path="/dashboard/:profileId"
                 component={UserProfile}
                 render={props =>
                     <UserProfile {...props} />}/>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={ProfileForm} />
        <PrivateRoute exact path="/edit-profile" component={ProfileForm} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
