import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-TW',
  title: 'CheLin Blog',
  description: '紀錄工作和生活上的所學與點滴',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown/markdown-examples' },
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          {
            text: 'Markdown Examples',
            link: '/markdown/markdown-examples',
          },
        ],
      },
      {
        text: 'API',
        items: [{ text: 'Runtime API Examples', link: '/api/api-examples' }],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/linche0859' }],
    search: {
      provider: 'algolia',
      options: {
        appId: 'B3FHHA5I4R',
        apiKey: '1457419de0a37f0c3544563013bfb4ed',
        indexName: 'chelin',
      },
    },
  },
  srcDir: './src',
  cleanUrls: true,
});
