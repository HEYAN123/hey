(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{3034:function(t,e){t.exports={content:["section",["p","输入框自动完成功能。"],["h2","何时使用"],["p","需要自动完成时。"]],meta:{category:"Components",subtitle:"自动完成",type:"数据录入",cols:2,title:"AutoComplete",filename:"components/auto-complete/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#方法",title:"方法"},"方法"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","allowClear"],["td","支持清除, 单选模式有效"],["td","boolean"],["td","false"],["td"]],["tr",["td","autoFocus"],["td","自动获取焦点"],["td","boolean"],["td","false"],["td"]],["tr",["td","backfill"],["td","使用键盘选择选项的时候把选中项回填到输入框中"],["td","boolean"],["td","false"],["td"]],["tr",["td","children (自定义输入框)"],["td","自定义输入框"],["td","HTMLInputElement ",["br"],["br"]," HTMLTextAreaElement ",["br"],["br"]," ",["code","React.ReactElement<InputProps>"]],["td",["code","<Input />"]],["td"]],["tr",["td","children (自动完成的数据源)"],["td","自动完成的数据源"],["td",["code","React.ReactElement<OptionProps>"]," ",["br"],["br"]," ",["code","Array<React.ReactElement<OptionProps>>"]],["td","-"],["td"]],["tr",["td","defaultActiveFirstOption"],["td","是否默认高亮第一个选项。"],["td","boolean"],["td","true"],["td"]],["tr",["td","defaultValue"],["td","指定默认选中的条目"],["td","string","|","string","[","]","|"," 无"],["td"]],["tr",["td","disabled"],["td","是否禁用"],["td","boolean"],["td","false"],["td"]],["tr",["td","filterOption"],["td","是否根据输入项进行筛选。当其为一个函数时，会接收 ",["code","inputValue"]," ",["code","option"]," 两个参数，当 ",["code","option"]," 符合筛选条件时，应返回 ",["code","true"],"，反之则返回 ",["code","false"],"。"],["td","boolean or function(inputValue, option)"],["td","true"],["td"]],["tr",["td","getPopupContainer"],["td","菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。",["a",{title:null,href:"https://codesandbox.io/s/4j168r7jw0"},"示例"]],["td","Function(triggerNode)"],["td","() => document.body"],["td"]],["tr",["td","placeholder"],["td","输入框提示"],["td","string"],["td","-"],["td"]],["tr",["td","value"],["td","指定当前选中的条目"],["td","string","|","string","[","]","|","{ key: string, label: string","|","ReactNode }","|","Array","<","{ key: string, label: string","|","ReactNode }>"],["td","无"],["td"]],["tr",["td","onBlur"],["td","失去焦点时的回调"],["td","function()"],["td","-"],["td"]],["tr",["td","onChange"],["td","选中 option，或 input 的 value 变化时，调用此函数"],["td","function(value)"],["td","无"],["td"]],["tr",["td","onFocus"],["td","获得焦点时的回调"],["td","function()"],["td","-"],["td"]],["tr",["td","onSearch"],["td","搜索补全项的时候调用"],["td","function(value)"],["td","无"],["td"]],["tr",["td","onSelect"],["td","被选中时调用，参数为选中项的 value 值"],["td","function(value, option)"],["td","无"],["td"]],["tr",["td","defaultOpen"],["td","是否默认展开下拉菜单"],["td","boolean"],["td","-"],["td"]],["tr",["td","open"],["td","是否展开下拉菜单"],["td","boolean"],["td","-"],["td"]],["tr",["td","onDropdownVisibleChange"],["td","展开下拉菜单的回调"],["td","function(open)"],["td","-"],["td"]]]],["h2","方法"],["table",["thead",["tr",["th","名称"],["th","描述"],["th","版本"]]],["tbody",["tr",["td","blur()"],["td","移除焦点"],["td"]],["tr",["td","focus()"],["td","获取焦点"],["td"]]]],["h2","FAQ"],["h3","为何受控状态下使用 onSearch 无法输入中文？"],["p","请使用 ",["code","onChange"]," 进行受控管理。",["code","onSearch"]," 触发于搜索输入，与 ",["code","onChange"]," 时机不同。此外，点选选项时也不会触发 ",["code","onSearch"]," 事件。"],["p","相关 issue：",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/18230"},"#18230"]," ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/17916"},"#17916"]]]}}}]);