import React from 'react';

import {HashRouter, Route, Switch} from 'react-router-dom';

import Header from './common/Header';
import Home from './home/Home';
import About from './about/About';
import ProjectDetails from './projects/ProjectDetails';

const NotFound = () => {
  return(
    <h1>Not found.</h1>
  )
}

const Router = () => {
    return(
        <HashRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/projects/:id" exact component={ProjectDetails} />
          <Route path="*" exact component={NotFound} />
        </Switch>

      </HashRouter>
    )
}

export default Router;