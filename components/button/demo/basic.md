---
order: 0
title:
  zh-CN: 按钮样式
  en-US: Type
---

## zh-CN

按钮样式通过cus属性控制自定义样式和默认样式的应用，防止因为css优先级问题出现样式不能覆盖问题

## en-US

There are `primary` button, `default` button, `dashed` button and `link` button in antd.

```jsx
import { Button } from 'hey-design';

function handleClick() {
  console.log('click!');
}

ReactDOM.render(
  <div>
    <Button onClick={handleClick}>默认</Button>
    <Button cus="part" className="mycls" onClick={handleClick}>part</Button>
    <Button cus="all" className="mycls-2" onClick={handleClick}>alllllllll</Button>
  </div>,
  mountNode,
);
```

```css
.mycls {
  margin-left: 15px;
  color: red;
}

.mycls-2 {
  margin-left: 15px;
  padding: 0 15px;
  color: blue;
  font-size: 22px;
  background: yellow;
  border: 1px solid blue;
  border-radius: 100px;
}
```
