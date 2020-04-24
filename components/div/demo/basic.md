---
order: 0
title:
  zh-CN: 显示状态
  en-US: Type
---

## zh-CN

块级元素根据status字段判断当前请求的数据情况

## en-US

There are `primary` button, `default` button, `dashed` button and `link` button in antd.

```jsx
import { Div, Button } from 'hey-design';

let flag = 'success';

function handleClick() {
  setTimeout(() => {
    console.log('click!');
  }, 2000);
}

ReactDOM.render(
  <Div className="my-container">
    <Div className="mycls">
      <p>无异步请求数据的情况，正常展示</p>
      <Button onClick={handleClick}>获取数据</Button>
    </Div>
    <Div className="mycls">
      <p>点击下面的按钮获取数据，你会看到获取成功的情况</p>
      <Button onClick={handleClick}>获取数据</Button>
    </Div>
    <Div className="mycls">
      <p>点击下面的按钮获取数据，你会看到获取失败的情况</p>
      <Button onClick={handleClick}>获取数据</Button>
    </Div>
  </Div>
  ,
  mountNode,
);
```

```css
.my-container {
  justify-content: space-around;
  border: 1px solid red;
}

.mycls {
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0 4px 30px 0 rgba(0, 0, 0, .08);
}
```
