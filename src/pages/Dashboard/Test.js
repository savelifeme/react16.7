import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

function Test() {
  const [count, setCount] = useState(1);
  console.log("TCL: Test -> count, setCount", count)

	console.log("TCL: Test -> 打印执行次数")

  useEffect(()=>{
    document.title = `${count}次`
  })

  return (
    <div>
      <div style={{width:"100%",textAlign:"center"}}><h1>hook测试</h1></div>
      <p>你点击了{count}次</p>
      <Button onClick={() => setCount(count + 1)}>
        点我
      </Button>
    </div>
  );
}
export default Test