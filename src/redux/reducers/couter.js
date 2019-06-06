import { INCREMENT, DECREMENT, RESET } from 'actions/couter';

/*
* 初始化state
*/
const initState = {
    count1: 0,
};

/*
* reducer
*/
export default function reducer(state = initState, action) {
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
            return state;
    }
}
