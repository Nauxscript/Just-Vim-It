# 众神之地：初识命令行界面操作

众所周知，命令行工具，是操作系统露出的一个让用户触摸它的的灵魂的一片肌肤；与这片肌肤的亲密接触，你才能感受它灵魂深处的波涛汹涌；一个程序员不会使用命令行工具，就像西方人不知道耶路撒冷。虽然接下来这部分并不会教你怎么写命令行命令，但会教会你怎么在前端开发这种有限的 `润射` 使用中，把命令行工具玩出无限的花来（我瞎说的，如果你不认真去学习命令行的相关知识，你快捷键用得再 6 也没有用）。

## 常用命令行工具

常见的一下命令行工具（随便搜索列举一些比较受欢迎有知名度的，没有都体验过；由于没有使用过 Linux 系统，顾只推荐 MacOS 和 Window）：

- Terminal：MacOS 自带命令行；
- iTerm2：MacOS & Window；
- Warp：MacOS；
- Tabby：MacOS；
- Mobaxterm：MacOS & Window；
- Window Terminal：Window，(笔者还使用 Window 时用的就是它，还不错，颜值也 ok)；
- ...

[iTerm2](https://iterm2.com/) 作为 MacOS 端最受欢迎的命令行工具，提供了许多强大且好用的功能，可以说大部分人对于一款命令行工具的大部分需求，它都可以满足；所以命令行这一部分的训练是围绕着 iTerm2 来展开的；但又由于笔者使用的是 Warp，所以在每一章训练中会同步添加训练中介绍的 iTerm2 的功能对应的 Wrap 中的快捷键命令。

## iTerm 及其界面操作

安装 iTerm 极其简单，我们可以通过其官网链接下载，当然，MacOS 更推荐用 Homebrew 安装；通过 `brew install iterm2 --cask` 安装后，即可启动。

:::tip iTerm2 窗口尺寸
初始安装的 iTerm2 的窗口尺寸可能会比较小（笔者的就是），可以在打开 iTerm2 后通过顶部的 `iTerm2 > Preference` 或 `command` + `,` 打开设置窗口，在 `Profiles` 的下图位置中可以设置。

![image-1](https://raw.githubusercontent.com/Nauxscript/Just-Vim-It/master/docs/public/images/day-38-1.png)
:::

### 分屏

- `command` + `d`：左右分屏；
- `shift` + `command` + `d`：上下分屏；
- 切换分屏：
  + `command` + `option` + [方向键]
  + `command` + `[` / `]`

### 标签页

- `command` + `t`：新建标签页；
- `command` + `w`：关闭标签页；
- `command` + [数字] / `command` + [方向键]：切换标签页；
- `shift` + `command` + [方向键]：移动标签页；

由于 MacOS 的在快捷键上的统一性，可以发现标签页的快捷键其实和 Chrome 、VScode 的可以说是一模一样，只要习惯了这一套快捷键，在大部分 MacOS 上带有标签页的软件中你都可以使用。

:::tip `command` + `enter` 全屏问题
当我们下载好 iTerm2 并在它内部使用 vim 时，你可能会发现当我们想用 `command` + `enter` 另起一行时，会变成全屏的效果（笔者遇到这个情况时一脸懵逼，完全不明白为什么它要把这个快捷键设置为全屏功能），为了使用方便，我们可以通过 `iTerm2 > Preference > Keys` 设置：


![image-2](https://raw.githubusercontent.com/Nauxscript/Just-Vim-It/master/docs/public/images/day-38-2.png)
:::
## Warp 界面操作

[Warp](https://www.warp.dev/) 是命令行工具中的新秀，号称“为 21 世纪打造的命令行工具”。最近笔者在使用它，确实非常不错；颜值不错，皮肤什么的都可以调节，也可以跟随系统深色模式；功能不错，一些好用的功能别的工具可能要插件，但它基本原生支持，什么命令补全什么的；还有 Ai 命令识别等功能，确实值得一试。

以上的功能对应的快捷键和 iTerm2 基本一致，除了**不支持**：

- `command` + [方向键]：切换标签页；
- `shift` + `command` + [方向键]：移动标签页；

在 Wrap 中，只要键入 `command` + `p` 即可调出命令搜索面板，可以根据描述搜索所有的快捷键命令。