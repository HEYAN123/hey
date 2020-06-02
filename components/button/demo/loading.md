---
order: 2
title:
  zh-CN: 加载状态按钮
  en-US: Type
---

## zh-CN

`status`属性填'loading'状态时按钮会进入“加载中”的状态并在此状态时用户不可操作按钮，用此状态来提醒用户请求正在执行而不可重复点击按钮。

## en-US

There are `primary` button, `default` button, `dashed` button and `link` button in antd.

```jsx
import React from 'react';
import { Button } from 'hey-design';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: '',
    }
  }

  handleClick = () => {
    this.setState({
      flag: 'loading',
    });
    console.log('loading...');
    setTimeout(() => {
      this.setState({
        flag: '',
      });
      console.log('request success!');
    }, 1500)
  }

  render() {
    const { flag } = this.state;
    return (
      <div>
        <Button status={flag} onClick={this.handleClick}>loading示例</Button>
      </div>
    )
  }
  
}

ReactDOM.render(<App />, mountNode);
```
