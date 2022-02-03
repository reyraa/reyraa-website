import React from 'react';
import {
  Route, Switch, StaticRouter, BrowserRouter,
} from 'react-router-dom';
import routes from './routes';
import Header from './components/header';
import Footer from './components/footer';
import './components/variables.css';
import './components/globals.css';
import './components/type.css';

const App = ({
  url, context, isClient,
}) => {
  const Router = isClient ? BrowserRouter : StaticRouter;
  return (
    <div>
      <Router location={url} context={context}>
        <Route component={Header} />
        <Switch>
          {routes.map((route, index) => (
            <Route key={`route${index}`} {...route} />
          ))}
        </Switch>
        <Route component={Footer} />
      </Router>
    </div>
  );
};

export default App;
