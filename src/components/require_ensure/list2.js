/**
 * @Author byran <mengxuhui@sogou-inc.com>
 * C-Time 2018/08/11.
 */
import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class List2 extends Component {

    constructor(props) {
        super(props);
    }
   /* componentWillMount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    }*/
    render() {
        return (
            <div className="content" id="topicListContainer">
                <div>
                    <ul className="theme-lst">
                        <li>
                            <div className="theme-lst-tab">
                                <a href="/topic?topicId=500074" className="theme-lst-thumb"
                                   target="_blank">
                                    <div className="pic-enlarge">
                                        <div className="img-bg imgDiv"
                                             data-src="https://img03.sogoucdn.com/v2/thumb/resize/w/500/t/1/retype/ext/auto/q/75?appid=200698&amp;url=http://pic.wenwen.soso.com/pqpic/wenwenpic/0/20170929165830-546387044_jpeg_500_500_33132/500"
                                             data-observer="true" data-loaded="true"
                                             style={{backgroundImage: 'url(https://img04.sogoucdn.com/v2/thumb/resize/w/500/t/1/retype/ext/auto/q/75?appid=200698&url=http://pic.wenwen.soso.com/pqpic/wenwenpic/0/20180515165535-1955954937_jpeg_256_256_26216/500)'}}></div>
                                    </div>
                                </a>
                                <a href="/topic?topicId=500074" target="_blank" className="theme-lst-tit">欧美音乐及娱乐新闻</a>
                                <a href="/topic?topicId=500074" target="_blank" className="theme-lst-txt">欧美音乐不只有霉霉哦！</a>
                            </div>
                            <a href="javascript:;" className="btn-square-lst" data-follow="0" data-tagid="500074"><i>加入</i>
                            </a>
                        </li>
                        <li>
                            <div className="theme-lst-tab">
                                <a href="/topic?topicId=500074" className="theme-lst-thumb"
                                   target="_blank">
                                    <div className="pic-enlarge">
                                        <div className="img-bg imgDiv"
                                             data-src="https://img03.sogoucdn.com/v2/thumb/resize/w/500/t/1/retype/ext/auto/q/75?appid=200698&amp;url=http://pic.wenwen.soso.com/pqpic/wenwenpic/0/20170929165830-546387044_jpeg_500_500_33132/500"
                                             data-observer="true" data-loaded="true"
                                             style={{backgroundImage: 'url(https://img04.sogoucdn.com/v2/thumb/resize/w/500/t/1/retype/ext/auto/q/75?appid=200698&url=http://pic.wenwen.soso.com/pqpic/wenwenpic/0/20180515165535-1955954937_jpeg_256_256_26216/500)'}}></div>
                                    </div>
                                </a>
                                <a href="/topic?topicId=500074" target="_blank" className="theme-lst-tit">欧美音乐及娱乐新闻</a>
                                <a href="/topic?topicId=500074" target="_blank" className="theme-lst-txt">欧美音乐不只有霉霉哦！</a>
                            </div>
                            <a href="javascript:;" className="btn-square-lst" data-follow="0" data-tagid="500074"><i>加入</i>
                            </a>
                        </li>
                        <li>
                            <div className="theme-lst-tab">
                                <a href="/topic?topicId=500074" className="theme-lst-thumb"
                                   target="_blank">
                                    <div className="pic-enlarge">
                                        <div className="img-bg imgDiv"
                                             data-src="https://img03.sogoucdn.com/v2/thumb/resize/w/500/t/1/retype/ext/auto/q/75?appid=200698&amp;url=http://pic.wenwen.soso.com/pqpic/wenwenpic/0/20170929165830-546387044_jpeg_500_500_33132/500"
                                             data-observer="true" data-loaded="true"
                                             style={{backgroundImage: 'url(https://img04.sogoucdn.com/v2/thumb/resize/w/500/t/1/retype/ext/auto/q/75?appid=200698&url=http://pic.wenwen.soso.com/pqpic/wenwenpic/0/20180515165535-1955954937_jpeg_256_256_26216/500)'}}></div>
                                    </div>
                                </a>
                                <a href="/topic?topicId=500074" target="_blank" className="theme-lst-tit">欧美音乐及娱乐新闻</a>
                                <a href="/topic?topicId=500074" target="_blank" className="theme-lst-txt">欧美音乐不只有霉霉哦！</a>
                            </div>
                            <a href="javascript:;" className="btn-square-lst" data-follow="0" data-tagid="500074"><i>加入</i>
                            </a>
                        </li>
                        <li>
                            <div className="theme-lst-tab">
                                <a href="/topic?topicId=500074" className="theme-lst-thumb"
                                   target="_blank">
                                    <div className="pic-enlarge">
                                        <div className="img-bg imgDiv"
                                             data-src="https://img03.sogoucdn.com/v2/thumb/resize/w/500/t/1/retype/ext/auto/q/75?appid=200698&amp;url=http://pic.wenwen.soso.com/pqpic/wenwenpic/0/20170929165830-546387044_jpeg_500_500_33132/500"
                                             data-observer="true" data-loaded="true"
                                             style={{backgroundImage: 'url(https://img04.sogoucdn.com/v2/thumb/resize/w/500/t/1/retype/ext/auto/q/75?appid=200698&url=http://pic.wenwen.soso.com/pqpic/wenwenpic/0/20180515165535-1955954937_jpeg_256_256_26216/500)'}}></div>
                                    </div>
                                </a>
                                <a href="/topic?topicId=500074" target="_blank" className="theme-lst-tit">欧美音乐及娱乐新闻</a>
                                <a href="/topic?topicId=500074" target="_blank" className="theme-lst-txt">欧美音乐不只有霉霉哦！</a>
                            </div>
                            <a href="javascript:;" className="btn-square-lst" data-follow="0" data-tagid="500074"><i>加入</i>
                            </a>
                        </li>
                        <li>
                            <div className="theme-lst-tab">
                                <a href="/topic?topicId=500074" className="theme-lst-thumb"
                                   target="_blank">
                                    <div className="pic-enlarge">
                                        <div className="img-bg imgDiv"
                                             data-src="https://img03.sogoucdn.com/v2/thumb/resize/w/500/t/1/retype/ext/auto/q/75?appid=200698&amp;url=http://pic.wenwen.soso.com/pqpic/wenwenpic/0/20170929165830-546387044_jpeg_500_500_33132/500"
                                             data-observer="true" data-loaded="true"
                                             style={{backgroundImage: 'url(https://img04.sogoucdn.com/v2/thumb/resize/w/500/t/1/retype/ext/auto/q/75?appid=200698&url=http://pic.wenwen.soso.com/pqpic/wenwenpic/0/20180515165535-1955954937_jpeg_256_256_26216/500)'}}></div>
                                    </div>
                                </a>
                                <a href="/topic?topicId=500074" target="_blank" className="theme-lst-tit">欧美音乐及娱乐新闻</a>
                                <a href="/topic?topicId=500074" target="_blank" className="theme-lst-txt">欧美音乐不只有霉霉哦！</a>
                            </div>
                            <a href="javascript:;" className="btn-square-lst" data-follow="0" data-tagid="500074"><i>加入</i>
                            </a>
                        </li>
                        <li>
                            <div className="theme-lst-tab">
                                <a href="/topic?topicId=500074" className="theme-lst-thumb"
                                   target="_blank">
                                    <div className="pic-enlarge">
                                        <div className="img-bg imgDiv"
                                             data-src="https://img03.sogoucdn.com/v2/thumb/resize/w/500/t/1/retype/ext/auto/q/75?appid=200698&amp;url=http://pic.wenwen.soso.com/pqpic/wenwenpic/0/20170929165830-546387044_jpeg_500_500_33132/500"
                                             data-observer="true" data-loaded="true"
                                             style={{backgroundImage: 'url(https://img04.sogoucdn.com/v2/thumb/resize/w/500/t/1/retype/ext/auto/q/75?appid=200698&url=http://pic.wenwen.soso.com/pqpic/wenwenpic/0/20180515165535-1955954937_jpeg_256_256_26216/500)'}}></div>
                                    </div>
                                </a>
                                <a href="/topic?topicId=500074" target="_blank" className="theme-lst-tit">欧美音乐及娱乐新闻</a>
                                <a href="/topic?topicId=500074" target="_blank" className="theme-lst-txt">欧美音乐不只有霉霉哦！</a>
                            </div>
                            <a href="javascript:;" className="btn-square-lst" data-follow="0" data-tagid="500074"><i>加入</i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default List2;
