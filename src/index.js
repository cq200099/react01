// import React from 'react';
// import ReactDOM from 'react-dom';
// import './css/index.scss';
// import { Provider } from 'react-redux';
// import getRouter from './router/router';
// import store from './redux/store';
// import * as serviceWorker from './serviceWorker';
// const router = getRouter();
//
// /* 初始化 */
// renderWithHotReload(router);
//
// function renderWithHotReload(RootElement) {
//     ReactDOM.render(
//         <Provider store={store}>{RootElement}</Provider>,
//         document.getElementById('root')
//     );
// }
// serviceWorker.unregister();
// // 还需要在主要的js文件里写入下面这段代码
// if (module.hot) {
//     // 实现热更新
//     module.hot.accept();
// }
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import history from './history';
ReactDOM.render(
    <Router>
        <App/></Router>,
    document.getElementById('root')
);

// ReactDOM.render(
//         <Provider store={store}>{router}</Provider>,
//         document.getElementById('root')
//     );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
