# 开发协议
1. 代码检测
```
采用tslint，严格控制代码规范，已保证团队的一致性和规范性
```
2. 组件约定
```
containers/                用来存放页面组件（智能组件，只用来获取数据）
containers/subpage/        用来存放页面组件单独使用的木偶组件（处理props传递来的数据）
componenets/               用来存放公共组件（木偶组件，用来处理父组件props传递来的数据）
```
3. scss文件约定
```
static/css  reset.css用来设置初始化样式， common.scss中用来写公共样式
统一和智能组件（or 木偶组件同级）文件名style.scss，如有subpage目录应该放在subpage中，上层智能组件不用控制css
```
3. redux约定
```
```