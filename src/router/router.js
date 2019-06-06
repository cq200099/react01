import React from 'react';
import { withRouter  } from 'react-router'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Page1 from '../pages/Page1/Page1';
import Counter from '../pages/Counter/Counter.tsx';
// import Home from 'pages/Home/Home';
// import Page1 from 'pages/Page1/Page1'
import store from "../redux/store";
import {INCREMENT} from "actions/couter";
import Provider from "react-redux/es/components/Provider";
import App from "../app";
class Xo extends React.Component{
    constructor(props,context){
        super(props,context);
        this.test11 = this.test11.bind(this);
        this.test12 = this.test12.bind(this);
        this.Router1 = Router;
        this.Router2 = withRouter;
        // this.Link = Link;
        // this.state = {
        // };
    }
    test11(){
        // debugger
        const xx = this.Router1(this);
        // xx.history.replace({hash:'/page1',pathname:'page1'},true);
        // xx.history.push('/page1',true);
        // xx.createHref("/page1");
        xx.history.replace('/page1',true,'/page1');
        // xx.history.goBack();
        console.log('---test---',xx.history);
    }
    test12(){
        // debugger
        console.log('test12------------');
        this.props.history.push("/page1");
        // this.to = {pathname:"/page1"}
        // const xx = this.Router1(this);
        // xx.history.replace({hash:'/page1',pathname:'page1'},true);
        // xx.history.push('/page11',true);
        // this.Link();
        // xx.history.replace('/',this.state);
    }
    render() {
        return (
            <div id="id888">
                <li onClick={this.test11}>-1-Page1</li>

                <div>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/page1">Page1</Link></li>
                        {/*<li onClick={this.test12}><Link>Page1111111</Link></li>*/}
                        <li onClick={this.test12}>Page2222222</li>
                        {/*<li onClick={test11}>-2-Page1</li>*/}
                        <li><Link to="/couter">couter</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/page1" component={Page1}/>
                        <Route path="/couter" component={Counter} />
                    </Switch>
                </div>
            </div>
        );
    }
}
// export default getRouter;
// export default withRouter(Xo);
export default Xo;
