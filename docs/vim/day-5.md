# 渐入佳境：认识可视化模式
## 可视化模式

  - 字符可视化模式（Characterwise visual mode）：文本选择是以字符为单位，命令 `v` （命令模式下）
  - 行可视化模式（Linewise visual mode）：文本选择是以行为单位，命令 `V` （命令模式下）
  - 块可视化模式（Blockwise visual mode）：文本选择是以块为单位（非代码块，指一个矩形区域内的文本，多光标），命令 `Ctrl + v` （命令模式下）

通过以上三种方式进入可视化模式后，底部会显示 `-- visual --` 字样（vscode中）；对于不同的可视化模式，可以直接输入另外两种可视化模式的命令直接切换模式，如 `v → V` 可以直接从字符可视化模式切换到行可视化模式，如此类推。

  **退出命令：**
  -  `esc` / `Ctrl + [`：通用退出命令
  - `v` / `V` / `Ctrl + v`：使用某个命令进入了可视化模式则可以通过相同的命令退出，但是由于不同的可视化模式可以直接切换，所以如果切换多了自己可能也忘记是在哪个模式下了，所以推荐用通用退出命令

## 使用

  - `v` / `V` / `Ctrl + v` + 范围 / 位置：如 `v + e` 则是选中到单词结尾，诸如此类，可以搭配前面提到的 `w` `b` `h` `j` ... 等等的命令
  - 可视化模式下 `o`：切换光标位置，此时会在选中区域的头和尾之间切换

## 技巧

  - 多行修改：如果我们要统一修改多行的内容，可以用 `Ctrl + v` 选中多行后，通过 `I` 或 `A` 进行前插入或后插入 
  - 通过可视化模式复制的内容，其实是暂存在了 vim 的寄存器中（`d` `c` 等操作其实也是，所以在 `d` 后，你也可以用 `p` 粘贴出来），而我们的 `command + c` 复制的内容则和 vim 无关，也就意味着，我们可以通过这两种不同的指令同时复制不同的内容而不会冲突，在某些场景下可以起到不错的辅助

## 拓展

  还记得我们前面配置 `H` 和 `L` 来快速移动光标到行首行尾吗，在可视化模式中你会发现无法使用如 `vL` `vH` 这样的命令，这是因为我们 `H` `L` 的映射是在 normal mode 下的，我们需要在 vscode 的  `setting.json` 中添加如下配置：

  ```json
  "vim.visualModeKeyBindings": [
    {
        
      "before": ["H"],
      "after": ["^"]
    },
    {
      "before": ["L"],
      "after": ["g", "_"]
    },
    {
      "before": ["J"],
      "after": ["5", "j"]
    },
    {
      "before": ["K"],
      "after": ["5", "k"]
    }
  ],
  ```
## 小练习

```
1. 复制以下单词：

javascript

python

java

swift

2. 把以下所有句子的第一个单词改为 Just Vim It

this is a simple easy vim tutorial
this is a simple easy vim tutorial
this is a simple easy vim tutorial
this is a simple easy vim tutorial
this is a simple easy vim tutorial
this is a simple easy vim tutorial
this is a simple easy vim tutorial
this is a simple easy vim tutorial
this is a simple easy vim tutorial

```