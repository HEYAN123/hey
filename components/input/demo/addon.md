---
order: 2
title:
  zh-CN: 前置/后置标签
  en-US: Pre / Post tab
---

## zh-CN

用于配置一些固定组合。

## en-US

Using pre & post tabs example.

```jsx
import { Input } from 'hey-design';

ReactDOM.render(
  <div>
    <div style={{ marginBottom: 16 }}>
      <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
    </div>
    <div style={{ marginBottom: 16 }}>
      <Input addonBefore="http://" suffix=".com" defaultValue="mysite" />
    </div>
  </div>,
  mountNode,
);
```
