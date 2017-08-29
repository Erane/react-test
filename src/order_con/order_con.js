import React,{Component} from 'react';
import './order_con.css';
import LeftNav from './leftNav/leftNav';
import Order_lists from './order_lists/order_lists.jsx';


export default class order_con extends Component{
    constructor(props){
        super(props);
        this.state={
            path:'我的订单页面',
            active:7
        };
        this.slideToggle = this.slideToggle.bind(this);
    }
    slideToggle(index,lists){
        if(index ===this.state.active){
            this.setState({
                active:null
            });
            return;
        }
        this.setState({
            active:index,
            path:lists[index].title
        })
    }
    render(){
        return(
            <div className="order-con ">
                <LeftNav slideToggle={this.slideToggle} active={this.state.active}  />
                <Order_lists path={this.state.path} />
            </div>
        )
    }
}