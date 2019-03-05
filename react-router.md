# note
我的笔记--react-router（V4）

一、react路由有三个类组件：路由器、路由器匹配组件、链接组件

1、路由器组件：

V4路由器组件相对于V3来说，路由器组件更加多元化，主要的路由组件有hash路由、history路由、memory路由三种组件，路由不再以传参的形式导入组件，而是以withrouter奖match、history、location传递到组件的props属性中

- hash路由：路由信息存在于hash值中，每一个页面跳转都会生成一个对应的hash的链接（/#/hash形式），进行路由跳转时主要依靠hashchange函数进行页面的跳转判断

- history路由：路由信息存在浏览器history中，依靠h5的浏览器新属性history进行页面的跳转，在页面刷新时，会向服务器发送请求，因此服务器需要进行一些配置（详见官方文档），否则会报404错误

- memory路由：主要存在于内存中，一般用于开发移动端

- static路由...

2、路由器匹配组件：

路由器组件主要是：Switch和Route两个（V4是移除了IndexRoute组件的，用exact替代），Switch路由是V4新的属性，Switch独立路由中可以放入多个Route，在路由器渲染时，没exact属性存在的情况下，渲染第一个Route

3、链接组件：

链接组件主要是：Redirect、Link、NavLink三种，在V4中新增了NavLink，其实NavLink与Link的区别不是很大，主要作用是通过此组件访问路由器，从而进行页面跳转。与<a>标签的功能一样，但在React渲染上有所区别

二、V4新特性：

1、嵌套路由：在v3中，路由器往往都有单独的js文件，但在v4发生了很大的变化，可以实现路由嵌套，路由往往不会出现在单独的js文件中，而是更加像React的组件，与React的其他组件相互嵌套配合渲染dom

2、独立路由：<Switch>

3、exact

4、historyRouter兼容ie10及其以上的路由器==>history是h5新特性

5、match对象：在v4中使用最多的是match对象来匹配路由表，match.path、match.url等等

新思想：路由在v4中可以随时随地当作组件和其他组件一起被渲染，history的url更加符合浏览器的url格式

三、关于懒加载：

React提供了lazy()的函数，再配合webpack的import()就可以实现组件的懒加载。而在加载时可以使用loading插件，或者使用React.16的新特性来实现跳转界面
