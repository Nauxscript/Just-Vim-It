# 去其糟粕：Debug the Bug

有人统计过，一个程序员 50% 以上的工作时间都没有编程，而他们有一半的编程时间都花在 debug 上。而这 50% 的时间里面，可能有 20% 的时间，我们是在移动鼠标的路上；今天我们进来了解一下如何通过键盘快捷键来打一场漂亮的~~翻身仗~~断点。

## 基础操作

- `f5`：开始 Debug 或 跳出当前断点；比如在一个 JavaScript 脚本文件中键入 `f5`，即可进入 Debug 模式；而如果是已经在 Debug 过程中了，则是 **step out**；
- `shift` + `f5`：停止 Debug；
- `shift` + `command` + `f5`：重新开始 Debug，比如正在 Debug 时不小心跳过了某个应该停止的断点，则可以使用该组合键快速重新 Debug；由于 `f5` 比较远，可以在 VScode 快捷键面板中改成 `shift` + `command` + `0`；其对应 VScode 命令为 `workbench.action.debug.restart`；
- `f9`：为当前光标所在行添加断点 / 取消当前光标所在行的断点；和上面同理可以改键为 `shift` + `command` + `9`；其对应 VScode 命令为 `workbench.action.debug.toggleBreakpoint`
- `f10`：**step over**；同理我们可以改为 `command` + `'`；其对应 VScode 命令为 `workbench.action.debug.stepOver`
- `f11`：**step into**；同理我们可以改为 `shift` + `command` + `'`；其对应 VScode 命令为 `workbench.action.debug.stepInto`

:::tip step into / step over / step out
step into：单步执行，遇到子函数就进入并且继续单步执行（简而言之，进入子函数）；

step over：在单步执行时，在函数内遇到子函数时不会进入子函数内单步执行，而是将子函数整个执行完再停止，也就是把子函数整个作为一步。不存在子函数的情况下是和 step into 效果一样的（简而言之，越过子函数，但子函数会执行）；

step out：当单步执行到子函数内时，用step out就可以执行完子函数余下部分，并返回到上一层函数。
:::

:::tip 使用 VSpacecode 插件进行 debug
如果有安装了 VSpacecode 插件的朋友，可以在激活该插件时看到其 `d` 命令就是对应了 Debug 的一系列操作。所以不想记忆上面提到的快捷键的朋友可以直接使用 VSpacecode 达到对应的操作。
:::
