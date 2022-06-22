# 任意门：easymotion，让光标移动得随心所欲

## 插件：vim-easymotion
  
  vim-easymotion 的出现，是为了替代如要移动光标到下五行的 `5j`、后六个单词的 `5w` 这类的移动光标时要与数字混合的指令（因为数字键不好按），它通过一种更直观的方式去让我们更方便舒服地移动光标。

### 配置
  
  - 开启 vim-easymotion 插件
  - 改键：`<Leader>` 改为 `space`
    :::tip 拓展
    什么是 `<Leader>` ？

    vim 中有很多快捷键，还有各种扩展插件，为了避免按键冲突以及丰富按键的组合，则推出了 `<Leader>` 的概念，即前缀键或扩展组合键，通过配置 `<Leader>` + 其他按键，来拓展出更多可用的组合键。   
    :::
  
### 指令

  - `<Leader>` `<Leader>` `w`：高亮光标后的所有单词的开头 
  - `<Leader>` `<Leader>` `b`：高亮光标前的所有单词的开头
  - `<Leader>` `<Leader>` `e`：高亮光标后的所有单词的结尾 
  - `<Leader>` `<Leader>` `ge`：高亮光标前的所有单词的结尾 
  - `<Leader>` `<Leader>` `l`：高亮光标后的单词的开头和结尾、驼峰、`_` 或 `#` 之后的内容
  - `<Leader>` `<Leader>` `h`：高亮光标前的单词的开头和结尾、驼峰、`_` 或 `#` 之后的内容
  - `<Leader>` `<Leader>` `j`：高亮光标后的所有行的开头 
  - `<Leader>` `<Leader>` `k`：高亮光标前的所有行的开头
  - `<Leader>` `<Leader>` `<Leader>` `j`：高亮光标所有的单词的开头和结尾、驼峰、`_` 或 `#` 之后的内容
  
## 插件：vim-sneak

  vim 中的 `f` 命令后面只能跟一个字符，这样搜索的效率在实际场景中其实不高，而且它是行内搜索；为了弥补这些短板，就有了 vim-sneak。vim-sneak 使用 `s` `S` 操作符，后面可以接两个字符，并且是全局搜索，即当你搜索了一次之后，可以使用 `;` 不断的往下搜索相同的内容；为了使用更方便，我们可以直接把 `f` `F` 映射到 `s` `S`，这样在日常使用中就更方便了。

### 配置

  - 开启 vim.sneak 插件，在 vscode 的 `setting.json` 中添加：
    ```json
      "vim.sneak": "true"
    ```
  
  - 添加改键映射：
    
    首先配置 normal mode 下的 `f` `F` 映射为 vim-sneak 的 `s` `S`，这样映射后，为了让 `s` `S` 恢复为最原始的功能（删除光标所在字符并进入 insert mode；删除光标所在行从开头非 blank 字符到行尾的内容），需要把 `s` `S` 的原始功能用 `c` `C` 实现一下，而且由于在这个映射过程中，存在递归映射的情况（如 `f` → `s` → `c l`），所以要配置在 `vim.normalModeKeyBindingsNonRecursive` 中，遂在 vscode 的 `setting.json` 中添加：
    ```json
    "vim.normalModeKeyBindingsNonRecursive": [
        ...
        {

            "after": ["s"]
        },
        {
            "before": ["F"],
            "after": ["S"]
        },
        {
            "before": ["s"],
            "after": ["c", "l"]
        },
        {
            "before": ["S"],
            "after": ["^", "C"]
        },
        ...
    ],
    
    ```

    配置完上面的设置后，我们就可以愉快地使用 `f` 或 `F` + 两个字符（或单字符 + 回车）在 normal mode 下进行搜索了，但是想在 visual mode 和 operater-pending 模式（即当输入了如 `d` `c` 等操作符后，vim 等待输入范围和文本对象时的状态，简而言之就是可以让 vim 支持如 `df` + 两个字符的这种操作，因为不配置的话在 operater-pending 模式中 vim-sneak 使用的是 `z` 操作符），则需要继续配置；并且在 visual mode 中，`F` 无法使用，遂只配置 `f`，配置如下：
    ```json
    "vim.visualModeKeyBindingsNonRecursive": [
        {
            "before": ["f"],
            "after": ["s"]
        },
    ],
    "vim.operatorPendingModeKeyBindingsNonRecursive": [
        {
            "before": ["f"],
            "after": ["z"]
        },
        {
            "before": ["F"],
            "after": ["Z"]
        },
    ],
    ```

## 小练习

  建议在日常使用中直接练习，或者把本文复制到中 vscode 随便跳。