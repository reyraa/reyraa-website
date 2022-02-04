import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { matchPath } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import App from '../app';
// import storeInit from '../store';
import routes from '../routes';
import Layout from '../layout';

function injectInitialState(template, initialState = {}, helmet) {
  const metaTags = `
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
  `;

  return template
    .replace('</head>', `${metaTags}</head>`)
    .replace(
      '<script id="initial-state" type="application/javascript"></script>',
      `<script id="initial-state" type="application/javascript">window.__PRELOADED_STATE__ = ${JSON.stringify(initialState).replace(/</g, '\\u003c')}</script>`,
    )
    .replace(
      '<script id="analytics"></script>',
      '<script id="analytics">window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","UA-63355976-2");</script>',
    );
}

function renderStoreRouter(store, req, res) {
  // const state = store.getState();
  const state = null;
  const HTML = ReactDOMServer.renderToString(
    <Layout>
      <App context={{}} url={req.url} store={store} />
    </Layout>,
  );
  res.send(injectInitialState(HTML, state, Helmet.renderStatic()));
}

function serverRender(req, res) {
  let routeConfig;
  routes.some((route) => {
    const match = matchPath(req.url, route);
    if (match) {
      routeConfig = route;
    }
    return match;
  });

  if (!routeConfig) {
    res.redirect('/404');
  } else {
    // const store = storeInit();
    const store = null;
    // store.dispatch(routeConfig.initState(store, req, res))
    // .then(() => {
    // const canonicalPath = routeConfig.canonicalPath(store.getState());
    // Redirect to canonical URL if the path is incorrect
    // if (req.url === canonicalPath) {
    renderStoreRouter(store, req, res);
    // } else {
    // res.redirect(canonicalPath);
    // }
    // })
    // .catch(() => {
    // res.redirect('/500');
    // });
  }
}

module.exports = serverRender;
