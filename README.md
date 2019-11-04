# vueCli3.0

1.安装

卸载旧版本
npm uninstall vue-cli -g 或 yarn global remove vue-cli

安装新版本（需要 Node.js 8.9 或更高版本）

npm install -g @vue/cli
OR
yarn global add @vue/cli

2.创建一个项目

创建一个新项目：
vue create 项目名
  遇到的问题：
  Vue packages version mismatch
  解决方案：
  1.vue和vue-template-compiler的版本配置要一致              
  2.npm install @vue2.6.10(2.6.10为vue-template-compiler的版本号)

  
