## take a break

```js
    const abbb = 123
```

### 删除
1. x：删除当前光标所在字符
2. X：删除当前光标所在字符的前一个字符
3. s：删除当前光标所在字符并进入 insert mode
4. S：删除当前光标所在行的除缩进外的所有内容并进入 insert mode

### 替换
1. r + 字符：替换当前光标所在字符
2. R + 字符：提换当前光标开始的多个字符

### 撤销/重做

1. u：撤销一次输入的内容（normal mode => insert mode => normal mode 为一次，或在 insert mode 中进行了光标移动也会增加一次）
2. Ctrl + r：重做

### 小训练

未完待续...
