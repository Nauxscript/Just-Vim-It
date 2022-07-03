# 包罗万键：VSpaceCode 插件

训练进行到这里，大部分日常的使用场景和功能我们基本都配置了对应的一些快捷键，或者知道如何不通过鼠标去达到目的；而今天我们来了解学习 VSpaceCode 插件，通过它，可以让我们的组合键覆盖得更广阔全面。至于怎么个覆盖，装完插件再慢慢道来。

:::tip VSpaceCode 与 Whichkey
二者是同一家出品，而且功能上基本一致；VSpaceCode 插件主要面向 Vim 使用者；而 Whichkey 更适用于普通用户;
而且他们的[文档](https://vspacecode.github.io/docs/)也已经合并在一起。
:::

## 安装及初始配置
[点击直达下载](https://marketplace.visualstudio.com/items?itemName=VSpaceCode.vspacecode)或在 vscode 的拓展中搜索 `VSpaceCode` 安装；

安装完后，查看[文档](https://vspacecode.github.io/docs/#manual-configuration-optional)，可以发现文档中提到了两个配置文件 [`setting.jsonc`](https://github.com/VSpaceCode/VSpaceCode/blob/master/src/configuration/settings.jsonc) 与 [`keybindings.jsonc`](https://github.com/VSpaceCode/VSpaceCode/blob/master/src/configuration/keybindings.jsonc)；分别对应了 vim 中绑定 VSpaceCode 的激活命令以及在 vscode 中编辑窗之外的其他窗口 VSpaceCode 的激活命令；当然除了激活命令之外，我们还可以看到文档的这两个文件里面都配置了很多命令，其实都是一些扩展了其他功能的命令，我们暂时不需要，所以可以先不配置；而可以看到，两个文件中默认的激活命令是：

```jsonc
// keybinds.jsonc
{
  "key": "space",
  "command": "vspacecode.space",
  "when": "activeEditorGroupEmpty && focusedView == '' && !whichkeyActive && !inputFocus"
},
```

```jsonc
// setting.jsonc
"vim.normalModeKeyBindingsNonRecursive": [
  {
    "before": ["<space>"],
    "commands": ["vspacecode.space"]
  },
],
"vim.visualModeKeyBindingsNonRecursive": [
  {
    "before": ["<space>"],
    "commands": ["vspacecode.space"]
  },
]
```

可以看到，默认的配置是使用空格激活；但是我们配置的 vim 的 `<Leader>` 也是 `space` 键（如果你和我一样的配置，如果不是则无需接下来的改键），这时候我们就要重新配置激活按键，而我改成了 `space` + `;`，这样的按起来也比较顺手。如下：

```jsonc
// keybinds.jsonc
{
  "key": "space+;",
  "command": "vspacecode.space",
  "when": "activeEditorGroupEmpty && focusedView == '' && !whichkeyActive && !inputFocus"
},
// Trigger vspacecode when sidebar is in focus
{
  "key": "space+;",
  "command": "vspacecode.space",
  "when": "sideBarFocus && !inputFocus && !whichkeyActive"
},
```

```jsonc
// setting.jsonc
"vim.normalModeKeyBindingsNonRecursive": [
  {
    "before": ["<space>", ";"],
    "commands": ["vspacecode.space"]
  },
],
"vim.visualModeKeyBindingsNonRecursive": [
  {
    "before": ["<space>", ";"],
    "commands": ["vspacecode.space"]
  },
]
```

这样我们就可以愉快地使用 VSpaceCode 了。

现在我们激活它，会在 vscode 上面弹出输入框，并且在待选列表中有很多功能，每条记录都有一个符号前缀，在键盘上输入该前缀，就可进入该功能；比如激活插件后我们输入 `g`，则进入了 `git` 的功能模块中，则会列出可执行的操作，继续点击对应操作的前缀，则可以执行该操作；这就是 VSpaceCode 的使用逻辑。简单来说就是我们可以通过所见即所点的模式进行纯键盘的操作（和 chrome 的 vim 插件 vimium-c 一样的思想）。

## 修改原有配置

## 自定义

:::tip 拓展

:::