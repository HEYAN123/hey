---
order: 0
title:
  zh-CN: 正常显示状态
  en-US: Type
---

## zh-CN

正常状态的Div使用方式跟原生div方式相同，将内容放在其内部即可，使用className自定义块元素边框样式。

## en-US

There are `primary` button, `default` button, `dashed` button and `link` button in antd.

```jsx
import React from 'react';
import { Div, Button } from 'hey-design';

let flag = 'success';

function handleClick() {
  setTimeout(() => {
    console.log('click!');
  }, 2000);
}

ReactDOM.render(
  <Div className="my-container">
    <p>锄禾日当午</p>
    <p>汗滴禾下土</p>
    <p>谁知盘中餐</p>
    <p>粒粒皆辛苦</p>
  </Div>
  ,
  mountNode,
);
```

```css
.my-container {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0 4px 30px 0 rgba(0, 0, 0, .08);
}
```
