import React, {Component} from 'react';
import './reset.css';
import './App.css';
import Header from './header/hearder';
import Nav from './nav/nav.js';
import Order_con from './order_con/order_con.js';

class App extends Component {
    scrollUp(){
        document.querySelector('body').scrollTop = 0;
    }
    render() {
        return (
            <main>
                <Header />
                <Nav />
                <Order_con />

                <i className="iconfont icon-wodedingdan35 up" onClick={e=>this.scrollUp()}  />
            </main>
        );
    }
}

export default App;
