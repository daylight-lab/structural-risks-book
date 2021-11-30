const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Structural Risks to the Global Internet',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    sidebarDepth: 1,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Daylight Lab @ CLTC',
        link: 'https://daylight.berkeley.edu'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            '',
            'what-is-internet',
          ]
        },
        {
          title: 'Physical layer',
          collapsable: false,
          children: [
            'physical/what-is',
            'physical/undersea-cables',
          ]
        },
        {
          title: 'Transport layer',
          collapsable: false,
          children: [
            'transport/what-is',
            'transport/IP',
            'transport/BGP',
          ]
        },
        {
          title: 'Application layer',
          collapsable: false,
          children: [
            'application/what-is',
            'application/DNS',
            'application/CDNs',
            'application/AI',
          ]
        },
        {
          title: 'Conclusion',
          collapsable: false,
          children: [
            'conclusion/',
          ]
        },

      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
