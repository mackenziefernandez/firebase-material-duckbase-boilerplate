import React from 'react';
import { Route } from 'react-router-dom';
import { AuthedRoute } from './utils/auth';
import HomeIndex from './components/index_home';
import UserLogin from './components/user/login';
import UserLogout from './components/user/logout';

export default function getRoutes() {
  return (
    <div>
      <AuthedRoute exact path='/' component={HomeIndex} />
      <Route path='/login' component={UserLogin} />
      <Route path='/logout' component={UserLogout} />
    </div>
  );
}
