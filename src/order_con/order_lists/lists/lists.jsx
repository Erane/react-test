import React, {Component} from 'react';


function listState({state}) {
    switch (state){
        case 'wait':
            return (
                <span title="待付款" className="wait">
                    待付款
                </span>
            );
        case 'paid':
            return (
                <span title="待发货"  className="paid">
                    待发货
                </span>
            );
        case 'shipment':
            return (
                <span title="确认收货"  className="shipment">
                    确认收货
                </span>
            );
        case 'evaluate':
            return (
                <span title="待评价"  className="evaluate">
                    待评价
                </span>
            );
        default:
            return (
                <span title="已完成"  className="complete">
                    已完成
                </span>
            )
    }
}

export default class lists extends Component{
    componentWillMount(){

    }
    constructor(props){
        super(props);
    }

    render(){
        return(
            <li>
                <div className=" list  list-template">
                    <div className="title item">
                        <p><time title={this.props.item.time}>{this.props.item.time}</time> 订单号:{this.props.item.id}</p>
                        <div className="product ">
                            <img src={this.props.item.pic} alt="商品图"/>
                            <div className="detail ">
                                            <span title={this.props.item.detail_text}>
                                                {this.props.item.detail_text}
                                            </span>
                                <div className="icons">
                                    <img src={require('./../images/icon1.png')}/>
                                    <img src={require('./../images/icon2.png')}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="price item">
                        <p className="center">
                            <a href="javascript">
                                <img src={require('./../images/tm.png')}/>
                                <span title={this.props.item.shop_name}>{this.props.item.shop_name}</span>
                            </a>
                        </p>
                        <div className="center">
                            <span title={'单价:'+this.props.item.price}>¥{this.props.item.price}</span>
                        </div>
                    </div>
                    <div className="number item">
                        <p>&nbsp;</p>
                        <div className="center">
                            <span title={'已购买数量:'+this.props.item.number}>{this.props.item.number}</span>
                        </div>
                    </div>
                    <div className="payment item">
                        <p>&nbsp;</p>
                        <div className="center">
                                        <span>
                                            <b>¥{(this.props.item.price * this.props.item.number).toFixed(2)}</b>
                                            <br/>
                                            (含运费:¥0.00)
                                        </span>
                        </div>
                    </div>
                    <div className="deal item">
                        <p>&nbsp; <i className="iconfont icon-6" title="删除" /></p>
                        <div className="center">
                            {listState(this.props.item)}
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}