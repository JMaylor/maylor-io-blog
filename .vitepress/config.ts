import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    server: {
      port: 3000
    }
  },
  title: "Joe Maylor",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blogs', link: '/blogs/vue-type-generics' },
    ],

    sidebar: [
      {
        text: 'Blogs',
        items: [
          { text: 'Vue 3.3 Type Generics', link: '/blogs/vue-type-generics' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JMaylor/maylor-io-blog' }
    ]
  }
})
