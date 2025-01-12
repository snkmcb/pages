import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  
  // GitHubPages への展開
  // https://qiita.com/watame/items/42d2966c4be3cb4b052c
  // https://vitepress.dev/guide/deploy#setting-a-public-base-path
  base: "/github-pages-sample/",

  title: "Test Site",
  description: "Test Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about'},
      { text: 'Examples', link: '/markdown-examples' }
    ],

    // https://vitepress.dev/reference/default-theme-search
    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      //{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      { icon: 'github', link: 'https://github.com/snkmcb' }
    ]
  }
})
