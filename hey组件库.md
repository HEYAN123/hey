# 这里记录hey组件库的搭建过程

- 2019.10.18

自己建了个文件夹叫hey，
npm init，
然后在package中改写了脚本命令，使用webpack服务器启动和打包命令
安装相关依赖

链接github远程仓库

git init

添加.gitignore文件忽略node_modules文件夹

添加远程仓库
git remote add origin https://.......

git add .
git commit -m "init"
git push -u origin master

安装了react和webpack后创建src文件夹，这个是开发文件夹
创建index.js，用来将根节点渲染到html里

继续安装依赖
react-dom：这个包提供了可在应用顶层使用的DOM方法，如果有需要可以将这些方法用于React模型以外的地方:
render()
hydrate()
unmountComponentAtNode()
findDOMNode()
createPortal()
