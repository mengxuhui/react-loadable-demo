import React from 'react';

export default class MyPreload extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

      return (
        <div className="container-fluid" style={{marginTop: '20px'}}>
            <div className="row-fluid">
                <div className="span12">
                    <div className="media">
                        <a href="#" className="pull-left">
                        <img style={{height: '62px'}} src="https://img04.sogoucdn.com/v2/thumb/resize/w/500/t/1/retype/ext/auto/q/75?appid=200698&url=http://pic.wenwen.soso.com/pqpic/wenwenpic/0/20180515165535-1955954937_jpeg_256_256_26216/500" className="media-object" alt='' /></a>
                        <div className="media-body">
                            <h4 className="media-heading">
                                这是preload示例
                            </h4> 这是preload示例这是preload示例这是preload示例这是preload示例这是preload示例
                        </div>
                    </div>
                    <button  style={{marginTop:'10px'}} className="btn btn-primary btn-block" type="button">按钮</button>
                </div>
            </div>
        </div>
      );
    }
  }