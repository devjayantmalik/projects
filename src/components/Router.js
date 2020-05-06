import React from 'react';

import {HashRouter, Route, Switch} from 'react-router-dom';

import Header from './Header';
import Home from './home/Home.js';
import About from './about/About.js';
import Projects from './projects/Projects.js';

const Router = () => {
    return(
        <HashRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
        </Switch>

      </HashRouter>
    )
}

export default Router;