# 起步：这是一个适合开始改变自己的日子

## 开始前

  正如进入游戏后我们首先是尝试移动我们控制的人物，开始 vim 的第一步，当然就是控制光标的上下左右啦；在开始之前，先忘记我们常用的右下的方向键（如果你是一个臭打游戏的，把 w a s d 也忘记，谢谢你）。

## 模式切换
  
  对于 vim 来说，有：
  
  - 命令模式（Command mode）
  - 输入模式（Insert mode）
  - 底线命令模式（Last line mode）
  
  这三种模式，而我们目前只需要用到前两种，分辨我们当前在那种模式的方法也很简单：
  
  - 光标是一条线，命令模式（Command mode）
  - 光标是一个方形，输入模式（Insert mode）
  - 没有光标或光标是文字的下划线（vscode），且输入内容时显示在命令行或窗口的底部，并且底部内容前有一个 : ，底线命令模式（Last line mode）

  ### 切换
  
  - **命令模式 到 输入模式：** 在 命令模式 中按 `i` （这里只是举例子，有很多其他的按键也可以进入插入模式，如下面提到的 `a`
  - **输入模式 到 命令模式：** 在 输入模式 中按 `Ctrl + [` 或 `esc`
  - **命令模式 到 底线命令模式** 在 命令模式 中按 `:` （目前并不会马上用到底线命令模式，但为了防止有时候不小心进入了该模式，所以提一嘴）
  - **底线命令模式 到 命令模式** 在 底线命令模式 中输入 `q` 

## 操作

  基本的操作：

  - 光标移动：`h` 左，`j` 下，`k` 上，`l` 右 （命令模式中）
  - 光标前插入：`i` （即 insert） （命令模式中）
  - 光标后插入：`a` （即 after） （命令模式中）
  - 删除一整行：`dd` （命令模式中）

### 小练习
把下列句子按照第一句的正确顺序修改好并把多余的空行删除
```
this is a simple easy vim tutorial

tutorial simple a easy this vim is
is this tutorial vim simple a easy


tutorial vim this is a easy simple
tutorial easy vim simple a this is
simple a vim easy tutorial is this

tutorial is easy vim a simple this


vim simple this tutorial a easy is
a vim tutorial simple easy is this


easy a simple vim is tutorial this
vim tutorial is a easy simple this
a this vim tutorial is easy simple
this tutorial simple easy a is vim


easy tutorial this simple a is vim
a tutorial easy is this simple vim

a tutorial vim is easy this simple
simple this easy is vim tutorial a

this tutorial is a easy simple vim
vim is tutorial simple this easy a

vim is simple this tutorial easy a
easy a simple is vim this tutorial
vim is tutorial simple a easy this
this vim is tutorial simple easy a
```

### 加点料
* 跳到单词尾：`e` （命令模式中） 
* 跳到单词头：`b` （命令模式中）
* 跳到下一个单词开头：`w` （命令模式中）
* 删除光标所在行并进入输入模式：`cc` （命令模式中）
