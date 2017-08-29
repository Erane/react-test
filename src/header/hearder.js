import React,{Component} from 'react';
import './header.css'
export default class header extends Component{
    render(){
        return(
            <div className="header">
                <a href="javascript:;">XXXXX<span>.CN</span></a>
                <div className="search clr">
                    <input type="text"  placeholder="搜索..." />
                    <i className="iconfont icon-sousuo" />
                </div>
            </div>
        )
    }
}