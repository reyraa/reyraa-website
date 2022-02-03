import Home from './components/pages/home';
import Terms from './components/pages/terms';
import Privacy from './components/pages/privacy';
import Unsubscribe from './components/pages/unsubscribe';
import Error500 from './components/pages/500';
import Error404 from './components/pages/404';

const routes = [
  {
    path: '/terms',
    canonicalPath: () => '/terms',
    component: Terms,
    initState: Terms.initState,
  },
  {
    path: '/privacy',
    canonicalPath: () => '/privacy',
    component: Privacy,
    initState: Privacy.initState,
  },
  {
    path: '/unsubscribe',
    canonicalPath: () => '/unsubscribe',
    component: Unsubscribe,
    initState: Unsubscribe.initState,
  },
  {
    path: '/404',
    canonicalPath: () => '/404',
    component: Error404,
    initState: Error404.initState,
  },
  {
    path: '/500',
    canonicalPath: () => '/500',
    component: Error500,
    initState: Error500.initState,
  },
  {
    path: '/',
    canonicalPath: () => '/',
    component: Home,
    initState: Home.initState,
    exact: true,
  },
];

export default routes;
