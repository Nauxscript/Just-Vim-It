# Obsidian 常用文件操作

既然要用键盘来操作一个软件，并且还是一个笔记类软件，文件操作肯定是少不了的，所以我们这章节训练先来了解一下 Obsidian 中关于文件常用操作。

## 常用命令

- `command` + `n`： 创建新⽂件 
- `command` + `w`： 关闭⽂件
- `shift` + `←` / `→：` 切换屏幕
- `command` + `p`：打开⽂件 / 查看最近打开的⽂件 / 键入未存在的文件名可以直接创建文件，需要更改配置：
  + 在设置中的快捷键面板，搜索 `快速切换` 或 `switcher`，默认快捷键是 `command` + `o`，把它修改为 `command` + `p`，这样更改是为了和 VScode 的使用保持一致；但默认的 `command` + `p` 是打开命令面板，所以把打开命令面板改 `command` + `shift` + `p`，这样可以和 VScode 保持一致
  +  聚焦待续下拉框后使用 `command` + `enter` 可以在新的 tab 打开对应文件
- `space` + `df`：删除文件
- `command` + `\`：左右分屏，在设置中的快捷键面板，搜索 `左右拆分` 或 `split vertically`
- `command` + shift + `\`：上下分屏，在设置中的快捷键面板，搜索 `上下拆分` 或 `split horizontally`
- `command` + `shift` + `p`：搜索命令
- `command` + `shift` + `t`：恢复关闭的⽂件

可以看出，一如上一节的 vim 映射，我们的快捷键、vim 等配置更多是尽可能和 VScode 保存一致，这样可以减少我们使用 Obsidian 的心智负担，并且让我们使用得更顺手，而这样配置后，使用起来就非常丝滑了。