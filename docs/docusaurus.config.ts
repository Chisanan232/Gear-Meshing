import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkGfm from 'remark-gfm';
import remarkMdxCodeMeta from 'remark-mdx-code-meta';

const config: Config = {
  title: 'Engineering AI Agent',
  tagline: 'AI-powered software development assistance',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://chisanan232.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/Gear-Meshing/',
  projectName: 'chisanan232.github.io',
  organizationName: 'chisanan232',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
    format: 'detect',
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/Chisanan232/Engineering-AI-Agent/tree/master/docs/',
          routeBasePath: '/',
          remarkPlugins: [remarkGfm, remarkMdxCodeMeta],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          showLastUpdateTime: true,
          include: ['**/*.{md,mdx}'],
          lastVersion: 'current',
          onlyIncludeVersions: ['current', '0.1.0'],
          versions: {
            current: {
              label: 'Next',
            },
            '0.1.0': {
              label: '0.1.0',
              banner: 'none',
            },
          },
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [],

  themes: [
    '@docusaurus/theme-mermaid',
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Engineering AI Agent',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'development',
          position: 'left',
          label: 'Development',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              type: 'html',
              value: '<hr class="dropdown-separator">',
            },
            {
              to: '/versions',
              label: 'All versions',
            },
          ],
        },
        {
          href: 'https://github.com/Chisanan232/Engineering-AI-Agent',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Issues',
              href: 'https://github.com/Chisanan232/Engineering-AI-Agent/issues',
            },
            {
              label: 'Pull Requests',
              href: 'https://github.com/Chisanan232/Engineering-AI-Agent/pulls',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Chisanan232/Engineering-AI-Agent',
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Engineering AI Agent Project. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    mermaid: {
      theme: { light: 'default', dark: 'dark' },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
