## 认识 vim 语法

### 语法
  操作 + 范围
  1. 操作：如 `d`、`c`、`y`
    d：删除
    c：删除并进入 insert 模式
    y：复制
  2. 范围：如 `h`、`l`、`^`、`g _`
  3. 搭配使用：
    `d h`：删除当前光标前一个字符
    `d j`：删除当前光标所在行和下一行
    `d g _`：删除到行尾

### 基于单词的光标移动

  1. b：光标跳到当前所在光标的单词开头，如果光标已在该单词的开头，则跳到下一个单词的开头
  2. e：光标跳到当前所在光标的单词结尾，如果光标已在该单词的结尾，则跳到下一个单词的结尾
  3. w：光标跳到下一个单词的开头
  4. g e：光标跳到上一个单词的结尾

### 常用搭配

  1. `d e`：删除到单词尾
  2. `e a`：在当前单词后插入
  3. `d w`：删除到下个单词前（`c w` 功能相同，但会保留下个单词前的空格）

```
const a = () => {
  // this is a description
             
  const timer = setTimeout(() => {
    console.log(that)
    // awosome man !
  })
}
```

### 拓展

1. `D` 删除到行尾（包括blank字符）

### 问题
`d ^`：删除到行首操作会有光标所在的字母没有删除到
`c w`：删除到下个单词前会保留下个单词前的空格，`d w` 则不会

### 小训练
先敲出以下代码，然后修正以下代码中的错误单词、重复单词、错误格式、多余行、，并为定时器添加 300 毫秒延迟
```js
const typing = () => {
  // this is is a description
  //
  //   another descriptttion 
  const timer   = setTimeout(( ) => {
    console.log(that) alert('cool!')
    // awosome man !
  })
}
```