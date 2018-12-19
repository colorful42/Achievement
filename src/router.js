import React from 'react';
import { Router, Route, Switch, IndexRoute } from 'dva/router';

import MainPage from "./routes/MainPage";
import Wall from "./routes/Wall";
import App from "./routes/app";
import Home from "./routes/IndexPage";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
    <Switch>
      {/*<IndexRoute component={Home}/>*/}
       <App>
          <Route exact path="/" component={MainPage}/>
          {/*<Route exact path="/mainPage" component={MainPage}/>*/}
          <Route exact path="/wall" component={Wall}/>
       </App>
    </Switch>
    </Router>
  );
}

export default RouterConfig;
