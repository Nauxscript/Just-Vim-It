# Obsidian 编辑常用命令

在使用 Obsidian 的过程中，我们不免要输入一些常用的 markdown 语法，虽然语法简单，但相对也比较琐碎，而 Obsidian 提供了一下快捷键让我们可以快速地完成这些琐碎的输入过程。

## 常用命令

- `command` + `e`：切换编辑 / 预览模式
- `command` + b：加粗选中文本，即在选中文本前后插入 `**`
- `command` + i：使选中文本变为斜体，即在选中文本前后插入 `*`
- `command` + k：使选中文本变为链接语法，即 `[选中文本](链接)`
- `command` + -：使所在行变为无序列表，即在所在行最前添加 `-`，需配置；在设置中的快捷键面板中搜索 `toggle bullet list（无序列表）`，把对应项设为该快捷键即可 
- `` ` ``：行内代码块，键入 `` ` `` 即可
- `` ``` ``：多行代码块，键入 `` ``` `` 即可 
- `command` + `/`：注释选中代码
- `command` + `enter`：添加 todo 元素，建议该功能置空，这样可以使用 command + enter 新建一行，和 VScode 或其他软件保持一致
- `option` + `↑` / `↓`：上下移动行，需配置；搜索 `move line down（与下一行互换）` / `move line down（与上一行互换）` 与 VScode 保持一致
- `f2`：更改当前文件名
- 标签折叠：在 vim 中，默认的折叠代码操作为：
 
  + `zM`：折叠全部代码
  + `zR`：展开全部代码
  + `za`：展开 / 折叠当前行代码
  
  为了保持一致的操作，我们可以通过 `.obsidian.vimrc` 添加映射配置:

    ```shell
    exmap foldAll obcommand editor:fold-all
    nmap zM :foldAll
    exmap unfoldAll obcommand editor:unfold-all
    nmap zR :unfoldAll
    exmap toggleFold obcommand editor:toggle- fold
    nmap za :toggleFold
    ```
  通过这样的配置，我们就可以使用 vim 折叠代码的命令折叠 Obsidian 中的各类标签了。