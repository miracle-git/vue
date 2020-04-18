> 基于[M2前端全家桶框架](https://github.com/miracle-git/m2-mob-app.git)搭建的企业级PC端开发应用。

## 运行步骤

- 首先全局安装[m2-cli](http://github.com/miracle-git/m2.git) (如果你已安装，请忽略)
```bash
npm install -g m2-cli
```
- 通过**m2**命令行一键下载项目脚手架
```bash
m2 init (也可使用别名m2 i)
```
- 然后会依次提示您输入项目名称，描述，类型，作者等信息（不输入将采用默认值）
- 当出现Project Type选项时，请输入修改为mob（不然将默认建一个web工程模板了~~）
- 当出现**Project init successfully**表示项目脚手架已下载成功
- 按照操作指引安装依赖，运行项目即可

**提示：如果你忘记修改项目名称，描述等信息，可直接下载完成后修改package.json中的name,title,author,description以及repository.url**

- 接下来，就开始你的快乐编程之旅把!
