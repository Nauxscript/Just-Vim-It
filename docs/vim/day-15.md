# 只手遮窗：窗口管理大法

  在开发中，我们可能需要同时打开多个编辑窗口，二分屏、三分屏甚至更多，这时候在不同的窗口中切换焦点也就是一个大需求，而 vim 和 vscode，都有提供一套多编辑窗口的管理方法，任君选择。
  
## vim 的窗口管理

  ### 新建窗口
  - `control` + `w` + `v`：在当前窗口的左边或右边新建窗口
  - `control` + `w` + `s`：在当前窗口的上边或下边新建窗口
    
  ### 窗口切换
  - `control` + `w` + `h` `j` `k` `l`：切换到上 / 下 / 左 / 右方向的窗口
  - `control` + `w` + `v`：打开多个窗口时，在不同的窗口间相互切换，如只有两个窗口时，则在两个窗口间互相切换

  ### 关闭窗口
  - `control` + `w` + `c`：关闭当前窗口
  - `control` + `w` + `v`：保留当前窗口，关闭其他所有窗口

## vscode 的窗口管理
  可能有些人（包括我）会觉得 vim 的窗口管理快捷键比较繁琐，尤其是使用过 vscode 的窗口管理快捷键的小伙伴，为了让我们管理得更顺手，我们可以结合 vscode 自身的快捷键再加上一些扩展的键位映射，达到和 vim 的窗口管理快捷键一样的效果。如下：

  ### 新建窗口

  - `command` + `\`：在当前窗口的左边或右边新建窗口
  - `command` + `control` + `\`：在当前窗口的上边或下边新建窗口

  ### 窗口切换
  
  - `shift` + `control` + `h` `j` `k` `l`：切换到上 / 下 / 左 / 右方向的窗口 (需要有将 `control` + `h` `j` `k` `l` 映射为方向键)，并且在 vscode 的 `keybindings.json` 中添加如下映射,映射其实是把 `shift` + 方向键映射为 vim 的窗口切换键了：

  ```json
  {
    "key": "shift+left",
    "command": "vim.remap",
    "when": "vim.mode == 'Normal'",
    "args": {
      "after": ["<c-w>", "h"]
    }
  },
  {
    "key": "shift+right",
    "command": "vim.remap",
    "when": "vim.mode == 'Normal'",
    "args": {
      "after": ["<c-w>", "l"]
    }
  },
  {
    "key": "shift+up",
    "command": "vim.remap",
    "when": "vim.mode == 'Normal'",
    "args": {
      "after": ["<c-w>", "k"]
    }
  },
  {
    "key": "shift+down",
    "command": "vim.remap",
    "when": "vim.mode == 'Normal'",
    "args": {
      "after": ["<c-w>", "j"]
    }
  }
  ```
    
  :::info 多嘴一句
  感觉 `shift` + `control` + `h` `j` `k` `l` 和 `control` + `w` + `h` `j` `k` `l` 其实是差不多的，改不改区别不大。
  :::


  ### 关闭窗口
  - `command` + `w`：关闭当前窗口
  - `command` + `k` + `w`：保留当前窗口，关闭其他所有窗口 

:::tip 小提示
  在vscode中如果关闭有未保存内容的窗口时，会弹出对话框；
  这时如果按 `enter` 键，即为 “保存”， 
  按 `space` 键，是为 “不保存”。
:::