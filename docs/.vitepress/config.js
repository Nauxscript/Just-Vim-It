module.exports = {
  title: "Just Vim It",
  description: "A simple vim tutorial for who haven't learn \ use \ know about vim",
  lang: "zh-CN",
  lastUpdated: true,
  // add the favicon file in public folder (public folder shoul not in vitepress but root ) and add the head prarm asll below
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    siteTitle: "Just Vim It",
    logo: '/logo.png',
    nav: [
      { text: 'About Nauxscript', link: 'https://github.com/Nauxscript/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Nauxscript/Just-Vim-It' },
    ],
    sidebar: [
      {
        text: "介绍",
        items: [
          { text: "写在前面", link: "/index.md" },
          { text: "Mac 环境准备", link: "/for-mac.md" },
          { text: "Window 环境准备", link: "/for-window.md" },
        ]
      },
      {
        text: '训练',
        items: [
          { text: 'Day 1：起步', link: '/day-1.md' },
          { text: 'Day 2：行相关命令', link: '/day-2.md' },
          { text: 'Day 3：认识 vim 语法', link: '/day-3.md' },
          { text: 'Day 4：删改重做命令提升效率', link: '/day-4.md' },
          { text: 'Day 5：认识可视化模式', link: '/day-5.md' },
          { text: 'Day 6：什么是文本对象？', link: '/day-6.md' },
          { text: 'Day 7：让移动再次快起来!', link: '/day-7.md' },
          { text: 'Day 8：掌握搜索命令', link: '/day-8.md' },
          { text: 'Day 9：vim-easymotion', link: '/day-9.md' },
          { text: 'Day 10：数字与 `.` 的威力', link: '/day-10.md' },
          { text: 'Day 11：多文件跳转的奥妙', link: '/day-11.md' },
          { text: 'Day 12：vim-surround', link: '/day-12.md' },
          { text: 'Day 13：替换字符和多文本选中', link: '/day-13.md' },
          { text: 'Day 14：大小写、注释与提示', link: '/day-14.md' },
          { text: 'Day 15：窗口管理大法', link: '/day-15.md' },
          { text: 'Day 16：快速删除一个函数', link: '/day-16.md' },
          { text: 'Day 17：vim 的宏操作', link: '/day-17.md' },
          { text: 'Day 18：vim 的宏操作', link: '/vim/day-18.md' },
        ]
      }
    ],
    laslltUpdatedText: "最后更新",
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Nauxscript'
    }
  },
}