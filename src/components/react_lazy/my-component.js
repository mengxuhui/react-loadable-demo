import React from 'react';

export default class MyComponent extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <div className="container-fluid" style={{ marginTop: '20px' }}>
                    <div className="row-fluid">
                        <div className="span12">
                            <div className="media">
                                <a href="#" className="pull-left">
                                    <img style={{ height: '62px' }} src="https://img03.sogoucdn.com/v2/thumb/resize/w/500/t/1/retype/ext/auto/q/75?appid=200698&amp;url=http://pic.wenwen.soso.com/pqpic/wenwenpic/0/20170929165830-546387044_jpeg_500_500_33132/500" className="media-object" alt='' /></a>
                                <div className="media-body">
                                    <h4 className="media-heading">
                                        这是正常加载的组件
                                </h4> 这是正常加载的组件这是正常加载的组件这是正常加载的组件这是正常加载的组件这是正常加载的组件
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}