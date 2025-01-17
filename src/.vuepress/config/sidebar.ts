import { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/guide/': [
    {
      text: 'Getting started',
      children: [
        { text: 'Introduction', link: '/guide/introduction' },
        { text: 'Install', link: '/guide/install' },
        { text: 'Server configuration', link: '/guide/server-configuration' },
        { text: 'Upgrade', link: '/guide/upgrade' },
      ],
    },
    {
      text: 'Essentials',
      children: [
        { text: 'Configuration', link: '/guide/essentials/configuration' },
        { text: 'Credentials', link: '/guide/essentials/credentials' },
        { text: 'Private/Public', link: '/guide/essentials/private-or-public' },
        { text: 'Character set', link: '/guide/essentials/charset' },
      ],
    },
    {
      text: 'Extend',
      children: [
        { text: 'Plugins', link: '/guide/extend/plugins' },
        { text: 'Pages', link: '/guide/extend/pages' },
        { text: 'Languages', link: '/guide/extend/languages' },
        {
          text: 'Possible with a plugin',
          link: '/guide/extend/possible-with-a-plugin',
        },
      ],
    },
    {
      text: 'Advanced',
      children: [
        { text: 'Passwordless API', link: '/guide/advanced/passwordless-api' },
        { text: 'Proxy', link: '/guide/advanced/proxy' },
        {
          text: 'Public shortening',
          link: '/guide/advanced/public-shortening',
        },
        { text: 'Custom protocols', link: '/guide/advanced/custom-protocols' },
      ],
    },
    {
      text: 'Troubleshooting',
      children: [
        { text: 'First steps', link: '/guide/troubleshooting/first-steps' },
        {
          text: 'Frequent issues',
          link: '/guide/troubleshooting/frequent-issues',
        },
        { text: 'Abuse', link: '/guide/troubleshooting/abuse' },
      ],
    },
  ],
  '/development/': [
    {
      text: 'Getting started',
      children: [
        { text: 'Plugins', link: '/development/plugins' },
        { text: "Don't hack core", link: '/development/dont-hack-core' },
        { text: 'Coding standards', link: '/development/coding-standards' },
        { text: 'Hooks', link: '/development/hooks' },
        { text: 'Database', link: '/development/database-queries' },
        { text: 'Forms', link: '/development/form-security' },
        { text: 'i18n', link: '/development/i18n' },
        { text: 'Debugging', link: '/development/debugging' },
      ],
    },
    {
      text: 'Examples',
      children: [
        { text: 'QRCode Link', link: '/development/examples/qrcode' },
        { text: 'Preview URL', link: '/development/examples/preview' },
        {
          text: 'Public Prefix-N-Shorten',
          link: '/development/examples/public-prefix',
        },
        { text: 'RSS', link: '/development/examples/rss' },
      ],
    },
  ],
}
