(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{3134:function(t,n){t.exports={content:["section",["p","全局展示通知提醒信息。"],["h2","何时使用"],["p","在系统四个角显示通知提醒信息。经常用于以下情况："],["ul",["li",["p","较为复杂的通知内容。"]],["li",["p","带有交互的通知，给出用户下一步的行动点。"]],["li",["p","系统主动推送。"]]]],meta:{category:"Components",type:"反馈",noinstant:!0,title:"Notification",subtitle:"通知提醒框",filename:"components/notification/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["ul",["li",["p",["code","notification.success(config)"]]],["li",["p",["code","notification.error(config)"]]],["li",["p",["code","notification.info(config)"]]],["li",["p",["code","notification.warning(config)"]]],["li",["p",["code","notification.warn(config)"]]],["li",["p",["code","notification.open(config)"]]],["li",["p",["code","notification.close(key: String)"]]],["li",["p",["code","notification.destroy()"]]]],["p","config 参数如下："],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","btn"],["td","自定义关闭按钮"],["td","ReactNode"],["td","-"]],["tr",["td","bottom"],["td","消息从底部弹出时，距离底部的位置，单位像素。"],["td","number"],["td","24"]],["tr",["td","className"],["td","自定义 CSS class"],["td","string"],["td","-"]],["tr",["td","closeIcon"],["td","自定义关闭图标"],["td","ReactNode"],["td","-"]],["tr",["td","description"],["td","通知提醒内容，必选"],["td","string","|","ReactNode"],["td","-"]],["tr",["td","duration"],["td","默认 4.5 秒后自动关闭，配置为 null 则不自动关闭"],["td","number"],["td","4.5"]],["tr",["td","getContainer"],["td","配置渲染节点的输出位置"],["td","() => HTMLNode"],["td","() => document.body"]],["tr",["td","icon"],["td","自定义图标"],["td","ReactNode"],["td","-"]],["tr",["td","key"],["td","当前通知唯一标志"],["td","string"],["td","-"]],["tr",["td","message"],["td","通知提醒标题，必选"],["td","string","|","ReactNode"],["td","-"]],["tr",["td","onClose"],["td","点击默认关闭按钮时触发的回调函数"],["td","Function"],["td","-"]],["tr",["td","onClick"],["td","点击通知时触发的回调函数"],["td","Function"],["td","-"]],["tr",["td","placement"],["td","弹出位置，可选 ",["code","topLeft"]," ",["code","topRight"]," ",["code","bottomLeft"]," ",["code","bottomRight"]],["td","string"],["td","topRight"]],["tr",["td","style"],["td","自定义内联样式"],["td",["a",{title:null,href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e434515761b36830c3e58a970abf5186f005adac/types/react/index.d.ts#L794"},"React.CSSProperties"]],["td","-"]],["tr",["td","top"],["td","消息从顶部弹出时，距离顶部的位置，单位像素。"],["td","number"],["td","24"]]]],["p","还提供了一个全局配置方法，在调用前提前配置，全局一次生效。"],["ul",["li",["p",["code","notification.config(options)"]]]],["pre",{lang:"js",highlighted:'notification<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  placement<span class="token punctuation">:</span> <span class="token string">\'bottomRight\'</span><span class="token punctuation">,</span>\n  bottom<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span>\n  duration<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","notification.config({\n  placement: 'bottomRight',\n  bottom: 50,\n  duration: 3,\n});"]],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","bottom"],["td","消息从底部弹出时，距离底部的位置，单位像素。"],["td","number"],["td","24"]],["tr",["td","closeIcon"],["td","自定义关闭图标"],["td","ReactNode"],["td","-"]],["tr",["td","duration"],["td","默认自动关闭延时，单位秒"],["td","number"],["td","4.5"]],["tr",["td","getContainer"],["td","配置渲染节点的输出位置"],["td","() => HTMLNode"],["td","() => document.body"]],["tr",["td","placement"],["td","弹出位置，可选 ",["code","topLeft"]," ",["code","topRight"]," ",["code","bottomLeft"]," ",["code","bottomRight"]],["td","string"],["td","topRight"]],["tr",["td","top"],["td","消息从顶部弹出时，距离顶部的位置，单位像素。"],["td","number"],["td","24"]]]],["h2","FAQ"],["h3","为什么 notification 不能获取 context、redux 的内容？"],["p","直接调用 notification 方法，antd 会通过 ",["code","ReactDOM.render"]," 动态创建新的 React 实体。其 context 与当前代码所在 context 并不相同，因而无法获取 context 信息。"],["p","当你需要 context 信息（例如 ConfigProvider 配置的内容）时，可以通过 ",["code","notification.useNotification"]," 方法会返回 ",["code","api"]," 实体以及 ",["code","contextHolder"]," 节点。将其插入到你需要获取 context 位置即可："],["pre",{lang:"tsx",highlighted:'<span class="token keyword">const</span> <span class="token punctuation">[</span>api<span class="token punctuation">,</span> contextHolder<span class="token punctuation">]</span> <span class="token operator">=</span> notification<span class="token punctuation">.</span><span class="token function">useNotification</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\nreturn <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>Context1<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token string">"Ant"</span><span class="token operator">></span>\n    {<span class="token operator">/</span><span class="token operator">*</span> contextHolder 在 Context1 内，它可以获得 Context1 的 context <span class="token operator">*</span><span class="token operator">/</span>}\n    {contextHolder}\n    <span class="token operator">&lt;</span>Context2<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token string">"Design"</span><span class="token operator">></span>\n      {<span class="token operator">/</span><span class="token operator">*</span> contextHolder 在 Context2 外，因而不会获得 Context2 的 context <span class="token operator">*</span><span class="token operator">/</span>}\n    <span class="token operator">&lt;</span><span class="token operator">/</span>Context2<span class="token punctuation">.</span>Provider<span class="token operator">></span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>Context1<span class="token punctuation">.</span>Provider<span class="token operator">></span>\n<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code",'const [api, contextHolder] = notification.useNotification();\n\nreturn (\n  <Context1.Provider value="Ant">\n    {/* contextHolder 在 Context1 内，它可以获得 Context1 的 context */}\n    {contextHolder}\n    <Context2.Provider value="Design">\n      {/* contextHolder 在 Context2 外，因而不会获得 Context2 的 context */}\n    </Context2.Provider>\n  </Context1.Provider>\n);']],["p",["strong","异同："],"通过 hooks 创建的 ",["code","contextHolder"]," 必须插入到子元素节点中才会生效，当你不需要上下文信息时请直接调用。"]]}}}]);