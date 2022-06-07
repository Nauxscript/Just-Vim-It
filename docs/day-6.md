# 继续深入：文本对象

## 什么是文本对象

  在 vim 中，文本是结构化的存在，即 **文本对象（text—object）**；而 vim 对于文本对象，专门有一部分语法，用于快速对文本对象进行编辑操作。 
## 语法结构

  文本对象的操作语法：**operater + 范围（内 / 外）+ 文本对象**
  
  - 内：`i` ，意指 inner
  - 外：`a` ，英文单词 a，一个的意思

  可能看到这里，你会有点迷糊，没关系，我们下面会举例说明。
## 操作符

## 对象
  - `(` `)`
  - `b`
  - `{` `}`
  - `B`
  - `[` `]`
  - `<` `>`
  - `t`
  - `'` `'`
  - `"` `"`
  - `` ` `` `` ` ``

## 组合举例

## vim-textobj-arguments & vim-textobj-entire

  `ia`：不包含分隔符
  `aa`：包含分隔符
  `ae`：删除当前文本所有内容
  `ie`：删除当前文本所有内容，但不包括前面和后面的 blank 字符
  
## 小练习
  
  把以下被符号包裹的内容复制到符号外

  ``````js
  'single quotation mark'
  "double quotation mark"
  [square bracket]
  {curly bracket}
  <angel bracket>
  `backquote`
  ```