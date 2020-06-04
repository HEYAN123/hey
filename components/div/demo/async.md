---
order: 1
title:
  zh-CN: 异步请求时根据请求状态展示不同内容
  en-US: Type
---

## zh-CN

块元素组件根据status字段判断当前请求的数据情况，并对应显示相应的内容组件

## en-US

There are `primary` button, `default` button, `dashed` button and `link` button in antd.

```jsx
import React from 'react';
import { Div, Button } from 'hey-design';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flag1: '',
      flag2: '',
    }
  }

  handleClickSucc = () => {
    this.setState({
      flag1: 'loading',
    });
    console.log('loading...');
    setTimeout(() => {
      this.setState({
        flag1: '',
      });
      console.log('request success!');
    }, 4000)
  }

  handleClickFail = () => {
    this.setState({
      flag2: 'loading',
    });
    console.log('loading...');
    setTimeout(() => {
      this.setState({
        flag2: 'fail',
      });
      console.log('request failed!');
    }, 4000)
  }

  render() {
    const { flag1, flag2 } = this.state;
    return (
      <Div>
        <Div className="mycls" status={flag2} handleLoad={this.handleClickFail}>
          <p>点击下面的按钮获取数据，你会看到获取失败的情况</p>
          <Button onClick={this.handleClickFail}>获取数据</Button>
        </Div>
        <Div className="mycls" status={flag1}>
          <p>点击下面的按钮获取数据，你会看到获取成功的情况</p>
          <Button onClick={this.handleClickSucc}>获取数据</Button>
        </Div>
      </Div>
    )
  }
}

ReactDOM.render(<App />, mountNode);
```

```css
.mycls {
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  overflow: hidden;
  border: 1px solid #369;
  border-radius: 5px;
}
```
