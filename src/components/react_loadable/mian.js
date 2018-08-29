import React from 'react';
import Loadable from 'react-loadable';
import Loading from './my-loading-component';
import fakeDelay from '../fakeDelay';

const LoadableComponent = Loadable({
  loader: () => fakeDelay(600).then(() => import('./my-component')),
  // loader: () => import('./my-component'),
  LoadingComponent: Loading,
  delay: 500, // 0.3 seconds
});

export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}