(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{3156:function(t,e){t.exports={content:["section",["p","Select component to select value from options."],["h2","When To Use"],["ul",["li",["p","A dropdown menu for displaying choices - an elegant alternative to the native ",["code","<select>"]," element."]],["li",["p","Utilizing ",["a",{title:null,href:"/components/radio/"},"Radio"]," is recommended when there are fewer total options (less than 5)."]]]],meta:{category:"Components",type:"Data Entry",title:"Select",filename:"components/select/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lucy<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>lucy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Option</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Select</span><span class="token punctuation">></span></span>'},["code",'<Select>\n  <Option value="lucy">lucy</Option>\n</Select>']],["h3","Select props"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","allowClear"],["td","Show clear button."],["td","boolean"],["td","false"],["td"]],["tr",["td","autoClearSearchValue"],["td","Whether the current search will be cleared on selecting an item. Only applies when ",["code","mode"]," is set to ",["code","multiple"]," or ",["code","tags"],"."],["td","boolean"],["td","true"],["td"]],["tr",["td","autoFocus"],["td","Get focus by default"],["td","boolean"],["td","false"],["td"]],["tr",["td","defaultActiveFirstOption"],["td","Whether active first option by default"],["td","boolean"],["td","true"],["td"]],["tr",["td","defaultValue"],["td","Initial selected option."],["td","string","|","string","[","]",["br"],"number","|","number","[","]",["br"],"LabeledValue","|","LabeledValue[]"],["td","-"],["td"]],["tr",["td","disabled"],["td","Whether disabled select"],["td","boolean"],["td","false"],["td"]],["tr",["td","dropdownClassName"],["td","className of dropdown menu"],["td","string"],["td","-"],["td"]],["tr",["td","dropdownMatchSelectWidth"],["td","Whether dropdown's width is same with select."],["td","boolean"],["td","true"],["td"]],["tr",["td","dropdownRender"],["td","Customize dropdown content"],["td","(menuNode: ReactNode, props) => ReactNode"],["td","-"],["td"]],["tr",["td","dropdownStyle"],["td","style of dropdown menu"],["td","object"],["td","-"],["td"]],["tr",["td","dropdownMenuStyle"],["td","additional style applied to dropdown menu"],["td","object"],["td","-"],["td"]],["tr",["td","filterOption"],["td","If true, filter options by input, if function, filter options against it. The function will receive two arguments, ",["code","inputValue"]," and ",["code","option"],", if the function returns ",["code","true"],", the option will be included in the filtered set; Otherwise, it will be excluded."],["td","boolean or function(inputValue, option)"],["td","true"],["td"]],["tr",["td","firstActiveValue"],["td","Value of action option by default"],["td","string","|","string","[","]"],["td","-"],["td"]],["tr",["td","getPopupContainer"],["td","Parent Node which the selector should be rendered to. Default to ",["code","body"],". When position issues happen, try to modify it into scrollable content and position it relative. ",["a",{title:null,href:"https://codesandbox.io/s/4j168r7jw0"},"Example"]],["td","function(triggerNode)"],["td","() => document.body"],["td"]],["tr",["td","labelInValue"],["td","whether to embed label in value, turn the format of value from ",["code","string"]," to ",["code","{key: string, label: ReactNode}"]],["td","boolean"],["td","false"],["td"]],["tr",["td","maxTagCount"],["td","Max tag count to show"],["td","number"],["td","-"],["td"]],["tr",["td","maxTagTextLength"],["td","Max tag text length to show"],["td","number"],["td","-"],["td"]],["tr",["td","maxTagPlaceholder"],["td","Placeholder for not showing tags"],["td","ReactNode/function(omittedValues)"],["td","-"],["td"]],["tr",["td","tagRender"],["td","Customize tag render"],["td","(props) => ReactNode"],["td","-"],["td"]],["tr",["td","mode"],["td","Set mode of Select"],["td",["code","multiple"]," ","|"," ",["code","tags"]],["td","-"],["td"]],["tr",["td","notFoundContent"],["td","Specify content to show when no result matches.."],["td","string"],["td","'Not Found'"],["td"]],["tr",["td","optionFilterProp"],["td","Which prop value of option will be used for filter if filterOption is true"],["td","string"],["td","value"],["td"]],["tr",["td","optionLabelProp"],["td","Which prop value of option will render as content of select. ",["a",{title:null,href:"https://codesandbox.io/s/antd-reproduction-template-tk678"},"Example"]],["td","string"],["td",["code","value"]," for ",["code","combobox"],", ",["code","children"]," for other modes"],["td"]],["tr",["td","placeholder"],["td","Placeholder of select"],["td","string","|","ReactNode"],["td","-"],["td"]],["tr",["td","showArrow"],["td","Whether to show the drop-down arrow"],["td","boolean"],["td","true"],["td"]],["tr",["td","showSearch"],["td","Whether show search input in single mode."],["td","boolean"],["td","false"],["td"]],["tr",["td","size"],["td","Size of Select input."],["td",["code","large"]," ","|"," ",["code","middle"]," ","|"," ",["code","small"]],["td"],["td"]],["tr",["td","suffixIcon"],["td","The custom suffix icon"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","removeIcon"],["td","The custom remove icon"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","clearIcon"],["td","The custom clear icon"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","menuItemSelectedIcon"],["td","The custom menuItemSelected icon with multiple options"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","tokenSeparators"],["td","Separator used to tokenize on tag/multiple mode"],["td","string","[","]"],["td"],["td"]],["tr",["td","value"],["td","Current selected option."],["td","string","|","string","[","]\\",["br"],"number","|","number","[","]\\",["br"],"LabeledValue","|","LabeledValue[]"],["td","-"],["td"]],["tr",["td","onBlur"],["td","Called when blur"],["td","function"],["td","-"],["td"]],["tr",["td","onChange"],["td","Called when select an option or input value change, or value of input is changed in combobox mode"],["td","function(value, option:Option/Array","<","Option>)"],["td","-"],["td"]],["tr",["td","onDeselect"],["td","Called when a option is deselected, param is the selected option's value. Only called for multiple or tags, effective in multiple or tags mode only."],["td","function(string","|","number","|","LabeledValue)"],["td","-"],["td"]],["tr",["td","onFocus"],["td","Called when focus"],["td","function"],["td","-"],["td"]],["tr",["td","onInputKeyDown"],["td","Called when key pressed"],["td","function"],["td","-"],["td"]],["tr",["td","onMouseEnter"],["td","Called when mouse enter"],["td","function"],["td","-"],["td"]],["tr",["td","onMouseLeave"],["td","Called when mouse leave"],["td","function"],["td","-"],["td"]],["tr",["td","onPopupScroll"],["td","Called when dropdown scrolls"],["td","function"],["td","-"],["td"]],["tr",["td","onSearch"],["td","Callback function that is fired when input changed."],["td","function(value: string)"],["td"],["td"]],["tr",["td","onSelect"],["td","Called when a option is selected, the params are option's value (or key) and option instance."],["td","function(string","|","number","|","LabeledValue, option:Option)"],["td","-"],["td"]],["tr",["td","defaultOpen"],["td","Initial open state of dropdown"],["td","boolean"],["td","-"],["td"]],["tr",["td","open"],["td","Controlled open state of dropdown"],["td","boolean"],["td","-"],["td"]],["tr",["td","onDropdownVisibleChange"],["td","Call when dropdown open"],["td","function(open)"],["td","-"],["td"]],["tr",["td","loading"],["td","indicate loading state"],["td","Boolean"],["td","false"],["td"]],["tr",["td","bordered"],["td","whether has border style"],["td","Boolean"],["td","true"],["td"]]]],["h3","Select Methods"],["table",["thead",["tr",["th","Name"],["th","Description"],["th","Version"]]],["tbody",["tr",["td","blur()"],["td","Remove focus"],["td"]],["tr",["td","focus()"],["td","Get focus"],["td"]]]],["h3","Option props"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","disabled"],["td","Disable this option"],["td","boolean"],["td","false"],["td"]],["tr",["td","title"],["td",["code","title"]," of Select after select this Option"],["td","string"],["td","-"],["td"]],["tr",["td","value"],["td","default to filter with this property"],["td","string","|","number"],["td","-"],["td"]],["tr",["td","className"],["td","additional class to option"],["td","string"],["td","-"],["td"]]]],["h3","OptGroup props"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","key"],["td"],["td","string"],["td","-"],["td"]],["tr",["td","label"],["td","Group label"],["td","string","|","React.Element"],["td","-"],["td"]]]],["h2","FAQ"],["h3","The dropdown is closed when click ",["code","dropdownRender"]," area?"],["p","See the instruction in ",["a",{title:null,href:"#components-select-demo-custom-dropdown-menu"},"dropdownRender example"],"."],["h3","Why sometime customize Option cause scroll break?"],["p","Virtual scroll internal set item height as ",["code","32px"],". You need to adjust ",["code","listItemHeight"]," when your option height is less and ",["code","listHeight"]," config list container height:"],["pre",{lang:"tsx",highlighted:'<span class="token operator">&lt;</span><span class="token keyword">Select</span> listItemHeight<span class="token operator">=</span>{<span class="token number">10</span>} listHeight<span class="token operator">=</span>{<span class="token number">250</span>} <span class="token operator">/</span><span class="token operator">></span>'},["code","<Select listItemHeight={10} listHeight={250} />"]],["p","Note: ",["code","listItemHeight"]," and ",["code","listHeight"]," are internal props. Please only modify when necessary."]]}}}]);