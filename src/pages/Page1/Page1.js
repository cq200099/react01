import React, {Component} from 'react';

export default class Page1 extends Component {
    constructor(props) {
        console.log(props,'======Page1')
        super(props);
    }
    // static getDerivedStateFromProps(){
    //     console.log('---------getDerivedStateFromProps------------')
    // }
    handleClick() {
        console.log('Click happened');
    }
    // 生命周期方法即将过时，在新代码中应该避免使用它们：
    componentWillUnmount() {
        console.log(this,'-------componentWillUnmount---------------')
    }
    render() {
        console.log(this,'-------render---------------')
        return (
            <div>
               Page1--
            </div>
        )
    }
    componentDidMount() {
        console.log(this,'-------componentDidMount---------------')
    }
}
