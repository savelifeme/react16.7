import React from 'react';
import { Button, message } from 'antd'
import ClassButton from './ClassButton'



class ClassLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      // numberArray: [1, 2, 3]
      numberArray: [
        { number: 0 },
        { number: 1 },
        { number: 2 } 
      ]
    };
  }

  // react 有三个阶段来进行执行得到效果   1、挂载 2、更新 3、卸载

  // ///////第一阶段从-->”将要挂载“ 到 --> render() 到 -->挂载成功  总共3个周期函数//////////////////////////////////////////

  // 在组件挂载到DOM前调用 在render 渲染之前执行 而且只会执行一次
  // 在这边调用this.setState不会引起组件重新渲染，也可以把写在这边的内容提前到constructor()中，所以项目中很少用。
  componentWillMount() {
    // const { count } = this.state;
    // console.log("TCL: ClassLog -> componentWillMount -> count", count)
  }

  // 组件挂载后调用，且只会被调用一次
  componentDidMount() {
    // const { count } = this.state;
    // document.title = `${count}次`;
  }

  // ///////第一阶段 挂载，从-->”将要挂载“ 到 --> render() 到 -->挂载成功  总共3个周期函数//////////////////////////////////////////


  // ///////第二阶段 更新，从-->”挂载成功“ 到 --> render() 到 -->挂载成功  总共3个周期函数//////////////////////////////////////////

  // shouldComponentUpdate函数是重渲染时render()函数调用前被调用的函数，
  // 它接受两个参数：nextProps和nextState，分别表示下一个props和下一个state的值。
  // 并且，当函数返回false时候，阻止接下来的render()函数的调用，阻止组件重渲染，而返回true时，组件照常重渲染。

  // shouldComponentUpdate(nextProps, nextState) {
  //   const { count } = this.state
  //   console.log("TCL: ClassLog -> shouldComponentUpdate -> count", count)
  //   console.log("TCL: ClassLog -> shouldComponentUpdate -> nextProps,nextState", nextProps, nextState)
  //   if (nextState.count === count) {
  //     return false
  //   }
  //   return true;
  // }

  // componentDidUpdate() {
  //   const { count } = this.state;
  //   document.title = `${count}次`;
  // }

  // 点击事件
  hanldClick = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 })
    message.destroy();
    message.info("你真的点我了，我生气了！");
  }

  // 点击后使numberArray中数组下标为index的数字值加一，重渲染对应的Son组件
  handleClickAddOne = (index) => {
    const { numberArray } = this.state
    const preNumberArray = numberArray;
    // 把做修改的number Object先拷贝到一个新的对象中，替换原来的对象
    preNumberArray[index] = Object.assign({}, preNumberArray[index])
    preNumberArray[index].number += 1;
    console.log(preNumberArray);
    this.setState({
      numberArray: preNumberArray
    })
  }

  // 好累呀，我困，困成够了
  // render: 根据组件的props和state（无两者的重传递和重赋值，论值是否有变化，都可以引起组件重新render） return 一个React元素
  // render：是纯函数（Pure function：函数的返回结果只依赖于它的参数；函数执行过程里面没有副作用），不能在里面执行this.setState，会有改变组件状态的副作用。
  render() {
    const { count, numberArray } = this.state;
    // console.log("TCL: ClassLog -> render -> count", count);
    return (
      <div>
        <div>
          <p>你已经点击我{count}次</p>
          <Button onClick={this.hanldClick}>
            敢不敢点我
          </Button>
        </div>
        <div style={{ marginTop: 15, borderTop: '1px solid red', textAlign: "center" }}>
          <p style={{ cursor: 'pointer' }}>点击数字</p>
          {
            numberArray.length && (
              numberArray.map((item, key) =>
              // 这个不以item 为key值的原因是因为item可能会重复
                <ClassButton
                  key={key}
                  index={key}
                  number={item}
                  handleClick={this.handleClickAddOne}
                />
              )
            )
          }
        </div>
      </div>
    );
  }
}

export default ClassLog;