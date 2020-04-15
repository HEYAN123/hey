---
order: 11
title:
  zh-CN: 步骤进度条
  en-US: Progress bar with steps
---

## zh-CN

带步骤的进度条。

## en-US

A progress bar with steps.

```jsx
import { Progress } from 'antd';

ReactDOM.render(
  <div>
    <Progress percent={50} steps={3} strokeColor="#667387" />
    <br />
    <Progress percent={30} steps={5} strokeColor="#667387" />
    <br />
    <Progress percent={100} steps={5} size="small" strokeColor="#667387" />
  </div>,
  mountNode,
);
```
