# 如虎添翼：什么是 zellij

## 安装

zellij 的安装方式有几种，一般来说 MacOS 推荐使用 Homebrew 来安装，通过 `brew install zellij` 即可安装（个别朋友如果出现安装卡住或出错，可以换源试试）；

安装后在命令行工具键入 `zellij` 即可启动 zellij（有点像废话），但这个命令有点长，正如 `lazygit` 命令一样，我们可以配置一个别名来方便启动 zellij；

```BASH
# 编辑 .zshrc 
vi ~/.zshrc
```

添加 `alias zj="zellij"`，保存后退出命令行重新打开，测试使用 `zj`，如果可以启动 zellij 即为配置成功。

## 窗格操作

## 标签页操作