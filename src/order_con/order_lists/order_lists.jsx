import React, {Component} from 'react';
import './order_lists.scss';
import Lists from './lists/lists';

let lists = [
    {
        time:'2017-08-29 20:48:52',
        id:'123456789',
        detail_text:'百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐',
        pic:require('./images/commodity.jpg'),
        shop_name:'XXX网店',
        price:1234.123,
        number:4,
        state:'complete'
    },
    {
        time:'2017-8-29 21:54:07',
        id:'987654321',
        detail_text:'百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐',
        pic:require('./images/commodity.jpg'),
        shop_name:'XXX网店',
        price:1234.123,
        number:8,
        state:'wait'
    },
    {
        time:'2017-08-29 20:48:52',
        id:'123456789',
        detail_text:'百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐',
        pic:require('./images/commodity.jpg'),
        shop_name:'XXX网店',
        price:1234.123,
        number:1,
        state:'paid'
    },
    {
        time:'2017-08-29 20:48:52',
        id:'123456789',
        detail_text:'百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐',
        pic:require('./images/commodity.jpg'),
        shop_name:'XXX网店',
        price:1234.123,
        number:6,
        state:'shipment'
    },
    {
        time:'2017-08-29 20:48:52',
        id:'123456789',
        detail_text:'百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐',
        pic:require('./images/commodity.jpg'),
        shop_name:'XXX网店',
        price:1234.123,
        number:22,
        state:'evaluate'
    },
    {
        time:'2017-08-29 20:48:52',
        id:'123456789',
        detail_text:'百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐百事可乐',
        pic:require('./images/commodity.jpg'),
        shop_name:'XXX网店',
        price:1234.123,
        number:22,
        state:'evaluate'
    }
]


export default class order_lists extends Component {
    constructor(props){
        super(props);
        this.state = {
            lists:lists,
            staticLists:lists,
            tab_nav:[
                '所有订单',
                '待付款',
                '待发货',
                '待收货',
                '待评价'
            ],
            active:0,
            listState:['all','wait','paid','shipment','evaluate','complete']
        };
        this.tab = this.tab.bind(this);
    }
    tab(index){
        let items = this.state.staticLists;
        let state = this.state.listState[index];
        let newItem = items.filter(function (item, i) {
           return state ==='all'|| item.state === state;
        });
        this.setState({
            active:index,
            lists:newItem
        })
    }
    render() {
        return (
            <div className="order-lists">
                <div className="sub-nav">
                    <a href="javascript:;">实际项目</a>/
                    <a href="javascript:;">XXX网店</a>/
                    <a href="javascript:;">{this.props.path}</a>
                </div>
                <div className="tap-wrap">
                    <div className="tab-nav clr">
                        {this.state.tab_nav.map((item,index)=><span key={index} onClick={(e)=>this.tab(index)} className={this.state.active === index?'active':''} title={item}>{item}</span>)}
                    </div>
                    <div className="tab-title  list-template">
                        <div className="title item"><p>宝贝</p></div>
                        <div className="price item"><p>单价</p></div>
                        <div className="number item"><p>数量</p></div>
                        <div className="payment item"><p>实付款</p></div>
                        <div className="deal item"><p>交易操作</p></div>
                    </div>
                    <ul>
                        {this.state.lists.map((item,i)=><Lists key={i} item={item} />)}
                    </ul>
                </div>
            </div>
        )
    }
}