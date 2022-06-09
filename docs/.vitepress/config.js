module.exports = {
  title: "Just Vim It",
  description: "A simple vim tutorial for who haven't learn \ use \ know about vim",
  lang: "zh-CN",
  lastUpdated: true,
  themeConfig: {
    siteTitle: "Just Vim It",
    nav: [
      { text: 'About Nauxscript', link: 'https://www.nauxscript.com' },
      { text: 'Github', link: 'https://github.com/Nauxscript/Just-Vim-It' }
    ],
    sidebar: [
      {
        text: "介绍",
        items: [
          { text: "写在前面", link: "/index.md" }
        ]
      },
      {
        text: '训练',
        items: [
          { text: 'Day 1', link: '/day-1.md' },
          { text: 'Day 2', link: '/day-2.md' },
          { text: 'Day 3', link: '/day-3.md' },
          { text: 'Day 4', link: '/day-4.md' },
          { text: 'Day 5', link: '/day-5.md' },
          { text: 'Day 6', link: '/day-6.md' },
          { text: 'Day 7', link: '/day-7.md' },
          { text: 'Day 8', link: '/day-8.md' },
        ]
      }
    ],
    lastUpdatedText: "Last updated" 
  },
}