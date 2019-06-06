import React, { Component } from 'react';
import './css/index.scss';
import { Provider } from 'react-redux';
import Xo from './router/router';
import store from './redux/store';
import {INCREMENT} from "actions/couter";
import {BrowserRouter as Router, withRouter} from "react-router-dom";

// const router = getRouter();
class App extends Component {
    // Router1 = Router(App)
    constructor(props,context){
        super(props,context);
        this.test = this.test.bind(this);
        this.store = store;
    }
    test(){
        // this.store.dispatch( {type: INCREMENT})
        this.props.history.push("/page1");
    }
    render() {
        return (
            <div id="appid" >
                <Provider store={store}><Xo/></Provider>,
                <span onClick={this.test}>111111111111111</span>
            </div>
        );
    }
}
export default withRouter(App);
// export default App;
