/* @remove-on-es-build-begin */
// this file is not used if use https://github.com/ant-design/babel-plugin-import
const ENV = process.env.NODE_ENV;
if (
  ENV !== 'production' &&
  ENV !== 'test' &&
  typeof console !== 'undefined' &&
  console.warn && // eslint-disable-line no-console
  typeof window !== 'undefined'
) {
  // eslint-disable-next-line no-console
  console.warn(
    'You are using a whole package of antd, ' +
      'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
  );
}
/* @remove-on-es-build-end */

// 原生二次开发
export { default as Button } from './button';
export { default as Div } from './div';

// 布局
export { default as Footer } from './footer';
export { default as Col } from './col';
export { default as Row } from './row';
export { default as Layout } from './layout';

// 导航
export { default as Affix } from './affix';
export { default as Dropdown } from './dropdown';
export { default as Menu } from './menu';
export { default as Pagination } from './pagination';

// 数据录入
export { default as AutoComplete } from './auto-complete';
export { default as Checkbox } from './checkbox';
export { default as Cascader } from './cascader';
export { default as DatePicker } from './date-picker';
export { default as Form } from './form';
export { default as InputNumber } from './input-number';
export { default as Input } from './input';
export { default as Mentions } from './mentions';
export { default as Rate } from './rate';
export { default as Radio } from './radio';
export { default as Switch } from './switch';
export { default as Slider } from './slider';
export { default as Select } from './select';
export { default as TreeSelect } from './tree-select';
export { default as Transfer } from './transfer';
export { default as TimePicker } from './time-picker';
export { default as Upload } from './upload';

// 数据展示
export { default as Avatar } from './avatar';
export { default as Badge } from './badge';
export { default as Comment } from './comment';
export { default as Collapse } from './collapse';
export { default as Carousel } from './carousel';
export { default as Calendar } from './calendar';
export { default as Descriptions } from './descriptions';
export { default as Empty } from './empty';
export { default as List } from './list';
export { default as Popover } from './popover';
export { default as Statistic } from './statistic';
export { default as Tree } from './tree';
export { default as Tooltip } from './tooltip';
export { default as Timeline } from './timeline';
export { default as Tag } from './tag';
export { default as Tabs } from './tabs';

// 反馈
export { default as Alert } from './alert';
export { default as Drawer } from './drawer';
export { default as Modal } from './modal';
export { default as message } from './message';
export { default as notification } from './notification';
export { default as Progress } from './progress';
export { default as Popconfirm } from './popconfirm';
export { default as Result } from './result';
export { default as Spin } from './spin';
export { default as Skeleton } from './skeleton';

// 其他
export { default as Anchor } from './anchor';
export { default as BackTop } from './back-top';
export { default as ConfigProvider } from './config-provider';
export { default as Divider } from './divider';


export { default as version } from './version';
