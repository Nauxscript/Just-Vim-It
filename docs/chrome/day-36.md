# 一见如故：Chrome 开发者工具

开发者工具（Chrome devTool），AKA f12 杀手，AKA 你把报错信息截图给我看看，可以说是我们的老朋友了。日常开发打开它的时间是非常大量的，那就一定要了解一下它的一些常用操作的命令了。

## 常用操作

- 打开 / 关闭 开发者工具；
  + `command` + `option` + `i`：打开开发者工具；
  + `command` + `option` + `j`：打开开发者工具并激活 `console` 栏；
  + `command` + `option` + `c` / `command` + `shift` + `c`：打开开发者工具并激活 `element` 栏且激活鼠标选中元素模式，即此时鼠标可以选中页面元素；
- `ctrl` + `` ` ``：打开 `console` 面板；会在开发者工具面板底部打开该面板；
- `command` + `k`：清空 `console` 面板输出； 
- `command` + `p`： 搜索该网站静态资源文件；
- `command` + `shift` + `p`：搜索开发者工具中的可用命令；
- `command` + `[` / `]`：切换开发者工具中的标签栏； 
- `esc`：在 `source panel` 中 显示 / 隐藏 底部面板；

## 采用 VSCode 快捷键方式

在开发者工具中键入 `command` + `k` + `command` + `s` 可以进入快捷键查看面板（是不是和 VSCode 如出一辙？），在面板顶部的 `Match shortcuts from preset` 中，可以切换为 `visual studio code`，切换后部分快捷键就会和 VScode 的保持一致。