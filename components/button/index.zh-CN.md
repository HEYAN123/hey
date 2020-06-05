---
category: Components
type: 原生二次开发
title: Button
subtitle: 按钮
---

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 逻辑

### Hey Design 封装了以下几种涉及到逻辑的按钮表现

- 可用：正常可进行点击操作的状态。
- 禁用：由于条件不满足而禁止触发点击操作。
- 加载中：用于涉及到异步操作等待响应的时候，避免重复的点击交互。

## 样式

- Hey Design已经配置了默认的按钮样式，通过cus属性的有无控制是否自定义样式和样式的覆盖或重写，详见API部分介绍

## API

Button组件支持原生 button 的所有属性。

按钮的属性必要说明如下：

| 属性 | 说明 | 参数类型 | 默认值 |
| --- | --- | --- | --- | --- |
| onClick | 点击按钮时的触发的回调函数 | (event) => void | - |
| cus | 即custom，控制按钮是否自定义样式类名，不写会应用默认样式，`part`会以覆盖或新增的方式修改原样式，`all`会完全清除默认样式并使用自定义的样式类名 | false \| `part` \| `all` | false |
| status | 按钮状态，三种值分别代表加载中、禁用、正常状态 | `loading` \| `disabled` \| false | false |
| className | 正常可用状态的样式类名 | string | - |
| loadingClassName | 加载中状态的样式类名 | string | - |
| disabledClassName | 禁用状态的样式类名 | string | - |
