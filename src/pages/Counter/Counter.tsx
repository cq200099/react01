import * as React from 'react';
// @ts-ignore
import {increment as _increment, decrement as _decrement, reset as _reset, INCREMENT} from 'actions/couter';

import { connect } from 'react-redux';

class Counter extends React.Component<{}> {
    props:any;
    render() {
        const {
            counter2: { count1 },
            increment1,
            decrement,
            xxx,
            reset,
        }:any = this.props;
        const xxx1 = this.props.xxx;
        const xv = this.props.counter2.count1;
        const abcd = this.props.abcd;
        return (
            <div>
                <div>
                    当前计数为:
                    {count1} ==={xv} == {abcd}
                </div>
                <button onClick={() => xxx()}>自增</button>
                <button onClick={() => xxx1()}>自增1</button>
                <button onClick={() => decrement()}>自减</button>
                <button onClick={() => reset()}>重置</button>
            </div>
        );
    }
}

const mapStateToProps = (state:any) => {
    // debugger
    return {
        counter2: state.couterabcc1,
        abcd:state.abc,
        ddd: state.couterabcc,
    };
};

// export const INCREMENT = "INCREMENT";
// export const DECREMENT = "DECREMENT";
// export const RESET = "RESET";
const mapDispatchToProps = (dispatch:any) => {
    return {
        xxx: () => {
            dispatch({type: "INCREMENT"});
        },
        increment1: () => {
            dispatch(_increment());
        },
        decrement: () => {
            dispatch(_decrement());
        },
        reset: () => {
            dispatch(_reset());
        },
    };
};
const ccc = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
console.log(ccc,'=----ccc')
export default ccc;
