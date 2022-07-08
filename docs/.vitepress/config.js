module.exports = {
  title: "Just Vim It",
  description: "A simple vim tutorial for who haven't learn \ use \ know about vim",
  lang: "zh-CN",
  lastUpdated: true,
  // add the favicon file in public folder (public folder shoul not in vitepress but root ) and add the head prarm asll below
  head: [
    ['link', {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
  ],
  themeConfig: {
    siteTitle: "Just Vim It",
    logo: '/logo.png',
    nav: [{
      text: 'About Nauxscript',
      link: 'https://github.com/Nauxscript/'
    }, ],
    socialLinks: [{
      icon: 'github',
      link: 'https://github.com/Nauxscript/Just-Vim-It'
    }, ],
    sidebar: [{
        text: "介绍",
        items: [{
            text: "写在前面",
            link: "/index.md"
          },
          {
            text: "Mac 环境准备",
            link: "/for-mac.md"
          },
          {
            text: "Window 环境准备",
            link: "/for-window.md"
          },
        ]
      },
      {
        text: 'Vim',
        items: [{
            text: 'Day 1：起步',
            link: '/vim/day-1.md'
          },
          {
            text: 'Day 2：行相关命令',
            link: '/vim/day-2.md'
          },
          {
            text: 'Day 3：认识 vim 语法',
            link: '/vim/day-3.md'
          },
          {
            text: 'Day 4：删改重做命令提升效率',
            link: '/vim/day-4.md'
          },
          {
            text: 'Day 5：认识可视化模式',
            link: '/vim/day-5.md'
          },
          {
            text: 'Day 6：什么是文本对象？',
            link: '/vim/day-6.md'
          },
          {
            text: 'Day 7：让移动再次快起来!',
            link: '/vim/day-7.md'
          },
          {
            text: 'Day 8：掌握搜索命令',
            link: '/vim/day-8.md'
          },
          {
            text: 'Day 9：vim-easymotion',
            link: '/vim/day-9.md'
          },
          {
            text: 'Day 10：数字与 `.` 的威力',
            link: '/vim/day-10.md'
          },
          {
            text: 'Day 11：多文件跳转的奥妙',
            link: '/vim/day-11.md'
          },
          {
            text: 'Day 12：vim-surround',
            link: '/vim/day-12.md'
          },
          {
            text: 'Day 13：替换字符和多文本选中',
            link: '/vim/day-13.md'
          },
          {
            text: 'Day 14：大小写、注释与提示',
            link: '/vim/day-14.md'
          },
          {
            text: 'Day 15：窗口管理大法',
            link: '/vim/day-15.md'
          },
          {
            text: 'Day 16：快速删除一个函数',
            link: '/vim/day-16.md'
          },
          {
            text: 'Day 17：vim 的宏操作',
            link: '/vim/day-17.md'
          },
          {
            text: 'Day 18：调用 vscode 命令',
            link: '/vim/day-18.md'
          },
        ]
      },
      {
        text: "VScode",
        items: [{
            text: "Day 19：文件与窗口基础操作",
            link: '/vscode/day-19.md'
          },
          {
            text: "Day 20：常用窗口操作",
            link: '/vscode/day-20.md'
          },
          {
            text: "Day 21：全局搜索命令",
            link: '/vscode/day-21.md'
          },
          {
            text: "Day 22：开发常用小技巧",
            link: '/vscode/day-22.md'
          },
          {
            text: "Day 23：挖掘快捷键场景",
            link: '/vscode/day-23.md'
          },
          {
            text: "Day 24：Git 常用操作",
            link: '/vscode/day-24.md'
          },
          {
            text: "Day 25：Snippet 代码片段",
            link: '/vscode/day-25.md'
          },
          {
            text: "Day 26：代码重构工具",
            link: '/vscode/day-26.md'
          },
          {
            text: "Day 27：VSpaceCode 插件",
            link: '/vscode/day-27.md'
          },
          {
            text: "Day 28：Git 神器 lazygit",
            link: '/vscode/day-28.md'
          },
          {
            text: "Day 29：终端的基本操作",
            link: '/vscode/day-29.md'
          },
          {
            text: "Day 30：Debug the Bug",
            link: '/vscode/day-30.md'
          },
        ]
      },
      {
        text: "Chrome",
        items: [{
          text: "Day 31：浏览器中的 Vim",
          link: '/chrome/day-31.md'
        }]
      }
    ],
    algolia: {
      appId: 'RVMP1DL10N',
      apiKey: 'b6698444fb6414c2328728cdbc9eb681',
      indexName: 'just-vim-it',
      debug: false
    },
    laslltUpdatedText: "最后更新",
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Nauxscript'
    }
  },
}