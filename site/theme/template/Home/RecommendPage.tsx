import * as React from 'react';
import { Div } from 'hey-design';
import s from './style';

const content = [
  {
    pic: '🎨',
    title: '灵活定制',
    text: '极简内置样式，易于覆盖重写',
  },
  {
    pic: '💪',
    title: '逻辑封装',
    text: '常用复杂逻辑封装透明化，组件赋能，使开发更专注于业务',
  },
  {
    pic: '📦',
    title: '开箱即用',
    text: 'npm安装使用，快速方便',
  },
]

export default function RecommendPageo() {
  return (
    <Div className={s.items}>
      {
        content.map(item => (
          <Div key={item.title} className={s.item}>
            <div className={s["item-pic"]}>{item.pic}</div>
            <Div className={s["item-content"]}>
              <Div className={s["item-content-title"]}>{item.title}</Div>
              <p className={s["item-content-text"]}>{item.text}</p>
            </Div>
          </Div>
        ))
      }
    </Div>
  );
}
