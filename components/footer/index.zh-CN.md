---
category: Components
type: 布局
title: Footer
subtitle: 页脚
---

位于页面底部展示网站信息的块。

## 何时使用

- 需要展示网站相关信息时

## 最佳实践

- 始终用一个容器将内容块和Footer装在一起
- 为内容模块增加如下css属性

```xml
<div>
  <content style="min-height:100%;margin-bottom:-50px;">内容区域</content>
  <Footer>footer</Footer>
<div>
```

## API

| 参数        | 说明             | 类型                          | 默认值       | 版本 |
| ----------- | ---------------- | ----------------------------- | ------------ | ---- |
| className   | 分割线样式类     | string                        | -            |      |
| dashed      | 是否虚线         | boolean                       | false        |      |
| orientation | 分割线标题的位置 | `left` \| `right` \| `center` | `center`     |      |
| style       | 分割线样式对象   | object                        | -            |      |
| type        | 水平还是垂直类型 | `horizontal` \| `vertical`    | `horizontal` |      |
