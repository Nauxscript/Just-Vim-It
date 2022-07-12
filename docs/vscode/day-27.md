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

虽然 VSpaceCode 提供一整套的规则，但每个人都有自己的一些个人习惯和喜好，而 VSpaceCode 当然也提供了重写和新增命令的方式。

### 重写已有命令

VSpaceCode 提供了个配置项 `vspacecode.bindingOverrides`，通过这个配置可以重写已有的一些命令；比如我们我们触发 VSpaceCode，可以看到 `g` 选项为 Git 的操作，`g` 里面的 `s` 选项为 `status`，即 Git 查看状态命令；而如果我们要把这个命令改为跳转到某行（go to line）的功能，我们可以在 VSCode 的 `setting.json` 中如此配置：

```json
"vspacecode.bindingOverrides": [
  ...
  {
    "keys": "g.s", // 指 g 选项中的 s 命令
    "name": "Go To Line", // 在弹出的 VSpaceCode 的 g 中的 s 选项中显示的名称
    "type": "command", 
    "command": "workbench.action.gotoline", // VScode 跳转行的命令 id
  }
  ...
]
```

这样，原来的 `g` 中的 `s` 对应的功能就被重写了。

而如果我们要重写整个 `g` 的模块也是类似：

```json
"vspacecode.bindingOverrides": [
  ...
  {
    "keys": "g", // 指要重新 g 选项
    "name": "Go...", // 在弹出的 VSpaceCode 的 g 选项中显示的名称
    "type": "bindings", // 对应下面的 bindings，即 g 命令下的子级命令
    "bindings": [
      {
        "key": "g", // 指 g 选项的子级有一个 g 命令
        "name": "Go To", // 在弹出的 VSpaceCode 的 g 中的 g 选项中显示的名称
        "type": "command", 
        "command": "workbench.action.gotoline", // VScode 跳转行的命令 id
      }
    ] 
  }
  ...
]
```

这样配完后，我们激活 VSpaceCode 时，它的 `g` 对应就是我们的新功能 `Go...`，进入该选项里面只有一个子命令 `g`，对应 `Go To`。

### 增加命令

增加命令也是和重写类似，VSpaceCode 提供的配置字段为 `vspacecode.bindings`，而且我们如果增加的命令是和已有的命令的绑定是相同的，会直接覆盖，所以上面重新 `g` 模块也可以这样：

```json
"vspacecode.bindings": [
  ...
  {
    "key": "g", // 指要重新 g 选项；注意！这里的字段是 key 而非 bindingOverrides 配置的 keys
    "name": "Go...", // 在弹出的 VSpaceCode 的 g 选项中显示的名称
    "type": "bindings", // 对应下面的 bindings，即 g 命令下的子级命令
    "bindings": [
      {
        "key": "g", // 指 g 选项的子级有一个 g 命令
        "name": "Go To", // 在弹出的 VSpaceCode 的 g 中的 g 选项中显示的名称
        "type": "command", 
        "command": "workbench.action.gotoline", // VScode 跳转行的命令 id
      }
    ] 
  }
  ...
]
```

这样的效果也是和上面一样。

:::tip 避免 VSpaceCode 的弹窗
有的人可能觉得 VSpaceCode 弹窗不好，其实可以用 vim 实现对应的功能，它的原理和 vim 的 `<Leader>` 键是一样的。至于配置的喜好因人而异，大家也可以参考 [VSpaceCode 官方推荐的配置](https://github.com/VSpaceCode/VSpaceCode/blob/vscode-vim/settings.json)。
:::