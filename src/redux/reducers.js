import counter from './reducers/couter';

export default function combineReducers(state = {}, action) {
    console.log(action,'----action---')
    return {
        couterabcc: counter(state.couterabcc, action)
    }
}
// export default combineReducers({
//     couter,
// });
