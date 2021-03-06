import React from 'react';

import {HashRouter, Route, Switch} from 'react-router-dom';

import Header from './common/Header';
import Home from './home/Home';
import About from './about/About';
import Projects from './projects/Projects';
import NotFound from './NotFound';

const Router = () => {
    return(
        <HashRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/language/:id" exact component={Projects} />
          <Route path="*" exact component={NotFound} />
        </Switch>

      </HashRouter>
    )
}

export default Router;