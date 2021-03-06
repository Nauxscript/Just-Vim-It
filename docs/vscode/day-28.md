# 止言又欲：Git 神器 lazygit

先来看看官方的一段描述（意译 & 自译，不喜勿喷）：

:::tip lazygit
你以前肯定听说过：Git is 抛瓦否！但如果它的一切都很几把难用的时候，再抛瓦否又有什么用呢？
交互式重新建立基地需要你在你的编辑器中编辑一个沙雕的 TODO 文件？你他妈在开玩笑吗？
要暂存一个文件的部分更改，还要在命令行里面手动处理每个代码块？
如果一个块不能被进一步拆分，但又包含不想暂存的代码，你必须手动编辑一个莫名奇妙的补丁文件？这去你妈的是在玩我吧？!
有时切换分支的时候，突然叫我暂存更改，但在切换完并取消暂存后，根本没有任何代码冲突！直接签出分支就是了！
你 他 妈 的 一 定 是 在 玩 老 子 ！

如果你像我一样只是个普通人，而且你厌倦了听着 Git 有多牛逼实际在你用它时是像吃屎一样恶心时，lazygit 可能非常适合你。

:::

可以看出，[lazygit](https://github.com/jesseduffield/lazygit) 是为了可以让我们“懒惰”地使用 Git 的一个工具；它是基于命令行 UI 的，支持全键盘操和鼠标操作，无论是全键盘党还是普通使用者，都适合。它帮我们免掉了许多输入繁琐命令的麻烦，给我们提供了一个清爽、简洁以及极客风格的方案。

## 安装及配置

Mac 下推荐使用 brew 进行安装；参考[官方安装方法](https://github.com/jesseduffield/lazygit#Homebrew)。

:::warning brew install 报错
如果 brew 使用的是国内的源，有可能会导致安装时出错，比如依赖的包没有装上（我就是这样的情况），建议切回官方的源。
:::

## 基本操作
- `lazygit`：安装 lazygit 后在 git 的仓库目录下命令行键入 `lazygit` 即可打开 lazygit，也可以在 `~/bash_profile` 中添加别名 `lg`，即添加新一行 `alias lg='lazygit'`；

:::warning 注意！
修改 bash_profile 文件前最好先备份该文件！尤其不知道这是什么东西的朋友！
:::

- `q`：退出 lazygit；
- `h` / `l`：在左侧由上至下五个功能区焦点切换，也可以通过数字键 1 ~ 5 来切换对应功能区；
- `j` / `k`：功能区内单条记录焦点切换；如 commit 记录焦点切换，分支焦点切换等；
- `[` / `]`：功能区内有多个标签页的，可以通过这两个命令左右切换；如分支区的 `Local Branches` / `Remotes` / `Tags` 这几个标签页的切换；
- `?`：如同 Vimium-c 一样，键入 `?` 会弹出当前功能区的所有可用命令以及其功能描述（相同的一个命令，如 `a`，在不同的功能区其对应的功能也不一样）；

## Git 常用操作

- add：左栏切换到第二栏 Files 栏中，如果是对单个文件进行暂存可以聚焦到对应文件后按下 `space` 键即可；而如果是要对所有文暂存则可以按 `a`；而如果当前文件或者所有文件都已暂存，这时使用 `space` / `a` 会变回为未添加到暂存的状态；
- commit：左栏切换到第二栏 files 栏中，按 `c` 会弹出输入框要求填入提交信息，输入后 `enter` 即可提交已经暂存的更改；如果是需要添加详细可以使用 `C`；
- reset：左栏切换到第四栏 Commits 栏中，切换聚焦需要回退到的那个提交上，键入 `g`，会有弹框可选择 `reset` 的 `--soft` / `--mixed` / `--hard` 参数，`enter` 即可选择；
- pull：在任意位置都可通过 `p` 进行代码拉取，会拉取左栏第三栏中的 Local Branches 的分支列表中的带星号的分支的远程分支代码；
- push：在任意位置都可通过 `P` 进行代码推送，会推送代码到左栏第三栏中的 Local Branches 的分支列表中的带星号的分支的远程分支中；
- discard：需要撤销更改时，左栏切换到第二栏 Files 栏中，聚焦要撤销的文件，键入 `d` 即会弹出提示框提示是否撤销该文件所有更改；如果是要把当前项目中的所有文件的更改一并撤销，则可以键入 `D` 后选择需要撤销的类型；
- branch：在左栏切换到第三栏 Local Branches 栏中，键入 `n` 即可基于当前分支创建新分支，键入 `d` 即可删除聚焦的分支；

以上是一些大家常用的 Git 操作对应的 lazygit 命令；当然，它的功能非常强大，还可以完成许多复杂的功能，具体可以参考官方文档。

:::tip Command Log 面板
对于刚刚开始使用 lazygit 的人来说，可能很多时候并不知道自己按下按键后到底发生了什么或者到底有没有执行到，其实在左边的 Command Log 面板会把每一次我们的操作所对应的命令显示出来，所以通过观察这个区域的输出，可以时刻知道到底发生了什么。
:::

记得一定要多尝试使用 lazygit，掌握新知识的方式，就是不断使用它，vim 如是，lazygit 也如是。

:::tip Git 知识
可能有一些朋友对于 Git 也只是停留在拉拉代码推推代码的程度，甚至可能连 reset 或 rebase 都没有用过的，可以在这个小训练中学习一下：[learnGitBranching](https://learngitbranching.js.org/?locale=zh_CN)。
:::