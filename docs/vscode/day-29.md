# 返璞归真：终端的基本操作

## 常用操作

- `command` + `j` / `ctrl` + `` ` `` ：这两个命令都可以打开终端；区别是前者打开的是终端所在的底部面板，但因为该面板还有不同的 tab 如输出窗、调试窗等，如果在此之前你切换到了其他 tab，通过 `command` + `j` 打开面板时还是会停留在之前的 tab；而 `ctrl` + `` ` `` 则是打开底部面板并切换到终端 tab；所以后者更好用；但由于 `` ` `` 比较难按，我们可以给配置为 `ctrl` + `,`；对应命令 `workbench.action.terminal.toggleTerminal`
- `command` + `k`：当终端内容过多时可以该命令清屏
- `command` + `\`：对当前终端分屏，适合同时要运行不同的命令的情况
- `option` + `command` + `↑` / `←`：分屏后多屏状态下切换到上一屏，对应命令 `workbench.action.terminal.focusPreviousPane`
- `option` + `command` + `↓` / `→` 分屏后多屏状态下切换到下一屏，对应命令 `workbench.action.terminal.focusNextPane`

可以发现，vscode 切换分屏的组合键是比较复杂的，再因为我们方向键是映射过的，这样一来我们要同时按四个按键；所以，改键势在必行，我们可以把 `command` + `[` / `]` 组合键添加为上面的切换屏的功能，这样一来就方便了。

- `shift` + `option` + `q`：关闭终端，这个命令需要自己配置；对应命令 `workbench.action.terminal.kill`
- `ctrl` + `shift` + `` ` ``：新建终端，但同样按地难受；我们可以添加个组合键 `shift` + `option` + `n` 来达到这个功能；对应命令 `workbench.action.terminal.new`
- `shift` + `command` + `[` / `]`：对于新建了多个终端（非拆分的）时切换不同终端

:::tip 拆分终端和新建终端
感觉区别不大，都是可以让我们对一个项目同时进行多个命令，比如一个用来跑服务，一个用来做其他命令；
唯一感觉有实质区别的就是新建可以建不同的终端，如一个是 `bash` 终端，一个是 `zsh` 终端；
也许在多工作区的情况下有不同（not sure）；
如果有朋友了解的请告知我，十分感谢！
:::

## 如何打开外部终端

`shift` + `command` + `c`
