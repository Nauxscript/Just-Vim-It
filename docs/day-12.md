# 进入包围圈：感受 vim-surround 神器的威力

  在[第六天](./day-6.md)的训练中，我们学习了文本对象，学习了如何通过 `i` `a` 进行对一些符号、标签的内部内容进行修改和删除；但有一些时候，我们可能是需要操作包裹着这些内容的符号本身；而这就今天的主角 ——— vim-surround 插件的核心功能。

## vim-surround

  vim-surround 是关于“包围”的插件：如被括号、括号、引号、XML 标签等等包围。该插件提供映射，可以轻松地成对删除、更改和添加此类包围着内容的符号。它的命令是 `s` (请勿与删除并进入 insert mode 的 `s` 或 vim-sneak 的 `s` 混淆，这两个是 operator，而 vim-surround 的 `s` 更像是一个 motion，虽然我不确定这样说准不准确)。

### 命令示例

以下是 [vim-surround](https://github.com/tpope/vim-surround) 插件 github 仓库 readme 中举得例子；并非我想偷懒，而是官方举得例子实在是已经非常详尽：

我们有如下字符串，光标在它内部时 normal 模式下使用 `cs"'`
```
"Hello world!"
```

则会变成以下这样：
```
'Hello world!'
```

这时我们使用 `cs'<q>`，就变成了：
```
<p>Hello world!</p>
```

再使用 `cst"`，就回到最初的模样（疑惑为什么是 `t` 的人需要去复习一下[前面](./day-6.md#文本对象)了）：
```
"Hello world!"
```

删除包裹的符号，我们使用 `cs"`：
```
Hello world!
```

如果我们把光标移到 `hello` 单词上，输入 `ysiw]`，则变成这样： 
```
[Hello] world!
```

如果我们要把中括号变成花括号并且单词和符号之间要有空格，我们可以使用 `cs]{` （如果使用 `}` 则添加的花括号是没有空格的，`)` `]` 同理）：
```
{ Hello } world!
```

这时，我们还可以通过 `yssb` 或 `yss)` 来给整行添加包裹：
```
({ Hello } world!)
```

输入 `ds{ds)` 去掉所有包裹：
```
Hello world!
```

对于前端开发来说，他是一个很有用的插件；比如我们现在有一个这样的标签：
```html
<p>hello world</p>
```

这时我们使用 `V` 进入 linewise visual model（行内可视化模式），再键入 `S<div class="important">`，就变成了：
```html
<div class="important">
<p>hello world</p>
</div class="important">
```

在我们日常开发中，尤其是写 html 时，这非常好用。而且我们还可以使用 `.` 来重复执行 `ds` `cs` `yss` 这类的指令，一如我们之前提到那样。

:::tip one more thing
练习群的朋友提到还有一个用法，即配合 `t` 来出来 xml 或 html 的标签包裹的场景，比如：

```html
hello
```

在 hello 中输入 `ysiwt` + `div`，则变成了：

```html
<div>hello</div>
```

再输入 `ysst` + `div`，就成了：
```html
<div><div>hello</div></div>
```
:::
