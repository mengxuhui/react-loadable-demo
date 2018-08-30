import React from 'react';

const Loading = (props) => {
   
    // pastDelay
    if(props.pastDelay) {
        return(
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
    }
    // Handle the error state
    else if (props.error) {
        return (
            <div className="container-fluid" style={{marginTop: '20px'}}>
                <div className="row-fluid">
                    <div className="span12">
                        <div className="alert alert-error">
                            <button type="button" className="close" data-dismiss="alert">×</button>
                            <h4>
                                提示!
                            </h4> 组件加载错误！
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return null;
    }
};

export default Loading