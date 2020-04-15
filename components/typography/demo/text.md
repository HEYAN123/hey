---
order: 2
title:
  zh-CN: 文本组件
  en-US: Text Component
---

## zh-CN

内置不同样式的文本。

## en-US

Provides multiple types of text.

```jsx
import { Typography } from 'hey-design';

const { Text } = Typography;

ReactDOM.render(
  <div>
    <Text>Hey Design</Text>
    <br />
    <Text type="secondary">Hey Design</Text>
    <br />
    <Text type="warning">Hey Design</Text>
    <br />
    <Text type="danger">Hey Design</Text>
    <br />
    <Text disabled>Hey Design</Text>
    <br />
    <Text mark>Hey Design</Text>
    <br />
    <Text code>Hey Design</Text>
    <br />
    <Text underline>Hey Design</Text>
    <br />
    <Text delete>Hey Design</Text>
    <br />
    <Text strong>Hey Design</Text>
  </div>,
  mountNode,
);
```
