import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
        text: 'Examples!!',
        items: [
          { text: 'Markdown Examples', link: '/markdown/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api/api-examples' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/linche0859' }],
  },
  srcDir: './src',
  base: '/chelin-blog/',
  cleanUrls: true,
});
