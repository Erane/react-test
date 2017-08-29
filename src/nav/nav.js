import React,{Component} from 'react';
import './nav.scss'


export default class nax extends Component{
    render(){
        return(
            <div className="nav clr">
                <div className="nav-lef">
                    <a href="javascript:;">首页</a>
                    <a href="javascript:;">实践项目</a>
                </div>
                <div className="nav-right">
                    <a href="javascript:;">注册</a>
                    <a href="javascript:;">登录</a>
                </div>
            </div>
        )
    }
}