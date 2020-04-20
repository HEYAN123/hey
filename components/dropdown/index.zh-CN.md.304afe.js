(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{3089:function(t,e){t.exports={content:["section",["p","向下弹出的列表。"],["h2","何时使用"],["p","当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。"]],meta:{category:"Components",subtitle:"下拉菜单",type:"导航",title:"Dropdown",filename:"components/dropdown/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","属性如下"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","disabled"],["td","菜单是否禁用"],["td","boolean"],["td","-"],["td"]],["tr",["td","getPopupContainer"],["td","菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。",["a",{title:null,href:"https://codepen.io/afc163/pen/zEjNOy?editors=0010"},"示例"]],["td","Function(triggerNode)"],["td",["code","() => document.body"]],["td"]],["tr",["td","overlay"],["td","菜单"],["td",["a",{title:null,href:"/components/menu"},"Menu"]," ","|"," () => Menu"],["td","-"],["td"]],["tr",["td","overlayClassName"],["td","下拉根元素的类名称"],["td","string"],["td","-"],["td"]],["tr",["td","overlayStyle"],["td","下拉根元素的样式"],["td","object"],["td","-"],["td"]],["tr",["td","placement"],["td","菜单弹出位置：",["code","bottomLeft"]," ",["code","bottomCenter"]," ",["code","bottomRight"]," ",["code","topLeft"]," ",["code","topCenter"]," ",["code","topRight"]],["td","String"],["td",["code","bottomLeft"]],["td"]],["tr",["td","trigger"],["td","触发下拉的行为, 移动端不支持 hover"],["td","Array","<",["code","click"],"|",["code","hover"],"|",["code","contextMenu"],">"],["td",["code","['hover']"]],["td"]],["tr",["td","visible"],["td","菜单是否显示"],["td","boolean"],["td","-"],["td"]],["tr",["td","onVisibleChange"],["td","菜单显示状态改变时调用，参数为 visible"],["td","Function(visible)"],["td","-"],["td"]]]],["p",["code","overlay"]," 菜单使用 ",["a",{title:null,href:"/components/menu/"},"Menu"],"，还包括菜单项 ",["code","Menu.Item"],"，分割线 ",["code","Menu.Divider"],"。"],["blockquote",["p","注意： Menu.Item 必须设置唯一的 key 属性。"],["p","Dropdown 下的 Menu 默认不可选中。如果需要菜单可选中，可以指定 ",["code","<Menu selectable>"],"."]],["h3","Dropdown.Button"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","disabled"],["td","菜单是否禁用"],["td","boolean"],["td","-"],["td"]],["tr",["td","icon"],["td","右侧的 icon"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","overlay"],["td","菜单"],["td",["a",{title:null,href:"/components/menu/"},"Menu"]],["td","-"],["td"]],["tr",["td","placement"],["td","菜单弹出位置：",["code","bottomLeft"]," ",["code","bottomCenter"]," ",["code","bottomRight"]," ",["code","topLeft"]," ",["code","topCenter"]," ",["code","topRight"]],["td","String"],["td",["code","bottomLeft"]],["td"]],["tr",["td","size"],["td","按钮大小，和 ",["a",{title:null,href:"/components/button/"},"Button"]," 一致"],["td","string"],["td",["code","default"]],["td"]],["tr",["td","trigger"],["td","触发下拉的行为"],["td","Array","<",["code","click"],"|",["code","hover"],"|",["code","contextMenu"],">"],["td",["code","['hover']"]],["td"]],["tr",["td","type"],["td","按钮类型，和 ",["a",{title:null,href:"/components/button/"},"Button"]," 一致"],["td","string"],["td",["code","default"]],["td"]],["tr",["td","visible"],["td","菜单是否显示"],["td","boolean"],["td","-"],["td"]],["tr",["td","onClick"],["td","点击左侧按钮的回调，和 ",["a",{title:null,href:"/components/button/"},"Button"]," 一致"],["td","Function"],["td","-"],["td"]],["tr",["td","onVisibleChange"],["td","菜单显示状态改变时调用，参数为 visible"],["td","Function"],["td","-"],["td"]],["tr",["td","buttonsRender"],["td","自定义左右两个按钮"],["td",["code","([buttons: ReactNode[]]) => ReactNode"]],["td","-"],["td"]]]]]}}}]);