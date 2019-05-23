import React from 'react';
import { Button } from 'antd';



class ClassButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // 子组件的state没有变化，并且从父组件接受的props也没有变化，会导致子组件重渲染，用shouldComponentUpdate 过滤掉重渲染
  // 从父组件props传值并且state没有变化，这个时候更新的东西有重复渲染，为了避免，
  // 通过用，shouldComponentUpdate 钩子函数。过滤掉不需要渲染的
  shouldComponentUpdate(nextProps) {
    // console.log("TCL: ClassButton -> shouldComponentUpdate -> nextProps", nextProps,this.props);

    const { number } = this.props;
    if (nextProps.number.number == number.number) {
      // console.log(`前一个对象${JSON.stringify(nextProps.number)}后一个对象${JSON.stringify(this.props.number)}`);
      return false
    }
    return true
  }

  render() {
    const { index, number, handleClick } = this.props
    // 在每次渲染子组件时，打印该子组件的数字内容
    console.log(number.number);
    return <Button style={{ marginRight: 10 }} onClick={() => handleClick(index)}>{number.number}</Button>
  }
}

export default ClassButton;