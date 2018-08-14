/**
 * @Author byran <mengxuhui@sogou-inc.com>
 * C-Time 2018/08/11.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import List from './list';
export default class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let container = document.getElementById('list_container')
        if (container) {
            ReactDOM.render(<List/>, container);
        }

    }

    handleTab(e, type) {
        // require.ensure
        $(e.target).closest('.tab-tag-clk').siblings().removeClass('cur')        
        $(e.target).closest('.tab-tag-clk').addClass('cur');
        switch (type) {
            case 1 :
                return require.ensure(['./list'], (require) => {
                    let List = require('./list').default;
                    ReactDOM.render(<List/>, document.getElementById('list_container'));
                });
                break;
            case 2 :
                return require.ensure(['./list2'], (require) => {
                    let List2 = require('./list2').default;
                    ReactDOM.render(<List2/>, document.getElementById('list_container'));
                });
                break;
        }
    }

    render() {
        return (
            <div>
                <div className="square-nav" id="squareNav">
                    <div className="square-nav-lst-wrap">
                        <ul className="square-nav-lst" id="topTopicList">
                            <li data-tagid="0" data-href="/topic/square?tagid=0" target="_self" className="tab-tag-clk cur">
                                <a href="javascript:;" onClick={(e) => this.handleTab(e, 1)}>推荐</a>
                            </li>
                            <li data-tagid="108" data-href="/topic/square?tagid=108" target="_self"
                                className="tab-tag-clk">
                                <a href="javascript:;" onClick={(e) => this.handleTab(e, 2)}>影视</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="list_container"></div>
            </div>
        );
    }
}