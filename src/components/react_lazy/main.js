import React from 'react';
import Loading from './my-loading-component';
import MyError from './myError';

const LazyComponent = React.lazy(() => import('./my-component'))

export default class App extends React.Component {

    render() {
        return (
            <MyError>
                <React.Suspense fallback={Loading}>
                    <LazyComponent />
                </React.Suspense>
            </MyError>
        )
    }
}