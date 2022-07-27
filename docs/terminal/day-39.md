# 如虎添翼：什么是 zellij

## 安装

zellij 的安装方式有几种，一般来说 MacOS 推荐使用 Homebrew 来安装，通过 `brew install zellij` 即可安装（个别朋友如果出现安装卡住或出错，可以换源试试）；

安装后在命令行工具键入 `zellij` 即可启动 zellij（有点像废话），但这个命令有点长，正如 `lazygit` 命令一样，我们可以配置一个别名来方便启动 zellij；

```shell
# 编辑 .zshrc 
vi ~/.zshrc
```

添加 `alias zj="zellij"` 到末尾新一行，保存后退出命令行重新打开，测试使用 `zj`，如果可以启动 zellij 即为配置成功。

:::tip 乱码问题
安装完进入 zellij 后，可能有部分朋友会发现 zellij 的底部操作提示栏有些地方显示一些问号，这时因为一些符号在当前符号集中无法显示，可以在打开 iTerm2 后通过顶部的 `iTerm2 > Preference` 或 `command` + `,` 打开设置窗口，在 `Profiles` 的下图中的 `Use built-in Powerline glyphs` 勾上即可。

![image-1](https://raw.githubusercontent.com/Nauxscript/Just-Vim-It/master/docs/public/images/day-39-1.png)
:::

## 使用

zellij 的使用哲学简单易懂，和 VSpaceCode 插件很类似。进入 zellij 后，可以看到底部栏有一些键位以及其对应的功能类；如 `g` 为 `LOCK`，`p` 为 `PANEL`，`t` 为 `TAB` 诸如此类；比如我们有增加一个标签页，只需要使用 `Ctrl` + `t`，此时底部 `TAB` 选项会高亮，下方会出现一系列的按键提示，如 `n` 为 `New` 即 新建，`x` 为 `close` 即关闭等等，我们这时在键入一个 `n`，即可新建一个标签页，然后在按下 `enter`，即可聚焦当前标签页，进行输入命令等；如果要切换标签页，也是类似：先进入对应的 TAB 功能类，然后使用 `hjkl` 或方向键可以切换；总的来说其公式是：

- `Ctrl` + [功能类] + [功能]

了解了这个，我们就可以去探索 zellij 的功能了。

### 窗格操作

昨天的训练我们学习了窗格的一系列操作；同样的，我们也可以用 zellij 来实现相同的操作：

- `ctrl` + `p` + `r`：左右分屏；
- `ctrl` + `p` + `d`：上下分屏；
- 切换分屏：
  + `ctrl` + `p` + [方向键]：切换对应位置的窗格
  + `ctrl` + `p` + `p`：切换到下一个窗格

### 标签页操作

这时对应的一些标签页操作：

- `ctrl` + `t` + `n`：新建标签页；
- `ctrl` + `t` + `x`：关闭标签页（如果当前只有一个标签页则会退出 zellij）；
- `ctrl` + `p` + [方向键]：切换标签页；

其实以上这些操作都不需要记忆，只要记得上面提到的公式，不熟练的时候可以看看底部的文字提示，很快就可以练成肌肉记忆了。