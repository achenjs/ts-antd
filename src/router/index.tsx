import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Home from '../containers/Home';

class RouteMap extends React.Component {
  render() {
    return (
      <HashRouter>
        <Route
          component={(props: {}) => (
          <App {...props}>
            <Switch>
              <Route exact={true} path="/" component={Home} />
            </Switch>
          </App>
        )}
        />
      </HashRouter>
    );
  }
}

export default RouteMap;