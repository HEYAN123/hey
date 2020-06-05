---
order: 1
title:
  zh-CN: 国际化
  en-US: Locale
---

## zh-CN

此处列出 Hey Design 中需要国际化支持的组件，你可以在演示里切换语言。

## en-US

Components which need localization support are listed here, you can toggle the language in the demo.

```jsx
import {
  ConfigProvider,
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Popconfirm,
  Table,
  Modal,
  Button,
  Select,
  Radio,
} from 'hey-design';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('en');

const { Option } = Select;
const { RangePicker } = DatePicker;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'filter1',
        value: 'filter1',
      },
    ],
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];

class Page extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  hideModal = () => {
    this.setState({ visible: false });
  };

  render() {
    const info = () => {
      Modal.info({
        title: 'some info',
        content: 'some info',
      });
    };
    const confirm = () => {
      Modal.confirm({
        title: 'some info',
        content: 'some info',
      });
    };
    return (
      <div className="locale-components">
        hello
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      locale: enUS,
    };
  }

  changeLocale = e => {
    const localeValue = e.target.value;
    if (!localeValue) {
      moment.locale('en');
    } else {
      moment.locale('zh-cn');
    }
  };

  render() {
    return (
      <div>
        hello
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

```css
.site-config-provider-calendar-wrapper {
  width: 319px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
}

.locale-components {
  border-top: 1px solid #d9d9d9;
  padding-top: 16px;
}

.code-box-demo .example {
  margin: 16px 0;
}

.code-box-demo .example > * {
  margin-right: 8px;
}

.change-locale {
  margin-bottom: 16px;
}
```

<style>
[data-theme="dark"] .locale-components {
  border-top: 1px solid #303030;
}
[data-theme="dark"] .site-config-provider-calendar-wrapper {
  border: 1px solid #303030;
}
</style>
