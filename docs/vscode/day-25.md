# 以一打十：Snippet 代码片段

你是否厌倦了每次新建个 vue 文件、react 文件是每次重复输入的 `template`、`script`、`style`，是否厌倦了每次命名个函数来来去去地敲 `function shitInput() {}` ；诸如此类的这种重复输入一天的~~屎山~~ coding 下来，重复写的内容占据了相当一部分的时间；都 21 世纪了，我们能不能把这种重复的劳动浪费的时间节省下来摸鱼呢？那，就要看今天的主角 ———— Snippet 了！

## Snippet

Snippet 即代码片段；在 vscode 中我们可以利用代码片段通过代码提示快速地输入固定的一些代码模版，方便我们输入一些重复、常用的代码片段。

## vscode Snippet 插件

vscode 中常用的前端开发 snippet 插件有：

- [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
- [Vue 3 Snippets](https://marketplace.visualstudio.com/items?itemName=hollowtree.vue-snippets)
- [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)

当然，你也可以根据自己的需求安装其他如 `html`、`css`、`markdown`、`python` 等语言的 snippet 插件。

## 常用 Snippet 指令

由于 vscode 会识别我们输入的字符进行代码提示，当我们安装了 snippet 插件后，一些代码块则会在我们输入到对应简写文本时在代码提示中出现以供选择；当我们安装了上面提到的几个插件后，会有如下一些简写提示代码指令：

- `imp`：对应 `import second from 'first'`
- `imd`：对应 `import { second } from 'first'`
- `fn`：对应创建一个函数
- `log`：对应 `console.log()`
- `vue`：对应创建 `vue` 文件模版
- `anfn`：`对应创建一个箭头函数`
- `rp`：对应 `return new Promise()`

比如使用 `imp` 时，在选择了代码提示的代码块后，会输出 `import second from 'first|'`，`|` 代表当前光标所在位置，且此时 `first` 处于选中状态，我们可以直接键入要引入的内容所在的包名或路径；输入后（或不输入也没有关系）我们按下 `tab`，则光标会跳到 `second|`，且此时它也是处于选中状态，我们就可以输入导入的名称；其他简写也是如此。

:::技巧
如上面提到，`tab` 可以在代码块的占位光标中切换；另外一种情况是：有时候我们输入文本时，比如 `imp`，输入后可能不小心移动了光标或者切换了窗口，导致代码提示没有了，此时我们可以通过 `command` + `.`（用 `ctrl` + `space` 也可以，不过这个是 MacOS 默认输入法切换组合键，所以一般不用这个）重新使代码提示框显示。
:::

## 配置自己的 Snippet

既然插件可以配置一些供我们选择的代码块，那就意味着我们也可以自己配置专属自己的代码块；因为自己永远是最了解自己的。比如我在日常调试中常常需要输出一些变量、描述等内容来辨别一些逻辑是否正确。可是在公司的~~屎山~~项目中输出的除了我自己写的，还有很多其他人的输出，我常常无法找到我添加的输出。为此我在使用 `console.log()` 时会通过设置颜色代码来让我自己的输出更显眼。但是每次都手敲颜色设置，就非常麻烦；既然如此，我就为自己配置了一个专属的 color log snippet；

首先我们[打开命令查找框](./day-21.md#查找命令)，输入 `user snippet`，即查找当前用户自定义的 snippet，会有配置用户代码片段（configure user snippet）选项；选择它，会有如下选项：

- 新建全局代码片段文件
- 新建当前工作区的代码片段文件
- 为特定特定语言配置代码块；如 `javascript`、`c#` 等等

如果你已经配置过自定义的代码块，也会显示对应的配置文件名；此时我们选择第一个；输入要生成的文件名后，就进入了配置文件中。vscode 官方 snippet 配置规则文档在[这里](https://code.visualstudio.com/docs/editor/userdefinedsnippets)。于是乎，我根据上面的自己的需求，配置了一个自己的 snippet：

```json
{
  "color log": {
		"scope": "javascript,typescript",
		"prefix": "ccl",
		"body": [
			"console.log('%c $1', 'color: ${2|red,blue,green|}')",
			"$3"
		]
	}
}
```

其中，`$` + [数字] 是指按下 `tab` 时光标跳转的顺序；而 `${[数字]|[文本],[文本],[文本]|}` 是指光标跳到该位置时除了输入也可以直接选择提供的 [文本] 选项；所以这个 snippet 的效果如下：

![color log](https://pic.imgdb.cn/item/62bf024d1d64b070667113c4.gif)

置于其他的一些灵活配置，大家可以直接看文档，都有详细说明。