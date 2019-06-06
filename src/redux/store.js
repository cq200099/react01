import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import combineReducersxx from './reducers';
import counter from "reducers/couter";
import {DECREMENT, INCREMENT, RESET} from "actions/couter";

const initState = {
    count1: 0,
};
const reducer1 = function (state = initState, action) {
    debugger
    console.log(state,'----',action.type)
    switch (action.type) {
        case INCREMENT:
            return {
                count1: state.count1 + 1,
            };
        case DECREMENT:
            return {
                count1: state.count1 - 1,
            };
        case RESET:
            return { count1: 0 };
        default:
            return  state;
    }
}
const bb = function(state,action){
    // debugger
    // action.type = 'INCREMENT'
    state = state || initState
    return {
        // couterabcc1: reducer1(state.couterabcc, action),
        couterabcc1:function(state,action){
            // debugger
            console.log(state,'----',action.type)
            switch (action.type) {
                case INCREMENT:
                    return {
                        count1: state.count1 + 1,
                    };
                case DECREMENT:
                    return {
                        count1: state.count1 - 1,
                    };
                case RESET:
                    return { count1: 0 };
                default:
                    return  initState;
            }
        }(state.couterabcc1,action),
        abc:33,
    }
}
// const store = createStore(combineReducers, applyMiddleware(thunkMiddleware));
const store = createStore(bb);
// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
const unsubscribe = store.subscribe(() => console.log(store.getState(),'================='))
export default store;
