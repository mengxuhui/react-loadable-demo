import React from 'react';
import ReactDOM from 'react-dom';
// react-router
/* import List from './components/require_ensure/list';
import List2 from './components/require_ensure/list2';
import hashHistory from 'react-router';
import {HashRouter, Route} from 'react-router-dom' */


// require.ensure
// import App from './components/require_ensure/app';

// react-loadable
import App from './components/react_loadable/mian';

// react-router

// 基于react-router实现代码分割

/* let App = () => {
    return <HashRouter history={hashHistory}>
        <div id="routerContainer">
            <Route path="/" component={List}/>
            <Route path="/list2" component={List2}/>
        </div>
    </HashRouter>
}; */

ReactDOM.render(<App/>,document.getElementById('root'));
