import Express from 'express';
import cssModuleRequireHook from 'css-modules-require-hook';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotDevMiddleware from 'webpack-hot-middleware';
// import sslRootCAs from 'ssl-root-cas/latest';
import webpackConfig from '../../webpack.config';

// sslRootCAs.inject();

const port = 3000;
const app = new Express();

cssModuleRequireHook({
  generateScopedName: '[name]__[local]___[hash:base64:5]',
});

// initalize webpack dev middleware if in development context
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig);
  const devMiddlewareConfig = {
    noInfo: true,
    stats: { colors: true },
    publicPath: webpackConfig.output.publicPath,
  };

  app.use(devMiddleware(compiler, devMiddlewareConfig));
  app.use(hotDevMiddleware(compiler));
}

// Handle static files
// This is only for development
// nginx will proxy these files in production
// if static middleware couldn't find, return 404
app.use(Express.static('public'));

// Render routes
const serverRender = require('./serverRender');

app.get('*', serverRender);

app.listen(port, (error) => {
  if (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } else {
    // eslint-disable-next-line no-console
    console.info(
      '==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.',
      port,
      port,
    );
  }
});
