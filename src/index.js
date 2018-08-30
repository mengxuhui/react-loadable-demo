import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
// react-router
/* 
import Loading from './components/react_loadable/my-loading-component';
import hashHistory from 'react-router';
import {HashRouter, Route} from 'react-router-dom' */


// require.ensure
// import App from './components/require_ensure/app';

// react-router

// 基于react-router实现代码分割

/* const List = Loadable({
    loader: () => import('./components/require_ensure/list'),
    LoadingComponent: Loading
  });
  
  const List2 = Loadable({
    loader: () => import('./components/require_ensure/list2'),
    LoadingComponent: Loading
  });
  
let App = () => {
    return <HashRouter history={hashHistory}>
        <div id="routerContainer">
            <Route path="/" component={List}/>
            <Route path="/list2" component={List2}/>
        </div>
    </HashRouter>
}; */


// react-loadable
import App from './components/react_loadable/mian';


ReactDOM.render(<App/>,document.getElementById('root'));
