/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  let vendorJS = '';
  let bundleCSS = '';
  if (process.env.NODE_ENV === 'development') {
    // do something
  } else {
    bundleCSS = '/static/app.css';
    vendorJS = '/static/vendor.js';
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="stylesheet" type="text/css" href={bundleCSS} />
        <meta property="og:locale" content="en_GB" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        { /* Pinterest verification meta tag  */ }
        <meta name="p:domain_verify" content="436707c9397b1748ebceb7889d094fe4" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-63355976-2"></script>
        <script id="analytics"></script>
      </head>
      <body>
        <div id="root">
          <div>{children}</div>
        </div>
        <script id="initial-state" type="application/javascript"></script>
        <script src={vendorJS} />
        <script src="/static/app.js" />
      </body>
    </html>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
