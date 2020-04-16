---
order: 0
title:
  zh-CN: 页脚
  en-US: Footer
---

## zh-CN

当内容高度小于窗口高度时页脚位于窗口底部；当内容高度大于窗口高度时页脚位于内容尾部。

## en-US

The most basic dropdown menu.

```jsx
import { Footer } from 'hey-design';

ReactDOM.render(
  <div className="page">
    <div className="content">
      内容内容
    </div>
    <Footer className="myfooter">
      <p>hello world~</p>
    </Footer>
  </div>,
  mountNode,
);
```

```css
.page {
  width: 100%;
  height: 300px;
}
.content {
  min-height: 100%;
  margin-bottom: -50px;
  background: #eee;
}
.myfooter {
  background: #ddd;
}
```
