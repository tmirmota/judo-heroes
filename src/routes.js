'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AthletePage from './components/AthletePage';
import IndexPage from './components/IndexPage';
import Layout from './components/Layout';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="athlete/:id" component={AthletePage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
