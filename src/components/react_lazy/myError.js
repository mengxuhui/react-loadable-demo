import React from 'react';

export default class MyError extends React.Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // 回退UI
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // 显示错误
        console.log(error, info);
    }
    render() {
        if (this.state.hasError) {
            // 返回捕获的错误信息
            return <h1>这是返回的错误信息</h1>;
        }
        return this.props.children;
    }
}
