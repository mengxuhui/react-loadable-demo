import React from 'react';
import Loadable from 'react-loadable';
import Loading from './my-loading-component';
import fakeDelay from './fakeDelay';
import MyError from './myError';

const LoadableComponent = Loadable({
  loader: () => fakeDelay(600).then(() => import('./my-component')),
  // loader: () => import('./my-component'),
  LoadingComponent: Loading,
  delay: 500, // 0.3 seconds
});

const LazyComponent = React.lazy(() => import('./my-component'))

export default class App extends React.Component {
  render() {
    return (
      <React.Suspense fallback={Loading}>
        <LazyComponent />
      </React.Suspense>
    )
  }
}