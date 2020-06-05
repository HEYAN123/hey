---
category: Components
type: 原生二次开发
title: Div
subtitle: 块元素
---

块元素作为一个容器承载表达一组的信息内容。

## 何时使用

用于聚合承载一组关联性强的信息，经常作为`卡片`拥有`特定的边框样式`，`特定操作`，`数据加载状态的不同表现`。

## 逻辑

### Div组件可根据status属性展示可控的三种状态

- `正常显示`：正常展示数据
- `数据获取中`：当块元素需要等待数据响应时候，经常需要插入类似骨架屏的loading中间态占位显示。
- `获取失败`：当数据请求失败时候显示加载失败或进行局部接口刷新的交互入口。

## 样式

- Div采用了flex布局，内部元素可按照flex布局进行排版。
- Div组件的默认样式非常简单，所以样式采用了classnames混入覆盖，只需正常传入className或者style对象即可，不会存在样式覆盖冲突问题。

## API

| 属性 | 说明 | 参数类型 | 默认值 |
| --- | --- | --- | --- | --- |
| status | 块内的数据状态，三种状态值分别表示正常、请求失败、加载中 | false \| `fail` \| `loading` | false |
| className | 块元素的样式类名 | string | - |
| failContent | 加载失败时显示的提示内容 | ReactComponent | - |
| loadingContent | 加载中时显示的loading内容 | ReactComponent | - |
| handleLoad | 请求数据的方法，会绑定在加载失败时重新请求的按钮上 | Function | - |
| handleClick | Div组件点击事件触发的回调函数 | Function | - |
