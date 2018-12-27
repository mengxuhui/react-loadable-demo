import React from 'react';

// loading组件
const Loading = () => {
    return (
        <ul className="theme-lst loading">
            <li key={Math.random()}>
                <a href="javascript:;" className="theme-lst-tab">
                    <div className="theme-lst-thumb"></div>
                    <div className="theme-lst-tit"></div>
                    <div className="theme-lst-txt"></div>
                </a>
            </li>
        </ul>
    );
};

export default Loading