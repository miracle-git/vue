## 快速上手
## m2-vue-ui
[![](https://img.shields.io/badge/m2--vue--ui-v1.0.5--beta-green.svg)](https://github.com/miracle-git/m2.git) <br/>

本节将介绍如何在项目中使用组件库。

### 引入 m2-vue-ui
```bash
npm install m2-vue-ui
yarn add m2-vue-ui
```

你可以引入整个 m2-vue-ui，或是根据需要仅引入部分组件。

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import 'm2-vue-ui/lib/theme/base.css'; // 也可放在App.vue中引入
import Vue from 'vue';
import VueUI from 'm2-vue-ui';
import App from './App.vue';

Vue.use(VueUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

注意：样式文件需要单独引入(此时不要在babel中配置按需要加载选项)。

#### 按需引入

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
yarn add babel-plugin-component -D
```

然后，将 .babelrc 修改为：

```json
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "m2-vue-ui",
        "styleLibraryName": "theme"
      }
    ]
  ]
}
```

接下来，如果你只希望引入部分组件，比如 只需要引入素材通用模块中的Content（latex转义html解析），那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import { M2TabBar } from 'm2-vue-ui';
import App from './App.vue';

Vue.component(M2TabBar.name, M2TabBar);
/* 或写为
 * Vue.use(M2TabBar)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

注意：按需加载不需要单独引入样式文件。
